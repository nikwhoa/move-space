import Classes from '../models/Classes.js';

export const getClasses = async (req, res) => {
    try {
        const classes = await Classes.find();
        res.json(classes);
    } catch (e) {
        res.json({ message: 'There is some mistake. More info: ' + e });
    }
};

export const createClass = async (req, res) => {
    const { className, classDescription, classImage } = req.body;

    const newClass = new Classes({
        className,
        classDescription,
        classImage,
    });

    try {
        await newClass.save();
        res.json({
            newClass,
            message: 'Тренування створено успішно',
        });
    } catch (e) {
        res.json({ message: 'There is some mistake. More info: ' + e });
    }
};
