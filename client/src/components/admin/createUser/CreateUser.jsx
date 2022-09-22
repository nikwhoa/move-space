/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../../../features/auth/authSlice';
import './create-user.scss';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const generatePassword = () => {
        const length = 8;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let retVal = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }

        setPassword(retVal);
    };
    console.log(status);
    useEffect(() => {
        if (status !== 'Ви ввійшли в обліковий запис') {
            toast(status);
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-undef
            dispatch(registerUser({ username, password, email }));
            setPassword('');
            setUsername('');
            setEmail('');
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div>
            <h1>Створити користувача</h1>
            <form>
                <label className='label'>
                    Ім&apos;я користувача
                    <input
                        type='text'
                        placeholder='username'
                        className='form-input'
                        autoComplete='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </label>
                <label className='label'>
                    Пароль
                    <br />
                    <input
                        type='password'
                        placeholder='password'
                        className='form-input pass-input'
                        autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button type='button' className='btn btn-primary btn-block create-password' onClick={generatePassword}>Створити</button>
                </label>
                <label className='label'>
                    Электронна пошта
                    <input
                        type='email'
                        placeholder='email'
                        className='form-input'
                        autoComplete='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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

export default CreateUser;
