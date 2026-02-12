const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// GET message history with pagination
router.get("/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const messages = await Message.find({ roomId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(messages.reverse()); // oldest first
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
