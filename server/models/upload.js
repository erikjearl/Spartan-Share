import mongoose from 'mongoose';

// define data model for each upload
const uploadSchema = mongoose.Schema({
    name: String,
    class: String,
    description: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const upload = mongoose.model('uploadModel', uploadSchema);
export default upload;