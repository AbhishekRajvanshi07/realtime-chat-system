import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // 🔐 Redirect if no token
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) return null;

  const decoded = jwtDecode(token);
  const currentUserId = decoded.id;
  const username = decoded.username;
  const roomId = "room1";

  useEffect(() => {
    const socket = io("https://realtime-chat-riyo.onrender.com", {
      transports: ["websocket"],
      auth: { token },
    });

    socketRef.current = socket;
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("userTyping", () => {
      setTyping("User is typing...");
      setTimeout(() => setTyping(""), 2000);
    });

    return () => socket.disconnect();
  }, [token]);

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

  const handleTyping = () => {
    socketRef.current.emit("typing", roomId);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    socketRef.current?.disconnect();
    navigate("/");
  };

  return (
    <div className="chat-container">
      <div className="chat-card">
        <div className="chat-header">
          <h2>Realtime Chat</h2>
          <div className="header-right">
            <span className="username">{username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-wrapper ${
                m.senderId === currentUserId ? "my-message" : "other-message"
              }`}
            >
              <div className="message-bubble">
                <small>
                  {m.senderId === currentUserId ? "You" : m.senderId}
                </small>
                <p>{m.content}</p>
              </div>
            </div>
          ))}

          {typing && <p className="typing">{typing}</p>}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleTyping}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
