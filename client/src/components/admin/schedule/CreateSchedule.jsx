/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUsers } from '../../../slices/users/usersSlice';
import { createSchedule } from '../../../slices/schedule/scheduleSlice';
import './style.scss';

const CreateSchedule = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDate, setScheduleDate] = useState({});
  const [scheduleTrainer, setScheduleTrainer] = useState('Оберіть тренера');
  const [user, setUser] = useState(null);
  const [weekDays, setWeekDays] = useState([
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
    'Неділя',
  ]);
  const [weekDay, setWeekDay] = useState('Оберіть день тижня');

  const { status } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      setUser(res.payload.filter((item) => item.role === 'trainer'));
    });
  }, []);

  useEffect(() => {
    if (status) {
      toast(status, { toastId: 10981391 });
    }
  }, [status]);

  const isButtonDisabled = () => {
    if (weekDay === 'Оберіть день тижня') {
      return true;
    }
    return false;
  };

  console.log(isButtonDisabled);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createSchedule({
        scheduleName,
        scheduleDate,
        scheduleTrainer,
        trainDay: weekDay,
      })
    );

    setScheduleName('');
    setScheduleDate({});
    setScheduleTrainer('Оберіть тренера');
    setWeekDay('Оберіть день тижня');
  };

  return (
    <div className='container justify-content-center'>
      <div className='row'>
        <div className='col-12'>
          <h2>Додати розклад</h2>
          <div className='create-schedule '>
            <form className='create-schedule-form'>
              <div className='input-container'>
                <label className='label'>
                  <input
                    type='text'
                    placeholder='Назва'
                    className='form-input'
                    value={scheduleName}
                    onChange={(e) => setScheduleName(e.target.value)}
                  />
                </label>
              </div>

              <div className='input-container'>
                Дата
                <br />
                <label className='label'>
                  <input
                    type='datetime-local'
                    className='form-input'
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                  />
                </label>
              </div>

              <div className='input-container'>
                Тренер
                <br />
                <label className='label' />
                <select
                  className='form-input'
                  onChange={(e) => setScheduleTrainer(e.target.value)}
                  value={scheduleTrainer}
                >
                  {/* <option value={scheduleTrainer}>{scheduleTrainer.username}</option> */}
                  {user && user.length > 0
                    ? user.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.username}
                        </option>
                      ))
                    : null}
                </select>
              </div>

              <div className='input-container'>
                День із розкладу
                <br />
                <label className='label'>
                  <select
                    className='form-input'
                    onChange={(e) => setWeekDay(e.target.value)}
                    value={weekDay}
                  >
                    <option value={weekDay}>{weekDay}</option>
                    {weekDays.map((day) => (
                      <option value={day} key={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <br />
              <button
                type='submit'
                className='btn btn-primary btn-block create-user-btn'
                onClick={(e) => handleSubmit(e)}
                disabled={isButtonDisabled()}
              >
                Підтвердити
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
