/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../features/users/usersSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import './users.scss';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const { isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Користувачі</h1>
            <table className='table table-bordered table-custom table-striped user-list'>
                <thead>
                    <tr>
                        <th scope='col'>Ім&apos;я</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Змінити пароль</th>
                        <th scope='col'>Роль</th>
                        <th scope='col'>Видалити</th>
                        <th scope='col'>Посилання</th>
                    </tr>
                </thead>
                {isLoading === true ? (
                    <LoadingSpinner />
                ) : (
                    users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>Change pass</td>
                            <td>Change user role</td>
                            <td>Delete user</td>
                            <td>Generate user&apos;s link</td>
                        </tr>
                    ))
                )}
            </table>
        </div>
    );
};

export default Users;
