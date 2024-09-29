# ChatApp

A real-time chat application built with Node.js, Express, and WebSocket for instant messaging.

## Features
- User authentication.
- Real-time chat between users.
- Persistent message storage.

## Technologies Used
- **Node.js**
- **Express**
- **WebSocket**
- **MongoDB**

## API Endpoints

### User Routes
- `POST /api/users/signup`: Create a new user account.
- `POST /api/users/login`: User login.
- `GET /api/users/profile`: Get user profile info (requires authentication).

### Message Routes
- `POST /api/messages`: Send a message between users.
- `GET /api/messages/:conversationId`: Get messages in a specific conversation.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/vandu565/chatApp.git
