const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(helmet()); // Security headers
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: "https://frontend-echoevaluator-kruj.onrender.com",
  methods: ["GET", "POST"],
  credentials: true,
}));

// Routes
app.use('/auth', authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
