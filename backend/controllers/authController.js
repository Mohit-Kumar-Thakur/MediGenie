const authService = require('../services/authService');
const { validationResult } = require('express-validator');

const validationFailed = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return false;
    res.status(400).json({ message: errors.array()[0].msg, errors: errors.array() });
    return true;
};

exports.login = async (req, res, next) => {
    if (validationFailed(req, res)) return;

    try {
        const { email, password } = req.body;
        res.status(200).json(await authService.loginUser(email, password));
    } catch (error) {
        if (error.message === 'INVALID_CREDENTIALS') {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        next(error);
    }
};

exports.register = async (req, res, next) => {
    if (validationFailed(req, res)) return;

    try {
        const { username, email, password } = req.body;
        res.status(201).json(await authService.registerUser(username, email, password));
    } catch (error) {
        if (error.message === 'USER_EXISTS') {
            return res.status(409).json({ message: 'Email already registered' });
        }
        if (error.message === 'USERNAME_TAKEN') {
            return res.status(409).json({ message: 'Username already taken' });
        }
        next(error);
    }
};

exports.getProfile = async (req, res, next) => {
    try {
        res.status(200).json(await authService.getUserProfile(req.user.id));
    } catch (error) {
        if (error.message === 'USER_NOT_FOUND') {
            return res.status(404).json({ message: 'User not found' });
        }
        next(error);
    }
};
