/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
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
    imageUrl: null,
    isLoadingImage: true,
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
    async ({ className, classDescription, classImage, classUrl }) => {
        try {
            const { data } = await axios.post('/classes/create', {
                className,
                classDescription,
                classImage,
                classUrl
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }
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
    }
);

export const uploadPicture = createAsyncThunk(
    'classes/uploadPicture',
    async (file) => {
        const formData = new FormData();
        formData.append('picture', file);

        if (file.type === 'image/webp' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            if (file.size < 5000000) {
                try {
                    const { data } = await axios.post(
                        'http://91.219.62.242:3002/',
                        formData,
                        { 'Content-Type': 'multipart/form-data' }
                    );
                    return data;
                } catch (error) {
                    console.log(error);
                }
            }

            return {
                message: 'Зображення важить надто багато'
            };
        }

        return {
            message: 'Не вірний формат зображення'
        };
    }
);

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        removeClass: (state, action) => {
            state.classes = state.classes.filter(
                (classes) => classes._id !== action.payload
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
        [uploadPicture.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [uploadPicture.fulfilled]: (state, action) => {
            state.status = action.payload.message;
            state.imageUrl = action.payload.link;
            state.isLoadingImage = state.imageUrl === null;
        },
        [uploadPicture.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.status = action.payload.message;
        },
    },
});

export const { removeClass } = classesSlice.actions;

export default classesSlice.reducer;
