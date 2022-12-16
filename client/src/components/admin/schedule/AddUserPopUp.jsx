// TODO: add search for user
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUsers } from '../../../slices/users/usersSlice';
import { linkSchedule } from '../../../slices/schedule/scheduleSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';

const AddUserPopUp = (props) => {
  const { setShowPopUp, scheduleId } = props;

  const [chosenUser, setChosenUser] = useState(null);

  const users = useSelector((state) => state.users.users);
  const { isLoading } = useSelector((state) => state.users.loading);
  const { status } = useSelector((state) => state.schedule);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status, { toastId: 10981391123123 });
    }
  }, [status]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(linkSchedule({ userId: chosenUser, scheduleId }));
    setChosenUser(null);
  };

  console.log(chosenUser);

  return (
    <div className='add-user-popup'>
      <div className='add-user'>
        <div className='add-user-title'>
          <h2>Додати користувача до тренування</h2>
          <button
            className='close-popup'
            type='button'
            onClick={() => setShowPopUp(false)}
          >
            &#10006;
          </button>
        </div>
        <div className='choose-user input-container'>
          <select
            className='form-input'
            onChange={(e) => setChosenUser(e.target.value)}
          >
            <option value=''>Оберіть користувача</option>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              ))
            )}
          </select>
        </div>
        <div>
          <button
            type='submit'
            className='btn btn-primary btn-block choose-user-btn'
            onClick={(e) => handleSubmit(e)}
            disabled={!chosenUser}
          >
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

AddUserPopUp.propTypes = {
  setShowPopUp: PropTypes.func.isRequired,
  scheduleId: PropTypes.string.isRequired,
};

export default AddUserPopUp;
