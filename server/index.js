import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import uploadRoutes from './routes/uploads.js'

// define express app and uses
const app = express();
app.use('/uploads', uploadRoutes);
app.use(bodyParser.json({ limit: "30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }))
app.use(cors());

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://<put a real connection key here when made>' 
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));