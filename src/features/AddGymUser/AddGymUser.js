import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { userAdd } from '../GymUsers/gymUsersSlice';
import './style.scss';

const AddGymUser = () => {
    const [userName, setUserName] = useState('');
    const [userLevel, setUserLevel] = useState(0);
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();

        dispatch(
            userAdd({
                id: nanoid().slice(0, 4),
                name: userName,
                level: userLevel
            })
        );
        setUserName('');
        setUserLevel(0);
    };

    const levelSubmit = (e) => {
        if (e.target.value >= 100) {
            e.target.value = 99
            setUserLevel(99);
        }
        setUserLevel(e.target.value)

    }

    return (
        <>
            <Link to='/'>Main page</Link>
            <h3>AddGymUser</h3>

            <form className='form' onSubmit={formSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        required
                        id='name'
                        name='name'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder='Type here name'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='level'>User level:</label>
                    <input
                        type='number'
                        required
                        id='level'
                        name='level'
                        value={userLevel}
                        onChange={levelSubmit}
                    />
                </div>
                <div className='form-group'>
                    <button type='submit'>Add user</button>
                </div>
            </form>
        </>
    );
};

export default AddGymUser;
