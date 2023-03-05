import React from 'react';
import { TabPanel } from 'react-tabs';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import getWeekNumber from './getWeekNumber';

const renderSchedule = (isLoading, schedule, day, week = new Date()) => {
  return (
    <TabPanel>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        schedule
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
          ))
      )}
    </TabPanel>
  );
};

export default renderSchedule;
