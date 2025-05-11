const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://frontend-echoevaluator-kruj.onrender.com",  // Your frontend URL
  methods: ["GET", "POST"],
  credentials: true,  // Allow cookies to be sent from the frontend
}));

app.options('*', cors());

connectDB();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
