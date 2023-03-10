import Classes from '../models/Classes.js';

export const getClasses = async (req, res) => {
    try {
        const classes = await Classes.find();
        res.json(classes);
    } catch (e) {
        res.json({ message: `There is some mistake. More info: ${e}` });
    }
};

export const createClass = async (req, res) => {
    const { className, classDescription, classImage, classUrl } = req.body;

    const newClass = new Classes({
        className,
        classDescription,
        classImage,
        classUrl,
    });

    try {
        await newClass.save();
        res.json({
            newClass,
            message: 'Тренування створено успішно',
        });
    } catch (e) {
        res.json({ message: `There is some mistake. More info: ${e}` });
    }
};

export const deleteClass = async (req, res) => {
    const { id } = req.params;

    try {
        await Classes.findByIdAndDelete(id);
        res.json({ message: 'Тренування успішно видалено' });
    } catch (e) {
        res.json({ message: `There is some mistake. More info: ${e}` });
    }
};

export const updateClass = async (req, res) => {
    const { classID, className, classDescription, classImage, classUrl } =
        req.body;
    try {
        await Classes.updateOne(
            { _id: classID },
            {
                className,
                classDescription,
                classImage,
                classUrl,
            }
        );
        res.json({ message: 'Тренування успішно змінено' });
    } catch (e) {
        console.log(e);
    }
};
