import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import noteRoutes from './routes/notes.js'

// define express app and uses
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }))
app.use(cors());
app.use('/notes', noteRoutes);
dotenv.config();

// https://www.mongodb.com/cloud/atlas
// PORT and CONNECTION_URL defined in .env

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));