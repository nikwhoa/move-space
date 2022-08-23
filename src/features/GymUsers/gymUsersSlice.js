import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            id: nanoid().slice(0,4),
            name: 'Nikita',
            level: 99,
        },
    ],
    loadingUsers: 'idle'
};

export const gymUsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userFetching: state => {state.loadingUsers = 'loading '},
        userAdd: (state, actions) => {
            state.loadingUsers = 'idle'
            state.users.push(actions.payload)
        }
    }
});

const {actions, reducer} = gymUsersSlice

export default reducer

export const {
    userFetching,
    userAdd
} = actions