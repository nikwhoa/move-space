import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
};

export const getUsers = createAsyncThunk('users/get', async () => {
    try {
        const { data } = await axios.get('/users');
        return data;
    } catch (error) {
        console.log(error);
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
