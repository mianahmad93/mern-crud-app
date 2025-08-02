# MERN CRUD App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that supports full CRUD (Create, Read, Update, Delete) functionality.

## 📁 Folder Structure

mern-crud-app/
│
├── backend/         # Express.js + Node.js backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── controllers/ # Route controllers
│   └── server.js    # App entry point
│
├── frontend/        # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md

## 🚀 Features

- Create, Read, Update, and Delete operations
- RESTful API using Express.js
- MongoDB database using Mongoose
- React-based UI for frontend
- Axios for API communication

## 🛠️ Setup Instructions (Local Development)

### 1. Clone the repository

git clone https://github.com/mianahmad93/mern-crud-app.git
cd mern-crud-app

### 2. Install Backend Dependencies

cd backend
npm install

Create a .env file in the backend folder and add your MongoDB connection string:

MONGO_URI=your-mongodb-uri
PORT=5000

Then start the backend server:

npm run dev

### 3. Install Frontend Dependencies

Open a new terminal:

cd frontend
npm install
npm run dev

## 🌐 Deployment (To Be Added)

This app is currently in local development. Deployment links will be added soon.
