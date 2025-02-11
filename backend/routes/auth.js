
const express = require('express');
const { registerUser, loginUser, protect } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
