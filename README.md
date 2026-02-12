# Real-Time Chat & Notification System

A production-ready real-time messaging backend built using:

- Node.js
- Express.js
- Socket.io
- MongoDB Atlas
- Redis (Upstash Pub/Sub)
- JWT Authentication

## Features

- JWT-secured REST authentication
- WebSocket-based real-time messaging
- Redis Pub/Sub for horizontal scalability
- Message persistence using MongoDB
- Typing indicator
- Paginated message history API

## Architecture

Client  
↓  
JWT Authentication  
↓  
Socket.io Server  
↓  
Redis Pub/Sub Adapter  
↓  
MongoDB Atlas  

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET /api/messages/:roomId?page=1&limit=20  

## Tech Highlights

- Event-driven architecture
- Distributed messaging support
- Cloud database integration
- Secure environment variable management

## Future Improvements

- Read receipts
- Rate limiting
- Docker deployment
- Production logging & monitoring
