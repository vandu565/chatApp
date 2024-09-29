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
- `POST /register`: Create a new user account.
- `POST /login`: User login.
- `GET /:id/verify/:token`: Verify email.
- `GET /profile`: View profile.
- `POST /profile/update`: Update profile.

### Message Routes
- `GET /messages/:userId`: Display all messages.
- `GET /people`: View active people.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/vandu565/chatApp.git
