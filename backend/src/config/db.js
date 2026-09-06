const mongoose = require('mongoose');
const dns = require('dns');

// Bypass querySrv ECONNREFUSED/DNS resolution issues with custom DNS servers
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '2001:4860:4860::8888', '2606:4700:4700::1111']);
} catch (e) {
  console.warn('[DNS] Failed to set custom DNS servers:', e.message);
}

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    mongoose.set('strictQuery', true);

    const conn = await mongoose.connect(uri, {
      autoIndex: process.env.NODE_ENV !== 'production',
    });

    console.log(`[MongoDB] Connected: ${conn.connection.host}/${conn.connection.name}`);

    mongoose.connection.on('disconnected', () => {
      console.warn('[MongoDB] Disconnected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('[MongoDB] Connection error:', err.message);
    });

    return conn;
  } catch (err) {
    console.error('[MongoDB] Initial connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
