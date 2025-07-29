

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config({});
const app = express();

// Middleware   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(express.static('public'));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials:true
}

app.use(cors(corsOptions));

app.get('/home',(req, res) => {
  return res.status(200).json({
    message: 'Welcome to the backend job application!',
    success : true
  });
});


const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});