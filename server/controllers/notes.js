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
    const { searchQuery, classCode, fileType } = req.query;
    try {
        const name = new RegExp(searchQuery, 'i');
        const classID = new RegExp(classCode, 'i');
        const type = new RegExp(fileType, 'i');

        let notes;
        if(searchQuery === 'none'){
            if(classCode === 'none' && fileType !==' none'){
                notes =  await NoteModel.find({type:type});
            }else if(classCode !== 'none' && fileType ===' none'){
                notes =  await NoteModel.find({classID:classID});
            } else {
                notes =  await NoteModel.find({$and: [ {classID:classID}, {type:type} ] });
            }
        }else{
            notes =  await NoteModel.find({$or: [ {name:name}, {classID:classID}, {type:type} ] });
        }
        res.json({data:notes});

    } catch (error){
        res.status(404).json({ message: error.message });
    }
}