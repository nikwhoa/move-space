/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
// import usersSlice from '../../../features/users/usersSlice';
import { getUsers } from '../../../features/users/usersSlice';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    console.log(users);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
