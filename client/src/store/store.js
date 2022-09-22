import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import authSlice from '../features/auth/authSlice';
import trainers from '../features/trainers/trainersSlice';

const store = configureStore({
    reducer: { trainers, auth: authSlice },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
