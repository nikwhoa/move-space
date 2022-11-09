/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: click outside popup
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
    changeUserPassword,
    changePassword,
} from '../../../slices/users/usersSlice';

const ChangePasswordPopUp = (props) => {
    const { setShowPopUp, id, name } = props;
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state) => state.users.status);

    const changePass = (e) => {
        e.preventDefault();

        // dispatch(changeUserPassword(id));
        try {
            dispatch(changePassword({ id, password }));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (status === 'Пароль змінено') {
            toast(status);
        }
    }, [status]);

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

    return (
        <div className='change-password-popup'>
            <div className='change-pass'>
                <div className='change-pass__title'>
                    <h2>Змінити пароль для</h2>
                    <h3 style={{ color: 'white' }}>{name}</h3>
                    <button
                        className='close-popup'
                        type='button'
                        onClick={() => setShowPopUp(false)}
                    >
                        &#10006;
                    </button>
                </div>
                <div className='change-pass__form'>
                    <form>
                        <div className='input-container create-user-input'>
                            <label className='label'>
                                <input
                                    type='password'
                                    placeholder='Пароль'
                                    className='form-input pass-input'
                                    autoComplete='new-password'
                                    onChange={(e) =>
                                        // eslint-disable-next-line implicit-arrow-linebreak
                                        setPassword(e.target.value)
                                    // eslint-disable-next-line react/jsx-curly-newline
                                    }
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
                        <div className='change-pass__buttons'>
                            <button
                                type='submit'
                                className='btn btn-primary btn-block create-user-btn'
                                onClick={(e) => changePass(e)}
                            >
                                Підтвердити
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

ChangePasswordPopUp.propTypes = {
    setShowPopUp: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default ChangePasswordPopUp;
