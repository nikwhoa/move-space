/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';
import { checkIsAdmin, checkIsAuth } from '../../features/auth/authSlice';
import CreateUser from './createUser/CreateUser';
import './admin.scss';

const Admin = () => {
    const isAdmin = useSelector(checkIsAdmin);
    const { isLoading } = useSelector((state) => state.auth);
    const isAuth = useSelector(checkIsAuth);
    const { logout } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (logout) {
            navigate('/');
        }
    }, [logout, navigate]);

    return (
        <div>
            {isAuth && isAdmin ? (
                <div className='text-center'>
                    Welcome, Admin!
                    <div className='justify-content-center'>
                        <ul className='admin-links'>
                            <li>
                                <Link to='/admin'>Адмін-панель</Link>
                            </li>
                            <li>
                                <Link to='create-user'>Додати користувача</Link>
                            </li>
                            <li>
                                <Link to='create-class'>Додати тренування</Link>
                            </li>
                            <li>
                                <Link to='create-schedule'>Додати розклад</Link>
                            </li>
                        </ul>
                        <Routes>
                            <Route
                                path='/create-user'
                                element={<CreateUser />}
                            />
                        </Routes>
                    </div>
                </div>
            ) : (
                <div>
                    {isLoading !== 'loaded' ? (
                        <LoadingSpinner />
                    ) : (
                        <div className='text-center'>
                            У вас немає прав для перегляду цієї сторінки
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default Admin;
