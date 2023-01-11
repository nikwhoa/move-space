import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { checkIsAuth, loginUser } from '../../slices/auth/authSlice';

const LoginPage = () => {
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

        if (isAuth) {
            navigate('/');
        }
    }, [status, isAuth]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ username, password }));
        setPassword('');
        setUsername('');
    };

    return (
        <div className='login'>
            <form className='login-form'>
                <h1 className='text-center'>Вхід до профілю</h1>
                <div className='input-container'>
                    <label className='label' htmlFor='username'>
                        <input
                            type='text'
                            id='username'
                            placeholder='Ваш юзернейм'
                            className='form-input'
                            autoComplete='name'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='password'>
                        <input
                            type='password'
                            id='password'
                            placeholder='Ваш пароль'
                            className='form-input'
                            autoComplete='current-password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                </div>
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

export default LoginPage;
