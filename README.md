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

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbhishekRajvanshi07/realtime-chat-system.git
cd realtime-chat-system
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
npm start
```

Backend runs on:
`http://localhost:5001`

---

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend runs on:
`http://localhost:5173`

---

## 👨‍💻 Author

**Abhishek Kumar**
B.Tech ECE | Full Stack Developer

GitHub: https://github.com/AbhishekRajvanshi07

