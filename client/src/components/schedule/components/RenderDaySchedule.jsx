/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatISO } from 'date-fns';
import ArrowLeft from '../ui/arrows/ArrowLeft';
import ArrowRight from '../ui/arrows/ArrowRight';

const RenderDaySchedule = ({ schedule }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div className='day-schedule schedule'>
      <div className='day-schedule__title'>
        <div className='schedule__arrow'>
          <ArrowLeft />
        </div>
        <div className='day-schedule__date'>
          {date.toLocaleString('UK-UA', {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
          })}
        </div>
        <div className='schedule__arrow'>
          <ArrowRight />
        </div>
      </div>
      {schedule
        .filter(
          (item) => item.TrainTime.slice(0, 10) === formatISO(date).slice(0, 10)
        )
        .sort((a, b) => {
          const timeA = a.TrainTime.slice(-13, -11);
          const timeB = b.TrainTime.slice(-13, -11);
          return Number(timeA) - Number(timeB);
        })
        .map((train) => {
          return (
            <div className='train' key={train._id}>
              <div className='train__title schedule__title'>
                {train.scheduleItem}
              </div>
              <div className='train__time'>{train.TrainTime.slice(11, 16)}</div>
            </div>
          );
        })}

      {schedule.filter(
        (item) => item.TrainTime.slice(0, 10) === formatISO(date).slice(0, 10)
      ).length === 0 && (
        <div className='no-trains'>
          <p>Сьогодні немає тренувань</p>
        </div>
      )}
    </div>
  );
};

RenderDaySchedule.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderDaySchedule;
