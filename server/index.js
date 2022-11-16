/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import classesRoute from './routes/classes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5008;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_NAME } = process.env;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'all is gonna be okay' });
});

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/classes', classesRoute);

async function start() {
    try {
        // mongoexport --uri mongodb+srv://test@cluster0.mnbq4kc.mongodb.net/move-space-app --collection=users --out=users.json
        // await mongoose.connect(
        //     `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mnbq4kc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        // );

        // await mongoose.connect(`mongodb://91.219.62.242:27017/move-space`);
        await mongoose.connect(`mongodb://localhost:27017/move-space-local`);

        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();
