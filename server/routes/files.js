import express from 'express';

const router = express.Router();

// http://localhost:5000/files
router.get('/', (req,res) => {
    res.send("test working");
})

export default router;