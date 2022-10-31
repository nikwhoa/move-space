import { Router } from 'express';
import { getClasses, createClass } from '../controllers/classes.js';

const router = new Router();

router.get('/get', getClasses);
router.post('/create', createClass);

export default router;
