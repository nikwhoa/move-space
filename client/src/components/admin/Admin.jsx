/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';
import { checkIsAdmin, checkIsAuth } from '../../features/auth/authSlice';

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
                <div>Admin</div>
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
