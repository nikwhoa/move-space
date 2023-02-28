/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddUserPopUp from './AddUserPopUp';
import {
  getSchedule,
  deleteSchedule,
} from '../../../slices/schedule/scheduleSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import { checkIsAdmin, getTrainerID } from '../../../slices/auth/authSlice';

const Schedule = () => {
  const [scheduleItems, setScheduleItems] = useState([]);
  const [isShowPopUp, setShowPopUp] = useState(false);
  const [scheduleIdForPopUp, setScheduleIdForPopUp] = useState(null);

  const { schedule } = useSelector((state) => state.schedule.schedule);
  const { isLoading } = useSelector((state) => state.schedule);
  const { status } = useSelector((state) => state.schedule);
  const trainerID = useSelector(getTrainerID);
  const admin = useSelector(checkIsAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedule()).then((res) => {
      setScheduleItems(
        res.payload.schedule.filter(
          (item) => item.trainer === trainerID._id || admin
        )
      );
    });
    if (status === 'Тренування видалено з розкладу') {
      toast(status);
    }
  }, [status]);

  const remove = (id) => {
    dispatch(deleteSchedule(id));
  };

  const addUser = (scheduleId) => {
    setScheduleIdForPopUp(scheduleId);
    setShowPopUp(!isShowPopUp);
  };

  return (
    <div>
      {isShowPopUp && (
        <AddUserPopUp
          setShowPopUp={setShowPopUp}
          scheduleId={scheduleIdForPopUp}
        />
      )}
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Link to='create-schedule'>Додати розклад</Link>
            <h1>Розклад</h1>
            <table className='table table-bordered table-custom table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Назва</th>
                  <th scope='col'>Час</th>
                  <th scope='col'>Видалити</th>
                  <th scope='col'>Редагувати</th>
                  <th scope='col'>Додати користувача</th>
                </tr>
              </thead>
              <tbody>
                {isLoading === true ? (
                  <tr>
                    <td colSpan={4}>
                      <LoadingSpinner />
                    </td>
                  </tr>
                ) : (
                  scheduleItems.map((item) => (
                    <tr key={item._id}>
                      <td>{item.scheduleItem}</td>
                      <td>
                        <div>{item.TrainTime.slice(0, 16).replace('T', ' ')}</div>
                        <div>{item.trainDay}</div>
                      </td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => remove(item._id)}
                        >
                          Видалити
                        </button>
                      </td>
                      <td>
                        <Link state={item} to={`edit/${item._id}`}>
                          <button type='button' className='btn btn-primary'>
                            Редагувати
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className='btn btn-primary'
                          type='button'
                          // disabled={user.username === 'admin'}
                          onClick={() => addUser(item._id)}
                        >
                          Додати користувача
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
