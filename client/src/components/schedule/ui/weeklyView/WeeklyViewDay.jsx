/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { endOfWeek, getWeek, startOfWeek, add } from 'date-fns';

const WeeklyViewDay = ({ day, schedule }) => {
  const weekOutput = (d) => {
    const week = [];
    const startWeek = startOfWeek(d, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      week.push(add(startWeek, { days: i }));
    }
    return week;
  };

  return (
    <>
      {schedule
        .filter(
          (item) =>
            item.TrainTime.slice(0, 10) === day.toISOString().slice(0, 10)
        )
        .sort((a, b) => {
          const timeA = a.TrainTime.slice(-13, -11);
          const timeB = b.TrainTime.slice(-13, -11);
          return Number(timeA) - Number(timeB);
        })
        .map((train) => {
          return (
            <div className='train' key={train._id}>
              <div className='train__title'>{train.scheduleItem}</div>
              <div className='train__time'>{train.TrainTime.slice(11, 16)}</div>
            </div>
          );
        })}
    </>
  );
};

WeeklyViewDay.propTypes = {
//   date: PropTypes.instanceOf(Date).isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeeklyViewDay;
