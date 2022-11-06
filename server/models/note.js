import mongoose from 'mongoose';

// define data model for each note
const noteSchema = mongoose.Schema({
    name: String,
    class: String,
    description: String,
    selectedFile: String,
    lectureDate: Date,
    views: Number,
    priority: {
        type: Number,
        default: 0
    },
    likeCount: {
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