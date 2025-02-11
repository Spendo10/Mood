const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create and save new user
    user = new User({ name, email, password });
    await user.save();

    // Create JWT token
    const token = jwt.sign(
      { sub: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response with token
    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login an existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { sub: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response with token
    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Protected route example using token
const exampleProtectedRoute = async (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Get token from header
  if (!token) {
    return res.status(401).json({ message: 'Token is required for protected route' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'This is a protected route', user: decoded });
  } catch (err) {
    res.status(401).json({ message: 'Token is invalid or expired' });
  }
};

// Protect routes with JWT authentication
const protect = async (req, res, next) => {
  let token;

  // Check if token exists in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next(); // Allow the next middleware/route handler
    } catch (err) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { registerUser, loginUser, protect, exampleProtectedRoute };
