// TODO: try to refactor this component, pay attention to your dispatches!
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getSchedule,
  updateSchedule,
  removeUserFromSchedule,
} from '../../../slices/schedule/scheduleSlice';
import { getUser, getUsers } from '../../../slices/users/usersSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';

const EditSchedule = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTrainer, setScheduleTrainer] = useState('');
  const [weekDays, setWeekDays] = useState([
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
    'Неділя',
  ]);
  const [weekDay, setWeekDay] = useState('');
  const [trainers, setTrainers] = useState([]);
  const [user, setUser] = useState('');

  const { users } = useSelector((state) => state.users);
  const { isLoading } = useSelector((state) => state.schedule);
  const { status } = useSelector((state) => state.schedule);
  const { isLoadingUser } = useSelector((state) => state.users);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      setTrainers(res.payload.filter((item) => item.role === 'trainer'));
    });

    dispatch(getSchedule())
      .then((res) => {
        const schedule = res.payload.schedule.filter((item) => item._id === id);
        setScheduleName(schedule[0].scheduleItem);
        setScheduleDate(schedule[0].TrainTime.slice(0, 16));
        setWeekDay(schedule[0].trainDay);
        return schedule[0].trainer;
      })
      .then((trainerId) => {
        dispatch(getUser(trainerId)).then((res) => {
          setScheduleTrainer(res.payload);
        });
      });
  }, [dispatch, status]);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(scheduleTrainer);
    dispatch(
      updateSchedule({
        scheduleId: id,
        scheduleItem: scheduleName,
        TrainTime: scheduleDate,
        trainer: scheduleTrainer,
        trainDay: weekDay,
        user: user || null,
      })
    );
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-12 mb-5'>Редагувати тренування</div>
        {isLoadingUser || isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className='col-lg-8'>
            <div>
              <form className='create-schedule-form edit-schedule-form'>
                <div className='input-container'>
                  Назва
                  <br />
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
                  <label className='label' />
                  <select
                    className='form-input'
                    onChange={(e) => setScheduleTrainer(e.target.value)}
                    value={scheduleTrainer._id}
                  >
                    {trainers && trainers.length > 0
                      ? trainers.map((item) => (
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
                      {weekDays.map((day) => (
                        <option value={day} key={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className='input-container'>
                  Додати користувача
                  <br />
                  <label className='label'>
                    <select
                      className='form-input'
                      onChange={(e) => setUser(e.target.value)}
                      value={user.username}
                    >
                      <option value={user}>Оберіть користувача</option>
                      {users && users.length > 0
                        ? users
                            .filter((item) => item.role === 'user') // check if user is user
                            .filter(
                              (userItem) => !userItem.schedule.includes(id) // check if user is already in schedule
                            )
                            .map((item) => (
                              <option key={item._id} value={item._id}>
                                {item.username}
                              </option>
                            ))
                        : null}
                    </select>
                  </label>
                </div>
                <div className='users-in-schedule'>
                  Користувачі в розкладі
                  <br />
                  <ul>
                    {users.map((item) => {
                      if (item.schedule.includes(id)) {
                        return (
                          <li key={item._id}>
                            {item.username}
                            <button
                              type='button'
                              className='btn btn-danger btn-sm remove-user-btn'
                              onClick={() =>
                                dispatch(
                                  removeUserFromSchedule({
                                    scheduleId: id,
                                    userId: item._id,
                                  })
                                )
                              }
                            >
                              x
                            </button>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
                <br />
                <button
                  type='submit'
                  className='btn btn-primary btn-block create-user-btn'
                  onClick={(e) => handleSubmit(e)}
                >
                  Підтвердити
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditSchedule;
