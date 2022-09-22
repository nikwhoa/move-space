/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    users: [],
    loading: false,
};

export const getUsers = createAsyncThunk('users/get', async () => {
    try {
        const { data } = await axios.get('/users/get'); // http://localhost:5100/api/users/get
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error);
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export default usersSlice.reducer;
