import { Router } from 'express';
import {
    getMe,
    login,
    register,
    removeUser,
    changePassword,
} from '../controllers/auth.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', checkAuth, getMe);
router.post('/remove/:id', removeUser);
// router.post('/changePass/:id', changePassword);
router.post('/changePass', changePassword);

export default router;
