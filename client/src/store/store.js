import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import trainers from "../features/trainers/trainersSlice";

export const store = configureStore({
    reducer: {trainers, auth: authSlice},
    devTools: process.env.NODE_ENV !== 'production'
});