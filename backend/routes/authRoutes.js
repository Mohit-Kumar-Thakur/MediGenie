const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const validateLogin = [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
];

// Mirrors the constraints in models/User.js so users get a clear 400 instead of a 500.
const validateRegister = [
    body('username')
    .trim()
    .matches(/^[a-zA-Z0-9_]{3,30}$/)
    .withMessage('Username must be 3-30 characters: letters, numbers and underscores only'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must be at least 8 characters with an uppercase letter, a lowercase letter, a number and a special character (@$!%*?&)')
];

router.post('/login', validateLogin, authController.login);
router.post('/register', validateRegister, authController.register);

router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
