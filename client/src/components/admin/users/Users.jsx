// TODO: delete users from redux first then delete from database
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUsers, removeUser, deleteUsername } from '../../../features/users/usersSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import './users.scss';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const { isLoading } = useSelector((state) => state.users.loading);
    const status = useSelector((state) => state.users.status);

    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(deleteUsername(id));
        dispatch(removeUser(id));
    };

    useEffect(() => {
        dispatch(getUsers());
        if (status === 'Користувач видалений') {
            toast(status);
        }
    }, [status]);

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
                <tbody>
                    {isLoading === true ? (
                        <LoadingSpinner />
                    ) : (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>Change pass</td>
                                <td>Change user role</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        type='button'
                                        disabled={user.username === 'admin'}
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        Видалити
                                    </button>
                                </td>
                                <td>Generate user&apos;s link</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
