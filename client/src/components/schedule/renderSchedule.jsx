/* eslint-disable react/react-in-jsx-scope */
import { TabPanel } from 'react-tabs';
import LoadingSpinner from '../../utils/LoadingSpinner';
import displayUserSchedule from './displayUserSchedule';

const renderSchedule = (isLoading, schedule, user, checkIsAdmin, day) => {
  return (
    <TabPanel>
      {!user || checkIsAdmin ? (
        <div className='guest__schedule schedule-tabs-wrapper'>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            schedule
              .filter((item) => item.trainDay === day)
              //   sorting items by train time
              .sort((a, b) => {
                const timeA = a.TrainTime.slice(-13, -11);
                const timeB = b.TrainTime.slice(-13, -11);
                return Number(timeA) - Number(timeB);
              })
              .map((item) => (
                <div className='schedule__item' key={item._id}>
                  <div className='schedule__item__title'>
                    {item.scheduleItem}
                  </div>
                  <div className='schedule__item__time'>
                    {item.TrainTime.slice(-13, -8)}
                  </div>
                </div>
              ))
          )}
        </div>
      ) : (
        <div className='schedule-tabs-wrapper'>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            displayUserSchedule(schedule, user, day)
          )}
        </div>
      )}
    </TabPanel>
  );
};

export default renderSchedule;
