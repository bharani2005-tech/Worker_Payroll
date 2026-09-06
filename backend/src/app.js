const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

const { errorHandler, notFound } = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const workerRoutes = require('./routes/workerRoutes');
const workEntryRoutes = require('./routes/workEntryRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Trust the first proxy hop (Nginx/ELB/Vercel) to ensure rate limiters see real client IPs
app.set('trust proxy', 1);

// Security headers
app.use(helmet());

// CORS - only allow the configured frontend origin, with credentials for cookies
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:4200',
    credentials: true,
  })
);

// Body & cookie parsing
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Sanitize against NoSQL injection ($ and . operator injection)
app.use(mongoSanitize());

// Prevent HTTP parameter pollution
app.use(hpp());

// Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}

// General rate limiting
app.use('/api', apiLimiter);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'WorkerPay Pro API is running.', timestamp: new Date() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/work-entries', workEntryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
