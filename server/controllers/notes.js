import express from 'express';
import mongoose from 'mongoose';
import NoteModel from '../models/note.js'

// GET request
export const getNotes = async (req,res) => {
    try {
        const notes = await NoteModel.find();
        console.log(notes)
        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// POST request
export const postNote = async (req, res) => {
    const note = req.body;
    const newNote = new NoteModel(note);
    try {
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}