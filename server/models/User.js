import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        admin: {
            type: Boolean,
        },
        JWT_SECRET: {
            type: String,
            hidden: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            // required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        schedule: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Schedule',
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
