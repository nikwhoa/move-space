import { configureStore } from '@reduxjs/toolkit';
import trainers from "../features/trainers/trainersSlice";

export const store = configureStore({
    reducer: {trainers},
    devTools: process.env.NODE_ENV !== 'production'
});
