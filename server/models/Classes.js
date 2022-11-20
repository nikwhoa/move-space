import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
    {
        className: {
            type: String,
            required: true,
        },
        classDescription: {
            type: String,
            required: true,
        },
        classImage: {
            type: String,
            required: true,
        },
        classUrl: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default mongoose.model('Classes', classSchema);
