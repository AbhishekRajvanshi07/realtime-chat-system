const Message = require("../models/Message");
const Notification = require("../models/Notification");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
    });

    socket.on("sendMessage", async (data) => {
      const { roomId, senderId, receiverId, content } = data;

      const message = await Message.create({
        roomId,
        senderId,
        receiverId,
        content,
      });

      io.to(roomId).emit("receiveMessage", message);

      const notification = await Notification.create({
        userId: receiverId,
        message: `New message from ${senderId}`
      });

      io.to(receiverId).emit("newNotification", notification);
    });

    socket.on("typing", (roomId) => {
      socket.to(roomId).emit("userTyping");
    });

    socket.on("stopTyping", (roomId) => {
      socket.to(roomId).emit("userStoppedTyping");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
