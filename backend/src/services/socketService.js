let ioInstance = null;
// Maps userId (string) -> Set of socket ids, to support multiple tabs/devices
const userSocketMap = new Map();

const initSocket = (io) => {
  ioInstance = io;

  io.on('connection', (socket) => {
    const userId = socket.handshake.auth?.userId;
    if (userId) {
      if (!userSocketMap.has(userId)) userSocketMap.set(userId, new Set());
      userSocketMap.get(userId).add(socket.id);
    }

    socket.on('disconnect', () => {
      if (userId && userSocketMap.has(userId)) {
        userSocketMap.get(userId).delete(socket.id);
        if (userSocketMap.get(userId).size === 0) userSocketMap.delete(userId);
      }
    });
  });
};

/** Emits an event to all active sockets for a given userId. */
const emitToUser = (userId, event, payload) => {
  if (!ioInstance || !userId) return;
  const socketIds = userSocketMap.get(userId.toString());
  if (!socketIds) return;
  socketIds.forEach((id) => ioInstance.to(id).emit(event, payload));
};

/** Emits an event to every connected client (e.g. admin-wide announcements). */
const emitToAll = (event, payload) => {
  if (!ioInstance) return;
  ioInstance.emit(event, payload);
};

module.exports = { initSocket, emitToUser, emitToAll };
