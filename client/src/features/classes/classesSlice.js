/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    classes: [],
    status: null,
    error: null,
    isLoading: true,
};

export const getClasses = createAsyncThunk('classes/getClasses', async () => {
    try {
        const { data } = await axios.get('/classes/get');

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers: {
        [getClasses.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [getClasses.fulfilled]: (state, action) => {
            state.classes = action.payload;
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [getClasses.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default classesSlice.reducer;
