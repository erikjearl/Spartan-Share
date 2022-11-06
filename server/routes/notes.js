import express from 'express';
import { getNotes, postNote } from '../controllers/notes.js';

// upload routes defined as '/upload'
const router = express.Router();

// REST functions defined in /controllers/uploads
router
    .route('/')
    .get(getNotes)
    .post(postNote);

export default router;