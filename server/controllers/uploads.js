import express from 'express';
import mongoose from 'mongoose';
import UploadModel from '../models/upload.js'

// GET request
export const getUploads = async (req,res) => {
    try {
        const uploads = await UploadModel.find();
        console.log(uploads)
        res.status(200).json(uploads);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// POST request
export const postUpload = async (req, res) => {
    const upload = req.body;
    const newUpload = new UploadModel(upload);
    try {
        await newPost.save();
        res.status(201).json(newUpload)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}