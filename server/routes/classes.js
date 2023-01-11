import { Router } from 'express';
import {
    getClasses,
    createClass,
    deleteClass,
    updateClass,
} from '../controllers/classes.js';

const router = new Router();

router.get('/get', getClasses);
router.post('/create', createClass);
router.post('/delete/:id', deleteClass);
router.post('/update/:id', updateClass);

export default router;
