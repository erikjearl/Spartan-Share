import express from 'express';
import mongoose from 'mongoose';
import NoteModel from '../models/note.js'

// GET request
export const getNotes = async (req,res) => {
    try {
        const notes = await NoteModel.find();
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

// GET by searchQuery
export const getNoteBySearch = async (req,res) => {
    const { searchQuery, tags } = req.query;
    try {
        const name = new RegExp(searchQuery, 'i');
        const description = new RegExp(searchQuery, 'i');
        const classID = new RegExp(searchQuery, 'i');
        const type = new RegExp(searchQuery, 'i');

        const uploads = await NoteModel.find( {$or: [{name}, {description}, {classID}, {type}]} );
        res.json({data:uploads});
    } catch (error){
        console.log("error here")
        res.status(404).json({ message: `wtf: ${error.message}` });
    }
}