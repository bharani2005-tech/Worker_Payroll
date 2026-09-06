const AuditLog = require('../models/AuditLog');

/**
 * Fire-and-forget audit log writer. Never throws into the caller's
 * request flow — logging failures shouldn't break the actual operation.
 */
const writeAuditLog = async ({ action, entity, entityId, user, metadata = {}, ipAddress = '' }) => {
  try {
    await AuditLog.create({ action, entity, entityId, user, metadata, ipAddress });
  } catch (err) {
    console.error('[AuditLog] Failed to write log:', err.message);
  }
};

module.exports = { writeAuditLog };
