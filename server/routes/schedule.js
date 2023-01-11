import { Router } from 'express';
import {
  getSchedule,
  createSchedule,
  linkSchedule,
  deleteSchedule,
  updateSchedule,
  removeUserFromSchedule
} from '../controllers/schedule.js';

const router = new Router();

router.get('/get', getSchedule);
router.post('/create', createSchedule);
router.post('/link', linkSchedule);
router.post('/delete/:id', deleteSchedule);
router.post('/update/:id', updateSchedule);
router.post('/removeUser/:id', removeUserFromSchedule);


export default router;
