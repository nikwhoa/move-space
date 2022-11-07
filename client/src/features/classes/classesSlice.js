/* eslint-disable no-underscore-dangle */
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

export const createClass = createAsyncThunk(
    'classes/createClass',
    async ({ className, classDescription, classImage }) => {
        try {
            const { data } = await axios.post('/classes/create', {
                className,
                classDescription,
                classImage,
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
);

export const deleteClass = createAsyncThunk(
    'classes/deleteClass',
    async (id) => {
        try {
            const { data } = await axios.post(`/classes/delete/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
);

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        removeClass: (state, action) => {
            state.classes = state.classes.filter(
                (classes) => classes._id !== action.payload,
            );
            state.status = null;
        },
    },
    extraReducers: {
        [getClasses.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [getClasses.fulfilled]: (state, action) => {
            state.classes = action.payload;
            state.isLoading = false;
        },
        [getClasses.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [createClass.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [createClass.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [createClass.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteClass.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [deleteClass.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [deleteClass.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { removeClass } = classesSlice.actions;

export default classesSlice.reducer;
