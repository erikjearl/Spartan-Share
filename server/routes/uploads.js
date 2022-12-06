import express from 'express';
import { getUploads, postUpload } from '../controllers/uploads.js';

// upload routes defined as '/upload'
const router = express.Router();

// REST functions defined in /controllers/uploads
router
    .route('/')
    .get(getUploads)
    .post(postUpload);

export default router;