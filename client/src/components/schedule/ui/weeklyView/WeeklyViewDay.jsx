/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { formatISO } from 'date-fns';

const WeeklyViewDay = ({ day, schedule }) => {
  return (
    <>
      {schedule
        .filter(
          (item) =>
            item.TrainTime.slice(0, 10) === formatISO(day).slice(0, 10)
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
