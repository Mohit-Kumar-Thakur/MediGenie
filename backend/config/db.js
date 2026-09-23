const mongoose = require('mongoose');

// Reuse the connection across serverless invocations.
let cached = global.__mongoose;
if (!cached) cached = global.__mongoose = { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;
    if (!process.env.MONGO_URI) throw new Error('MONGO_URI is not set');

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 })
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
