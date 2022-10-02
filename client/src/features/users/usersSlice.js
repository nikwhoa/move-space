/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    users: [],
    loading: false,
    status: null,
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

export const removeUser = createAsyncThunk('auth/remove', async (id) => {
    const { data } = await axios.post(`/auth/remove/${id}`);
    return data;
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUsername: (state, action) => {
            state.users = state.users.filter(
                // eslint-disable-next-line no-underscore-dangle
                (user) => user._id !== action.payload,
            );
            state.status = null;
        },
    },
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
        [removeUser.pending]: (state) => {
            state.isLoading = true;
        },
        [removeUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [removeUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
    },
});

export const { deleteUsername } = usersSlice.actions;

export default usersSlice.reducer;
