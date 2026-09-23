const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');
const conditionRoutes = require('./routes/conditionRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Make sure the database is connected before any data route runs.
app.use('/api', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        res.status(503).json({ message: 'Database unavailable, please try again shortly' });
    }
});

app.use('/api/conditions', conditionRoutes);
app.use('/api/auth', authRoutes);

app.use('/api', (req, res) => res.status(404).json({ message: 'Not found' }));

app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({ message: 'Invalid JSON format' });
    }
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((e) => e.message).join(', ');
        return res.status(400).json({ message });
    }
    console.error('Server error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    connectDB()
        .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
        .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = app;
