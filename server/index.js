import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import fileRoutes from './routes/files.js'

const app = express();

app.use('/files', fileRoutes);
app.use(bodyParser.json({ limit: "30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }))
app.use(cors());

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://erikjearl:Ee8585410268@cluster0.qqwhiak.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));