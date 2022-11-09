/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth/authSlice';
import trainers from '../slices/trainers/trainersSlice';
import usersSlice from '../slices/users/usersSlice';
import classesSlice from '../slices/classes/classesSlice';

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
