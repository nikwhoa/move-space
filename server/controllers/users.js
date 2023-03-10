/* eslint-disable import/prefer-default-export */
import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (e) {
        res.json({
            message: 'Error while getting users',
        });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.json(user);
    } catch (e) {
        res.json({
            message: 'Error while getting user',
        });
    }
};
