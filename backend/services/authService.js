const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not set');
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
        algorithm: 'HS256'
    });
};

const toPublicUser = (user) => ({
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
});

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('INVALID_CREDENTIALS');
    }
    return { user: toPublicUser(user), token: generateToken(user._id) };
};

exports.registerUser = async (username, email, password) => {
    const existing = await User.findOne({
        $or: [{ email: email.toLowerCase() }, { username }]
    });
    if (existing) {
        throw new Error(existing.username === username ? 'USERNAME_TAKEN' : 'USER_EXISTS');
    }

    const user = new User({ username, email: email.toLowerCase(), password });
    await user.save();
    return { user: toPublicUser(user), token: generateToken(user._id) };
};

exports.getUserProfile = async (userId) => {
    const user = await User.findById(userId);
    if (!user) throw new Error('USER_NOT_FOUND');
    return toPublicUser(user);
};
