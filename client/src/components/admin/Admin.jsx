/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';
import {
    checkIsAdmin,
    checkIsAuth,
    checkIsTrainer,
} from '../../slices/auth/authSlice';
import CreateUser from './createUser/CreateUser';
import './admin.scss';
import Users from './users/Users';
import Classes from './classes/Classes';
import CreateClass from './classes/CreateClass';
import Class from './classes/Class';

const Admin = () => {
    const isAdmin = useSelector(checkIsAdmin);
    const { isLoading } = useSelector((state) => state.auth);
    const { username } = useSelector((state) => state.auth.user) || {};
    const isAuth = useSelector(checkIsAuth);
    const { logout } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const isTrainer = useSelector(checkIsTrainer) === 'trainer';

    const showAdmin = isAdmin || isTrainer;

    useEffect(() => {
        if (logout) {
            navigate('/');
        }
    }, [logout, navigate]);

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className='text-center'>
                    Привіт, {username}!
                    <div className='justify-content-center'>
                        <ul className='admin-links'>
                            <li>
                                <Link to='/admin'>Адмін-панель</Link>
                            </li>
                            {!isTrainer ? (
                                <li>
                                    <Link to='create-user'>
                                        Додати користувача
                                    </Link>
                                </li>
                            ) : null}
                            {!isTrainer ? (
                                <li>
                                    <Link to='classes'>Тренування</Link>
                                </li>
                            ) : null}
                            <li>
                                <Link to='create-schedule'>Додати розклад</Link>
                            </li>
                            {!isTrainer ? (
                                <li>
                                    <Link to='users'>Користувачі</Link>
                                </li>
                            ) : null}
                        </ul>
                        <Routes>
                            <Route
                                path='/create-user'
                                element={<CreateUser />}
                            />
                            <Route path='/classes' element={<Classes />} />
                            <Route
                                path='/classes/create'
                                element={<CreateClass />}
                            />
                            <Route
                                path='/classes/edit/:id'
                                element={<Class />}
                            />
                            <Route path='/users' element={<Users />} />
                        </Routes>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Admin;
