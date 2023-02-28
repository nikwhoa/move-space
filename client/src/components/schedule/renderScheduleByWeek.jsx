/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../utils/LoadingSpinner';
import displayUserSchedule from './displayUserSchedule';

const getWeekNumber = (d) => {
  // eslint-disable-next-line no-param-reassign
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
};

const renderSchedule = (schedule, day, week = new Date()) => {
  return (
    <>
      {schedule
        .filter((item) => {
          return (
            getWeekNumber(new Date(item.TrainTime.slice(0, 16))) === getWeekNumber(new Date(week)) // prettier-ignore
          );
        })
        .filter((item) => {
          return item.trainDay === day;
        })
        .sort((a, b) => {
          const timeA = a.TrainTime.slice(-13, -11);
          const timeB = b.TrainTime.slice(-13, -11);
          return Number(timeA) - Number(timeB);
        })
        .map((item) => (
          <div className='week-schedule-item__train' key={item._id}>
            <div className=''>{item.scheduleItem}</div>
            <div className=''>{item.TrainTime.slice(-13, -8)}</div>
            <div>
              <button type='button' className='btn'>
                Записатись
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

const getDatesOfWeek = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const monday = new Date(currentDate);
  const tuesday = new Date(currentDate);
  const wednesday = new Date(currentDate);
  const thursday = new Date(currentDate);
  const friday = new Date(currentDate);
  const saturday = new Date(currentDate);
  const sunday = new Date(currentDate);

  monday.setDate(currentDate.getDate() - currentDay + 1);
  tuesday.setDate(currentDate.getDate() - currentDay + 2);
  wednesday.setDate(currentDate.getDate() - currentDay + 3);
  thursday.setDate(currentDate.getDate() - currentDay + 4);
  friday.setDate(currentDate.getDate() - currentDay + 5);
  saturday.setDate(currentDate.getDate() - currentDay + 6);
  sunday.setDate(currentDate.getDate() - currentDay + 7);

  const daysOutput = (day) => {
    return day.toLocaleString('uk-UA', {
      day: 'numeric',
      month: 'long',
    });
  };

  return {
    monday: daysOutput(monday),
    tuesday: daysOutput(tuesday),
    wednesday: daysOutput(wednesday),
    thursday: daysOutput(thursday),
    friday: daysOutput(friday),
    saturday: daysOutput(saturday),
    sunday: daysOutput(sunday),
  };
};

const renderScheduleByWeek = (isLoading, schedule, user, checkIsAdmin, isNextWeek) => {
  const [startDate, setStartDate] = useState(new Date());
  const [nextWeekDate, setNextWeekDate] = useState(new Date());

  useEffect(() => {
    if (isNextWeek) {
      setNextWeekDate(new Date(startDate.setDate(startDate.getDate() + isNextWeek)));
      setStartDate(new Date());
    }
  }, [isNextWeek]);

  return (
    <div>
      <div className='guest__schedule week-schedule'>
        <div className='week-schedule__header'>
          <div className='week-schedule__header__item'>
            Понеділок <br /> <span>{getDatesOfWeek().monday}</span>
          </div>
          <div className='week-schedule__header__item'>
            Вівторок <br /> <span>{getDatesOfWeek().tuesday}</span>
          </div>
          <div className='week-schedule__header__item'>
            Середа <br /> <span>{getDatesOfWeek().wednesday}</span>
          </div>
          <div className='week-schedule__header__item'>
            Четвер <br /> <span>{getDatesOfWeek().thursday}</span>
          </div>
          <div className='week-schedule__header__item'>
            П&apos;ятниця <br /> <span>{getDatesOfWeek().friday}</span>
          </div>
          <div className='week-schedule__header__item'>
            Субота <br /> <span>{getDatesOfWeek().saturday}</span>
          </div>
          <div className='week-schedule__header__item'>
            Неділя <br /> <span>{getDatesOfWeek().sunday}</span>
          </div>
        </div>
        <div className='week-schedule__body'>
          <div className='week-schedule__body__item'>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className='week-schedule-item' data-dayofweek='monday'>
                  {renderSchedule(schedule, 'Понеділок', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='tuesday'>
                  {renderSchedule(schedule, 'Вівторок', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='wednesday'>
                  {renderSchedule(schedule, 'Середа', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='thursday'>
                  {renderSchedule(schedule, 'Четвер', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='friday'>
                  {renderSchedule(schedule, 'П&apos;ятниця', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='saturday'>
                  {renderSchedule(schedule, 'Субота', nextWeekDate)}
                </div>
                <div className='week-schedule-item' data-dayofweek='sunday'>
                  {renderSchedule(schedule, 'Неділя', nextWeekDate)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default renderScheduleByWeek;
