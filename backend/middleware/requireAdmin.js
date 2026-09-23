const User = require('../models/User');

// Must run after authMiddleware.
module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('role');
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: 'Admin access required' });
        }
        next();
    } catch (error) {
        next(error);
    }
};
