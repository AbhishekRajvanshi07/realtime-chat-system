require("dotenv").config();
const http = require("http");
const path = require("path");
const express = require("express");
const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/redis-adapter");

const app = require("./app");
const connectDB = require("./config/db");
const { pubClient, subClient, connectRedis } = require("./config/redis");
const chatSocket = require("./sockets/chatSocket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

(async () => {
  await connectDB();
  await connectRedis();

  io.adapter(createAdapter(pubClient, subClient));
  chatSocket(io);

  // ✅ Serve React build
  app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

  // ✅ Catch all routes (Express 5 compatible)
  app.use((req, res) => {
    res.sendFile(
      path.join(__dirname, "../../Frontend/dist/index.html")
    );
  });

  server.listen(process.env.PORT || 5001, () => {
    console.log(`Server running on port ${process.env.PORT || 5001}`);
  });
})();
