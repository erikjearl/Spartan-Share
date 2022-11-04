import mongoose from 'mongoose';

// define data model for each upload
const uploadSchema = mongoose.Schema({
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

// change upload to 'note'
const upload = mongoose.model('uploadModel', uploadSchema);
export default upload;