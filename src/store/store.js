import { configureStore } from '@reduxjs/toolkit';
import users from '../features/GymUsers/gymUsersSlice'

export const store = configureStore({
    reducer: {users},
    devTools: process.env.NODE_ENV !== 'production'
});
