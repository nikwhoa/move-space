import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ArrowLeft from '../ui/arrows/ArrowLeft';
import ArrowRight from '../ui/arrows/ArrowRight';
import MonthViewDay from '../ui/monthView/MonthViewDay';

const RenderMonthSchedule = ({ schedule }) => {
  const [date, setDate] = useState(new Date());

  const dateView = (d, month) => {
    if (month === 'prev') {
      const prevMonth = new Date(
        d.getFullYear(),
        d.getMonth() - 1,
        1
      ).toLocaleString('UK-UA', { month: 'long' });
      return `${
        prevMonth.charAt(0).toUpperCase() + prevMonth.slice(1)
      } ${d.getFullYear()}`;
    }
    if (month === 'next') {
      const nextMonth = new Date(
        d.getFullYear(),
        d.getMonth() + 1,
        1
      ).toLocaleString('UK-UA', { month: 'long' });
      return `${
        nextMonth.charAt(0).toUpperCase() + nextMonth.slice(1)
      } ${d.getFullYear()}`;
    }
    const currentMonth = new Date(
      d.getFullYear(),
      d.getMonth(),
      1
    ).toLocaleString('UK-UA', { month: 'long' });
    return `${
      currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
    } ${d.getFullYear()}`;
  };

  const changeMonth = (e) => {
    if (e.target.nodeName === 'path') {
      if (e.target.parentElement.parentElement.className.includes('left')) {
        setDate(new Date(date.setMonth(date.getMonth() - 1)));
      } else {
        setDate(new Date(date.setMonth(date.getMonth() + 1)));
      }
    } else if (e.target.parentElement.className.includes('left')) {
      setDate(new Date(date.setMonth(date.getMonth() - 1)));
    } else {
      setDate(new Date(date.setMonth(date.getMonth() + 1)));
    }
  };

  return (
    <div className='month-schedule'>
      <div className='month-title'>
        <div
          className='month-title__arrow month-title__arrow--left'
          onClick={(e) => changeMonth(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeMonth(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowLeft />
        </div>
        <div className='month-title__date'>
          <div className='month-title__date--prev'>
            <div className='month-title__date--prev-month'>
              <motion.div
                transition={{ duration: 0.75 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {dateView(date, 'prev')}
              </motion.div>
            </div>
          </div>

          <div className='month-title__date--current'>
            <div className='month-title__date--current-month'>
              <motion.div
                transition={{ duration: 0.75 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
              >
                {dateView(date, 'current')}
              </motion.div>
            </div>
          </div>

          <div className='month-title__date--next'>
            <div className='month-title__date--next-month'>
              <motion.div
                transition={{ duration: 0.75 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {dateView(date, 'next')}
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className='month-title__arrow month-title__arrow-right'
          onClick={(e) => changeMonth(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeMonth(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowRight />
        </div>
      </div>
      <div className='month-schedule__table'>
        <MonthViewDay date={date} schedule={schedule} />
      </div>
    </div>
  );
};

RenderMonthSchedule.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderMonthSchedule;
