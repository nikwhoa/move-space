/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { endOfWeek, getWeek, startOfWeek, add } from 'date-fns';
import ArrowLeft from '../ui/arrows/ArrowLeft';
import ArrowRight from '../ui/arrows/ArrowRight';
import WeeklyViewDay from '../ui/weeklyView/WeeklyViewDay';

const RenderWeekSchedule = ({ schedule }) => {
  const [date, setDate] = useState(new Date());

  const weekView = (d) => {
    const week = [];
    const startWeek = startOfWeek(d, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      week.push(add(startWeek, { days: i }));
    }
    return week;
  };

  const changeWeek = (e) => {
    if (e.target.nodeName === 'path') {
      if (e.target.parentElement.parentElement.className.includes('left')) {
        setDate(new Date(date.setDate(date.getDate() - 7)));
      } else {
        setDate(new Date(date.setDate(date.getDate() + 7)));
      }
    } else if (e.target.parentElement.className.includes('left')) {
      setDate(new Date(date.setDate(date.getDate() - 7)));
    } else {
      setDate(new Date(date.setDate(date.getDate() + 7)));
    }
  };
  return (
    <div className='week-schedule schedule'>
      <div className='schedule__title'>
        <div
          className='schedule__arrow arrow-left'
          onClick={(e) => changeWeek(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeWeek(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowLeft />
        </div>
        {weekView(date).map((day) => {
          return (
            <div
              className={`weekday schedule__date${
                new Date(day).getDate() === new Date().getDate()
                  ? ' current-date'
                  : ''
              }`}
              key={day}
            >
              <div className='day'>
                <div>
                  {new Date(day).toLocaleString('UK-UA', { weekday: 'long' })}
                </div>
                {'  '}
                {new Date(day).getDate()}
              </div>

              <WeeklyViewDay day={day} schedule={schedule} />
            </div>
          );
        })}
        <div
          className='schedule__arrow'
          onClick={(e) => changeWeek(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeWeek(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

RenderWeekSchedule.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderWeekSchedule;
