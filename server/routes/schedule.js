import { Router } from 'express';
import { getSchedule, createSchedule, linkSchedule } from '../controllers/schedule.js';

const router = new Router();

router.get('/get', getSchedule);
router.post('/create', createSchedule);
router.post('/link', linkSchedule);

export default router;