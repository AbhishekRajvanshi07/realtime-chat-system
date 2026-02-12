# 🚀 RealTimeChat

A scalable full-stack real-time chat application built with Node.js, Express, Socket.io, MongoDB Atlas, Redis (Upstash), and React (Vite).  
Deployed as a single full-stack service on Render.

🔗 **Live App:**  
https://realtime-chat-system-2.onrender.com

---

## 🛠 Tech Stack

**Backend:** Node.js, Express.js, Socket.io, MongoDB Atlas, Redis (Upstash), JWT, bcrypt  
**Frontend:** React (Vite)  
**Deployment:** Render (Cloud)

---

## ✨ Features

- 🔐 JWT Authentication
- 💬 Real-time messaging (Socket.io)
- 🏠 Room-based chat system
- 📦 MongoDB message persistence
- ⚡ Redis Pub/Sub for scalability
- 🎨 Modern responsive UI

---

## 🏗 Architecture

Client (React)  
↓  
Express API + JWT  
↓  
Socket.io Server  
↓  
Redis Adapter  
↓  
MongoDB Atlas  

---

## ⚙️ Setup

```bash
git clone https://github.com/AbhishekRajvanshi07/RealTimeChat.git
cd RealTimeChat
cd Backend
npm install
npm start
cd Frontend
npm install
npm run dev

👨‍💻 Author

Abhishek Kumar
