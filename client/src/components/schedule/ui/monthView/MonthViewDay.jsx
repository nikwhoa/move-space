/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

const MonthViewDay = ({ date, schedule }) => {
  const monthOutput = (month) => {
    const output = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    for (let i = firstDay; i <= lastDay; i++) {
      output.push(new Date(date.getFullYear(), date.getMonth(), i + 1));
    }
    return output;
  };

  return (
    <>
      {monthOutput(date).map((day) => (
        <div className='month-schedule__table__item' key={day}>
          <div className='weekday'>
            {new Date(day.setUTCHours(11)).toLocaleString('UK-UA', {
              weekday: 'long',
            })}{' '}
            {'  '}
            {day.getDate()}
          </div>
          <div className='trains'>
            {schedule
              .filter(
                (item) =>
                  item.TrainTime.slice(0, 10) === day.toISOString().slice(0, 10)
              )
              .map((train) => {
                return (
                  <div className='train' key={train._id}>
                    <div className='train__title'>{train.scheduleItem}</div>
                    <div className='train__time'>
                      {train.TrainTime.slice(11, 16)}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </>
  );
};

MonthViewDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MonthViewDay;
