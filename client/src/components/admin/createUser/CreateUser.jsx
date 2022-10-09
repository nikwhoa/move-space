/* eslint-disable object-curly-newline */
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
    const [role, setRole] = useState('');
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const generatePassword = () => {
        const length = 8;
        // eslint-disable-next-line operator-linebreak
        const charset =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let retVal = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }

        setPassword(retVal);
    };

    useEffect(() => {
        if (status) {
            toast(status);
        }
    }, [status, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-undef
            dispatch(registerUser({ username, password, email, role }));
            setPassword('');
            setUsername('');
            setEmail('');
            setRole('');
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div>
            <h1>Створити користувача</h1>
            <form className='create-user-form'>
                <div className='input-container'>
                    <label className='label'>
                        <input
                            type='text'
                            placeholder='Логін користувача'
                            className='form-input'
                            autoComplete='username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <span className='login-text'>
                            Це може бути ім&apos;я, але краще використовувати
                            якесь унікальне ім&apos;я користувача
                        </span>
                    </label>
                </div>
                <div className='input-container create-user-input'>
                    <label className='label'>
                        <input
                            type='password'
                            placeholder='Пароль'
                            className='form-input pass-input'
                            autoComplete='new-password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <button
                            type='button'
                            className='btn btn-primary btn-block create-password'
                            onClick={generatePassword}
                        >
                            Створити
                        </button>
                    </label>
                </div>
                <div className='input-container'>
                    <label className='label'>
                        <input
                            type='email'
                            placeholder='Электронна пошта'
                            className='form-input'
                            autoComplete='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='role' />
                    <select
                        name='role'
                        id='role'
                        className='form-input'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value=''>Оберіть роль</option>
                        <option value='trainer'>Тренер</option>
                        <option value='user'>Користувач</option>
                    </select>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary btn-block create-user-btn'
                    onClick={(e) => handleSubmit(e)}
                >
                    Підтвердити
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
