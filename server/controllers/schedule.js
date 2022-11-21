import Schedule from '../models/Schedule.js';
import User from '../models/User.js';

export const createSchedule = async (req, res) => {
    const { scheduleItem, TrainTime } = req.body;

    try {
        const newSchedule = new Schedule({
            scheduleItem,
            TrainTime,
            user: req.userId,
        });

        // newSchedule.user.save((err, savedSchedule) => {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).json(err);
        //     }
        //     return res.status(200).json(savedSchedule);
        // });

        await newSchedule.save();

        res.json({
            newSchedule,
            message: 'Реєстрація пройшла успішно',
        });
    } catch (e) {
        res.json({
            message: 'Щось пішло не так',
        });
    }
};

export const getSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.find();
        res.json({
            schedule,
        });
    } catch (err) {
        res.json({
            message: 'Error while getting schedule',
        });
    }
};

export const linkSchedule = async (req, res) => {
    try {
        const { userId, scheduleId } = req.body;

        await User.updateOne({ _id: userId }, { $push: { schedule: scheduleId } });
        await Schedule.updateOne({ _id: scheduleId }, { $push: { users: userId } });

        res.json({
            message: 'Користувач успішно доданий до розкладу',
        });
    } catch (err) {
        console.log(err);
        res.json({
            message: 'Error while linking schedule',
        });
    }
};
