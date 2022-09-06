import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './register-page.scss';
import { registerUser } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status) {
            toast(status);
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-undef
            dispatch(registerUser({ username, password }));
            setPassword('');
            setUsername('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form>
                <h1 className='text-center'>Реєстрація</h1>
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
                    Password
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

export default RegisterPage;