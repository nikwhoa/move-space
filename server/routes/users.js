import { Router } from 'express';
import { getUsers, getUser } from '../controllers/users.js';

const router = new Router();

router.get('/get', getUsers);
router.get('/get/:id', getUser);

export default router;
