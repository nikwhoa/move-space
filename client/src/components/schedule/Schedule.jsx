import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Tab, TabList, Tabs } from 'react-tabs';
import { getSchedule } from '../../slices/schedule/scheduleSlice';
import { getMe, checkIsAdmin } from '../../slices/auth/authSlice';
import './schedule.scss';
import 'react-tabs/style/react-tabs.css';
import renderSchedule from './renderSchedule';

const Schedule = () => {
  const dispatch = useDispatch();

  const { schedule } = useSelector((state) => state.schedule.schedule);
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.schedule);
  const isAdmin = useSelector(checkIsAdmin);
  useEffect(() => {
    dispatch(getMe());
    dispatch(getSchedule());
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
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='schedule'>
              <div className='schedule__tabs'>
                <Tabs>
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
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
