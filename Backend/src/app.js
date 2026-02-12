const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);


// app.get("/", (req, res) => {
//   res.send("Real-Time Chat Server Running 🚀");
// });

// 👇 THIS MUST EXIST
app.use("/api/auth", authRoutes);

module.exports = app;
