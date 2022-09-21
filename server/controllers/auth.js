import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { username, password, admin, JWT_SECRET, email } = req.body;

        const isUsed = await User.findOne({ username });

        if (isUsed) {
            return res.json({
                message: 'This user is already exist',
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const administrator = JWT_SECRET === process.env.JWT_SECRET;

        if (admin === true && !administrator) {
            return res.json({
                message: 'Wrong secret key',
            });
        }

        const newUser = new User({
            username,
            admin: !!administrator,
            password: hash,
            email,
        });

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d',
            }
        );

        await newUser.save();

        res.json({
            newUser,
            token,
            message: 'Registration is complete',
        });
    } catch (e) {
        res.json({
            message: 'Error while creating an user',
        });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.json({
                message: 'There is no user',
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Password is incorrect',
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.json({
            token,
            user,
            message: 'Ви ввійшли в обліковий запис',
        });
    } catch (e) {
        res.json({
            message: `There is some mistake. More info: ${e}`,
        });
    }
};
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.json({
                message: 'There is no user',
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.json({
            user,
            token,
        });
    } catch (e) {
        res.json({ message: 'No access' });
    }
};
