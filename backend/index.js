import express from 'express';
// const express = require('express');
import cors from 'cors';
import notesRouter from '/Users/abhaykesarwani/Desktop/MERN_2025/backend/notesRouter.js'
import connectDB from './config/db.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

connectDB();
cors

app.use(cors());
app.use(express.json());

app.use("/api/v1", notesRouter)
