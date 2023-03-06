import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Tab, TabList, Tabs } from 'react-tabs';
import { getSchedule } from '../../../slices/schedule/scheduleSlice';
import { getMe, checkIsAdmin } from '../../../slices/auth/authSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import '../styles/schedule.scss';
import 'react-tabs/style/react-tabs.css';
import RenderMonthSchedule from './RenderMonthSchedule';
import RenderWeekSchedule from './RenderWeekSchedule';
import RenderDaySchedule from './RenderDaySchedule';
import ScheduleButton from '../ui/slider/ShowScheduleButton';

const Schedule = () => {
  const [view, setView] = useState('week');
  const [windowWidth, setWindowWidth] = useState(false);
  const dispatch = useDispatch();

  const { schedule } = useSelector((state) => state.schedule.schedule);
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.schedule);
  const isAdmin = useSelector(checkIsAdmin);

  useEffect(() => {
    dispatch(getMe());
    dispatch(getSchedule());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setWindowWidth(true);
      setView('day');
    } else {
      setWindowWidth(false);
    }

    const handleWindowResize = () => {
      const prevView = view;
      if (window.innerWidth < 1024) {
        setWindowWidth(true);
        setView('day');
      } else {
        setView(prevView);
        setWindowWidth(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
          <div className='col-lg-12' hidden={windowWidth}>
            Переглянути розклад на:&nbsp;
            <ScheduleButton view={view} setView={setView} value='day' />{' '}
            <ScheduleButton view={view} setView={setView} value='week' />{' '}
            <ScheduleButton view={view} setView={setView} value='month' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 mt-3'>
            <div className='schedule'>
              {!user || isAdmin ? (
                <div className='schedule__tabs'>
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    {
                      month: <RenderMonthSchedule schedule={schedule} />,
                      week: <RenderWeekSchedule schedule={schedule} />,
                      day: <RenderDaySchedule />,
                    }[view]
                  )}
                </div>
              ) : (
                <div>Load user schedule</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
