/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    user: null,
    status: null,
    role: null,
    isLoading: true,
    error: null,
    token: null,
    isAdmin: false,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ username, password, email, role }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username,
                password,
                email,
                role
            });

            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
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

export const getMe = createAsyncThunk('auth/getMe', async () => {
    try {
        const { data } = await axios.get('/auth/me');
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.status = null;
            state.isAdmin = false;
            state.logout = true;
        },
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            if (
                // eslint-disable-next-line operator-linebreak
                action.payload.user === null ||
                action.payload.user === undefined
            ) {
                state.isAdmin = false;
            } else {
                state.isAdmin = action.payload.user.admin;
            }
            state.token = action.payload.token;
            state.role = action.payload.user.role;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [getMe.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = null;

            if (
                // eslint-disable-next-line operator-linebreak
                action.payload.user === null ||
                action.payload.user === undefined
            ) {
                state.isAdmin = false;
                state.role = null;
            } else {
                state.isAdmin = action.payload.user.admin;
                state.role = action.payload.user.role;
            }
            // console.log(action.payload.user);
            // state.role = action.payload.user.role === undefined ? '' : action.payload.user.role;
            state.user = action.payload?.user;
            state.token = action.payload?.token;
        },
        [getMe.rejected]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;
        },
    },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);
export const checkIsAdmin = (state) => Boolean(state.auth.isAdmin);
export const checkIsTrainer = (state) => state.auth.role;
export const getTrainerID = (state) => state.auth.user;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
