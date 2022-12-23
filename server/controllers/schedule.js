import Schedule from '../models/Schedule.js';
import User from '../models/User.js';

const update = async (user, schedule) => {
  await User.updateOne({ _id: user }, { $push: { schedule } });
  await Schedule.updateOne({ _id: schedule }, { $push: { users: user } });
};

export const createSchedule = async (req, res) => {
  const { scheduleItem, TrainTime, trainer, trainDay } = req.body;
  try {
    const newSchedule = new Schedule({
      scheduleItem,
      TrainTime,
      trainer,
      trainDay,
    });

    await newSchedule.save();
    res.json({
      newSchedule,
      message: 'Тренування додано до розкладу',
    });
  } catch (e) {
    console.log('e', e);
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
};

export const linkSchedule = async (req, res) => {
  try {
    const { userId, scheduleId } = req.body;
    const schedule = await Schedule.findById(scheduleId);
    const { users } = schedule;
    const isUserExist = users.find((element) => element === userId);

    if (isUserExist) {
      return res.json({
        message: 'Цей користувач вже доданий до цього тренування',
      });
    }

    update(userId, scheduleId); // update user schedule

    res.json({
      message: 'Користувач успішно доданий до розкладу',
    });

    // console.log('usersToUpdate', usersToUpdate);
  } catch (err) {
    console.log(err);
    res.json({
      message: 'Error while linking schedule',
    });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const { scheduleId, scheduleItem, TrainTime, trainer, trainDay, user } =
      req.body;

    await Schedule.updateOne(
      { _id: scheduleId },
      { scheduleItem, TrainTime, trainer, trainDay }
    );

    update(user, scheduleId); // update user schedule

    res.json({
      message: 'Розклад успішно оновлено',
    });
  } catch (err) {
    res.json({
      message: 'Під час оновлення сталася помилка',
    });
  }
};

export const removeUserFromSchedule = async (req, res) => {
  try {
    const { userId, scheduleId } = req.body;

    await User.updateOne({ _id: userId }, { $pull: { schedule: scheduleId } });
    await Schedule.updateOne({ _id: scheduleId }, { $pull: { users: userId } });

    res.json({
      message: 'Користувач успішно видалений з розкладу',
    });
  } catch (err) {
    res.json({
      message: 'Під час видалення сталася помилка',
    });
  }
};
