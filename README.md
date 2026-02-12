🚀 RealTimeChat — Full Stack Real-Time Messaging System

A production-ready full-stack real-time chat application built using:

Node.js

Express.js

Socket.io

MongoDB Atlas

Redis (Upstash Pub/Sub)

JWT Authentication

React (Vite)

Render Deployment

🌐 Live Demo

🔗 Live App:
https://realtime-chat-system-2.onrender.com

📌 Features
🔐 Authentication

JWT-based secure login & registration

Password hashing using bcrypt

Protected WebSocket connections

💬 Real-Time Messaging

Instant bidirectional messaging using Socket.io

Room-based chat system

Auto-scroll

Typing indicators

Modern chat UI

📦 Backend Capabilities

Redis Pub/Sub adapter for horizontal scalability

MongoDB message persistence

Notification model support

REST API for paginated messages

Clean MVC architecture

🎨 Frontend

React + Vite

Modern chat interface

Message alignment (sender vs receiver)

Login / Register UI

Auto token storage

🏗 Architecture
Client (React)
        ↓
JWT Authentication
        ↓
Express API
        ↓
Socket.io Server
        ↓
Redis Pub/Sub Adapter
        ↓
MongoDB Atlas

📂 Project Structure
RealTimeChat/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── sockets/
│   │   └── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

⚙️ Environment Variables

Backend .env

PORT=5001
MONGO_URI=your_mongodb_connection
REDIS_URL=your_upstash_redis_url
JWT_SECRET=your_secret_key

🛠 Installation (Local Setup)
1️⃣ Clone Repository
git clone https://github.com/AbhishekRajvanshi07/RealTimeChat.git
cd RealTimeChat

2️⃣ Install Backend
cd Backend
npm install
npm start

3️⃣ Install Frontend
cd ../Frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5001

🚀 Production Deployment

Frontend built using vite build

Served statically via Express

Deployed as single full-stack service on Render

Uses MongoDB Atlas (cloud)

Uses Upstash Redis (cloud)

🧠 Technical Highlights

Event-driven architecture

Horizontal scalability with Redis adapter

Secure WebSocket authentication

Clean separation of concerns

Production-ready folder structure

Cloud-native deployment

🔥 Future Improvements

Private 1-to-1 chat

Online/offline presence

Message delivery & read receipts

File & image sharing

Docker containerization

Microservices architecture

Kubernetes deployment

👨‍💻 Author

Abhishek Rajvanshi
Full Stack Developer | Real-Time Systems Enthusiast

GitHub: https://github.com/AbhishekRajvanshi07

⭐ If You Like This Project

Star the repository ⭐
Fork it 🍴
Build on top of it 🚀

If you want, I can now:

💎 Make it ATS optimized for resume impact

🏆 Make it look like FAANG-level project documentation

📊 Add architecture diagram image

🐳 Add Docker section

☁ Add CI/CD workflow section

Tell me which level you want 😎

not like in exact formate

Got it 👍
You want a clean, professional README in exact proper GitHub format, not flashy, not emoji-heavy, not exaggerated.

Here is a structured, industry-standard README you can directly paste.

RealTimeChat

Full-stack real-time chat application built with Node.js, Express, Socket.io, MongoDB, Redis, and React.

Live Deployment:
https://realtime-chat-system-2.onrender.com

Overview

RealTimeChat is a production-ready real-time messaging system that supports secure authentication, persistent message storage, and scalable WebSocket communication using Redis Pub/Sub.

The application is deployed as a single full-stack service, where the React frontend is served by the Express backend.

Tech Stack
Backend

Node.js

Express.js

Socket.io

MongoDB Atlas

Redis (Upstash)

JWT Authentication

bcrypt (password hashing)

Frontend

React (Vite)

React Router

Axios

Socket.io Client

Deployment

Render (Full Stack Service)

MongoDB Atlas (Cloud Database)

Upstash Redis (Cloud Redis)

Features

JWT-based authentication (Login & Register)

Real-time messaging using WebSockets

Room-based communication

MongoDB message persistence

Redis Pub/Sub adapter for scalability

Typing indicators

Auto-scroll message view

Clean, modern chat UI

Deployed full-stack application

Architecture

Client (React)
→ REST Authentication (JWT)
→ Socket.io Server
→ Redis Adapter
→ MongoDB Atlas

Project Structure
RealTimeChat/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── sockets/
│   │   └── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json

Environment Variables (Backend)

Create a .env file inside the Backend directory:

PORT=5001
MONGO_URI=your_mongodb_connection_string
REDIS_URL=your_upstash_redis_url
JWT_SECRET=your_secret_key

Local Setup
Clone the Repository
git clone https://github.com/AbhishekRajvanshi07/RealTimeChat.git
cd RealTimeChat

Install Backend
cd Backend
npm install
npm start


Backend runs on:

http://localhost:5001

Install Frontend
cd ../Frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

Production Deployment

The frontend is built using Vite and served statically via Express in production.
The application is deployed as a single service on Render.

API Endpoints

POST /api/auth/register
POST /api/auth/login
GET /api/messages/:roomId

Future Improvements

Private one-to-one chat

Online/offline presence tracking

Read receipts

File sharing

Docker support

CI/CD pipeline

Author

Abhishek Rajvanshi
