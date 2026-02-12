🚀 Real-Time Chat System

A production-ready full-stack real-time chat application built with:

Node.js

Express.js

Socket.io

MongoDB Atlas

Redis (Upstash Pub/Sub)

JWT Authentication

React (Vite)

Deployed on Render

🌍 Live Demo

🔗 https://your-live-url.onrender.com

🏗 Architecture

Client (React)
↓
JWT Authentication
↓
Socket.io Server
↓
Redis Pub/Sub Adapter
↓
MongoDB Atlas

🔐 Features

JWT-secured authentication

Real-time messaging via WebSockets

Horizontal scalability using Redis Pub/Sub

MongoDB message persistence

Typing indicators

Modern responsive UI

Full-stack single deployment

⚙️ Local Setup
1️⃣ Clone the repo
git clone https://github.com/AbhishekRajvanshi07/RealTimeChat.git
cd RealTimeChat

2️⃣ Install backend dependencies
cd Backend
npm install

3️⃣ Install frontend dependencies
cd ../Frontend
npm install
npm run build

4️⃣ Run backend
cd ../Backend
npm start

🧠 Tech Highlights

Event-driven architecture

Distributed real-time communication

Secure environment variable management

Full production deployment on Render

📌 Future Improvements

Private chat rooms

Read receipts

Online presence tracking

Rate limiting

Docker containerization

CI/CD pipeline

👨‍💻 Author

Abhishek Kumar
B.Tech ECE, NIT Srinagar