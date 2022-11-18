import express from 'express';
import { getNotes, postNote, getNoteBySearch } from '../controllers/notes.js';

// note routes defined as '/note'
const router = express.Router();

// REST functions defined in /controllers/notes
router
    .route('/')
    .get(getNotes)
    .post(postNote);

router
    .route('/search')
    .get(getNoteBySearch);

export default router;