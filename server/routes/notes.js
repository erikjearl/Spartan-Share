import express from 'express';
import { getNotes, postNote } from '../controllers/notes.js';

// note routes defined as '/note'
const router = express.Router();

// REST functions defined in /controllers/notes
router
    .route('/')
    .get(getNotes)
    .post(postNote);

export default router;