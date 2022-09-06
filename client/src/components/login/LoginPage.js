import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {checkIsAuth, loginUser} from '../../features/auth/authSlice';
import {useNavigate} from 'react-router-dom';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        if (status) {
            toast(status);
        }

        // if (isAuth) {
        //     navigate('/')
        // }
    }, [status, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(loginUser({ username, password }));
            setPassword('');
            setUsername('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='login'>
            <form>
                <h1 className='text-center'>Вхід до профілю</h1>
                <label className='label'>
                    Username
                    <input
                        type='text'
                        placeholder='username'
                        className='form-input'
                        autoComplete='name'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </label>
                <label className='label'>
                    Пароль
                    <input
                        type='password'
                        placeholder='password'
                        className='form-input'
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    onClick={(e) => handleSubmit(e)}
                >
                    Підтвердити
                </button>
            </form>
        </div>
    );
};