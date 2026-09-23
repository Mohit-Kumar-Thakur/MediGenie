const mongoose = require('mongoose');

// Reuse the connection across serverless invocations.
let cached = global.__mongoose;
if (!cached) cached = global.__mongoose = { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;
    // MONGODB_URI is what the Vercel MongoDB Atlas integration provides.
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGO_URI is not set');

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(uri, { serverSelectionTimeoutMS: 8000 })
            .then(async (m) => {
                await require('./seed')();
                return m;
            })
            .catch((err) => {
                cached.promise = null;
                throw err;
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
};

module.exports = connectDB;
