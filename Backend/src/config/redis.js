const { createClient } = require("redis");

const pubClient = createClient({ url: process.env.REDIS_URL });
const subClient = pubClient.duplicate();

const connectRedis = async () => {
  await pubClient.connect();
  await subClient.connect();
  console.log("Redis Connected");
};

module.exports = { pubClient, subClient, connectRedis };
