import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
    try {
        const { username, password, admin, JWT_SECRET, email, role = 'user' } = req.body;

        const isUsed = await User.findOne({ username });
        const isEmailUsed = await User.findOne({ email });

        if (isUsed) {
            return res.json({
                message: 'Цей користувач вже існує',
            });
        }

        if (isEmailUsed) {
            return res.json({
                message: 'Цей email використовується',
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
            role,
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
            message: 'Рєестрація пройшла успішно',
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
                message: 'Неправильний пароль',
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

export const removeUser = async (req, res) => {
    const id = req.params.id;

    await User.deleteOne({ _id: id });

    res.json({ message: 'Користувач видалений' });

};

export const changePassword = async (req, res) => {
    const password = req.body.id.password;
    const id = req.body.id.id;

    // TODO: think about how to make it more secure. Maybe hash password in frontend
    // i guess i did it already. wrong todo maybe

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await User.updateOne({ _id: id }, { password: hash });

    res.json({ message: 'Пароль змінено' });
};
