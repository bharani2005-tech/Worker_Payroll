require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const connectDB = require('./config/db');
const { initSocket } = require('./services/socketService');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:4200',
      credentials: true,
    },
  });
  initSocket(io);

  server.listen(PORT, () => {
    console.log(`[Server] WorkerPay Pro API running on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
  });

  process.on('unhandledRejection', (err) => {
    console.error('[UnhandledRejection]', err);
    server.close(() => process.exit(1));
  });
};

startServer();
