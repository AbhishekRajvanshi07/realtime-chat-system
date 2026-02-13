import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Chat.css";


export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const currentUserId = decoded.id;
  const username = decoded.username;

  const roomId = "room1";

  useEffect(() => {
    const socket = io("https://realtime-chat-riyo.onrender.com", {
      auth: { token },
    });

    socketRef.current = socket;
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    socketRef.current.emit("sendMessage", {
      roomId,
      senderId: currentUserId,
      receiverId: "temp",
      content: message,
    });

    setMessage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="chat-wrapper">

      {/* HEADER */}
      <div className="chat-header">
        <div className="chat-user">
          <div className="avatar">
            {username.charAt(0).toUpperCase()}
          </div>
          <span>{username}</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MESSAGES */}
      <div className="chat-body">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message ${
              m.senderId === currentUserId ? "sent" : "received"
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}
