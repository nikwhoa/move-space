import { Router } from 'express';
import { getClasses, createClass, deleteClass } from '../controllers/classes.js';

const router = new Router();

router.get('/get', getClasses);
router.post('/create', createClass);
router.post('/delete/:id', deleteClass);

export default router;
