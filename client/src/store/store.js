/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import trainers from '../features/trainers/trainersSlice';
import usersSlice from '../features/users/usersSlice';
import classesSlice from '../features/classes/classesSlice';

const store = configureStore({
    reducer: {
        trainers,
        auth: authSlice,
        users: usersSlice,
        classes: classesSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
