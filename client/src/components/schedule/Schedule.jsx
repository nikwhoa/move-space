import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Tab, TabList, Tabs } from 'react-tabs';
import { getSchedule } from '../../slices/schedule/scheduleSlice';
import { getMe, checkIsAdmin } from '../../slices/auth/authSlice';
import './schedule.scss';
import 'react-tabs/style/react-tabs.css';
import renderSchedule from './renderSchedule';
import renderScheduleByWeek from './renderScheduleByWeek';

const Schedule = () => {
  const [isNextWeek, setNextWeek] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();

  const { schedule } = useSelector((state) => state.schedule.schedule);
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.schedule);
  const isAdmin = useSelector(checkIsAdmin);

  const getDay = () => {
    const date = new Date();
    const day = date.getDay();
    if (day === 0) {
      setTabIndex(6);
    }
    setTabIndex(day - 1);
  };

  useEffect(() => {
    dispatch(getMe());
    dispatch(getSchedule());
    getDay();
  }, [dispatch]);

  return (
    <motion.div
      transition={{ duration: 0.75 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='site-section section-2'
      id='schedule-section'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mb-5'>
            <h2 className='section-title'>Розклад</h2>
            <div>
              <button
                type='button'
                className='next-week-link btn'
                onClick={() => setNextWeek(isNextWeek + 7)}
              >
                Наступний тиждень
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='schedule'>
              <div className='schedule__tabs'>
                {renderScheduleByWeek(isLoading, schedule, user, isAdmin, isNextWeek)}
                {/* <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab>Понеділок</Tab>
                    <Tab>Вівторок</Tab>
                    <Tab>Середа</Tab>
                    <Tab>Четвер</Tab>
                    <Tab>П&apos;ятниця</Tab>
                    <Tab>Субота</Tab>
                    <Tab>Неділя</Tab>
                  </TabList>
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Понеділок')}
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Вівторок')}
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Середа')}
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Четвер')}
                  {renderSchedule(isLoading, schedule, user, isAdmin, "П'ятниця")}
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Субота')}
                  {renderSchedule(isLoading, schedule, user, isAdmin, 'Неділя')}
                </Tabs> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
