import mongoose from 'mongoose';

// define data model for each note
const noteSchema = mongoose.Schema({
    name: String,
    class: String,
    description: String,
    selectedFile: String,
    type: String,
    likeCount: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    priority: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// change note to 'note'
const note = mongoose.model('noteModel', noteSchema);
export default note;