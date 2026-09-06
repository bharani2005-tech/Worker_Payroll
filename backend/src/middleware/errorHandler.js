const ApiError = require('../utils/ApiError');

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  let error = err;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new ApiError(400, `Invalid value for field: ${err.path}`);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    error = new ApiError(400, messages.join('; '));
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0];
    error = new ApiError(409, `Duplicate value for field: ${field}`);
  }

  const statusCode = error.statusCode || 500;
  const message = error.isOperational ? error.message : 'Internal server error';

  if (statusCode === 500) {
    console.error('[Unhandled Error]', err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(error.details ? { details: error.details } : {}),
  });
};

const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
};

module.exports = { errorHandler, notFound };
