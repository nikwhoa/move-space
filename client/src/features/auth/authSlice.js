import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    user: null,
    status: null,
    isLoadign: false,
    error: null,
    token: null,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username,
                password,
            });

            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
    },
});

export default authSlice.reducer;
