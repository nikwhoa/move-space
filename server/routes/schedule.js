import { Router } from 'express';
import { getSchedule, createSchedule, linkSchedule, deleteSchedule } from '../controllers/schedule.js';

const router = new Router();

router.get('/get', getSchedule);
router.post('/create', createSchedule);
router.post('/link', linkSchedule);
router.post('/delete/:id', deleteSchedule);

export default router;