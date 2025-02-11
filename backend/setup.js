const fs = require('fs');
const path = require('path');

// Folder structure
const folders = [
  'config',
  'controllers',
  'models',
  'routes'
];

// Files to be created
const files = [
  '.env',
  'server.js',
  'config/db.js',
  'controllers/authController.js',
  'models/User.js',
  'routes/auth.js'
];

// Create folders
folders.forEach(folder => {
  const dirPath = path.join(__dirname, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Folder created: ${dirPath}`);
  }
});

// Create files with default content
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
    console.log(`File created: ${filePath}`);
  }
});

// Add content to files
fs.writeFileSync(path.join(__dirname, '.env'), `
PORT=5000
MONGO_URI=mongodb+srv://admin:password123@cluster0.3qsgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key
`, 'utf8');

fs.writeFileSync(path.join(__dirname, 'config/db.js'), `
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
`, 'utf8');

fs.writeFileSync(path.join(__dirname, 'controllers/authController.js'), `
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign(
      { sub: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { sub: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { registerUser, loginUser, protect };
`, 'utf8');

fs.writeFileSync(path.join(__dirname, 'models/User.js'), `
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
`, 'utf8');

fs.writeFileSync(path.join(__dirname, 'routes/auth.js'), `
const express = require('express');
const { registerUser, loginUser, protect } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
`, 'utf8');

fs.writeFileSync(path.join(__dirname, 'server.js'), `
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`, 'utf8');

console.log('Backend setup completed successfully!');
