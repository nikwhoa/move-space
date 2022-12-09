import Schedule from '../models/Schedule.js';
import User from '../models/User.js';

export const createSchedule = async (req, res) => {
    const { scheduleItem, TrainTime, trainer } = req.body;

    console.log(req.body);
    try {
        const newSchedule = new Schedule({
            scheduleItem,
            TrainTime,
            trainer,
        });

        await newSchedule.save();

        res.json({
            newSchedule,
            message: 'Тренування додано до розкладу',
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

export const deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        res.json({
            schedule,
            message: 'Тренування видалено з розкладу',
        });
    } catch (err) {
        res.json({
            message: 'Під час видалення сталася помилка',
        });
    }
}

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
