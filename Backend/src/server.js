require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/redis-adapter");

const app = require("./app");
const connectDB = require("./config/db");
const { pubClient, subClient, connectRedis } = require("./config/redis");
const chatSocket = require("./sockets/chatSocket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

(async () => {
  await connectDB();
  await connectRedis();

  io.adapter(createAdapter(pubClient, subClient));
  chatSocket(io);

  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})();
