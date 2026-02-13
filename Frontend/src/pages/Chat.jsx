import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

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

    socket.on("userTyping", () => {
      setTyping("Typing...");
      setTimeout(() => setTyping(""), 2000);
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
      receiverId: "receiver-temp",
      content: message,
    });

    setMessage("");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="chat-page">
      <div className="chat-wrapper">
        <div className="chat-header">
          <div>
            <h3>Realtime Chat</h3>
            <span>{username}</span>
          </div>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message ${
                m.senderId === currentUserId
                  ? "sent"
                  : "received"
              }`}
            >
              <div className="bubble">
                {m.content}
              </div>
            </div>
          ))}

          {typing && <div className="typing">{typing}</div>}
          <div ref={bottomRef} />
        </div>

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
    </div>
  );
}
