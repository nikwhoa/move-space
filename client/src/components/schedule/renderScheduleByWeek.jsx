/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { Tab, TabList, div, Tabs, TabPanel } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingSpinner from '../../utils/LoadingSpinner';
import displayUserSchedule from './displayUserSchedule';
import 'swiper/swiper.min.css';

const getWeekNumber = (d) => {
  // eslint-disable-next-line no-param-reassign
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
};

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

const getDatesOfWeek = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const monday = new Date(currentDate);
  const tuesday = new Date(currentDate);
  const wednesday = new Date(currentDate);
  const thursday = new Date(currentDate);
  const friday = new Date(currentDate);
  const saturday = new Date(currentDate);
  const sunday = new Date(currentDate);

  monday.setDate(currentDate.getDate() - currentDay + 1);
  tuesday.setDate(currentDate.getDate() - currentDay + 2);
  wednesday.setDate(currentDate.getDate() - currentDay + 3);
  thursday.setDate(currentDate.getDate() - currentDay + 4);
  friday.setDate(currentDate.getDate() - currentDay + 5);
  saturday.setDate(currentDate.getDate() - currentDay + 6);
  sunday.setDate(currentDate.getDate() - currentDay + 7);

  const daysOutput = (day) => {
    return day.toLocaleString('uk-UA', {
      day: 'numeric',
      month: 'long',
    });
  };

  return {
    monday: daysOutput(monday),
    tuesday: daysOutput(tuesday),
    wednesday: daysOutput(wednesday),
    thursday: daysOutput(thursday),
    friday: daysOutput(friday),
    saturday: daysOutput(saturday),
    sunday: daysOutput(sunday),
  };
};

const renderScheduleByWeek = (
  isLoading,
  schedule,
  user,
  checkIsAdmin,
  isNextWeek
) => {
  const [startDate, setStartDate] = useState(new Date());
  const [nextWeekDate, setNextWeekDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(0);

  const getDay = () => {
    const date = new Date();
    const day = date.getDay();
    if (day === 0) {
      setActiveTab(6);
    }
    setActiveTab(day - 1);
  };

  useEffect(() => {
    if (isNextWeek) {
      setNextWeekDate(
        new Date(startDate.setDate(startDate.getDate() + isNextWeek))
      );
      setStartDate(new Date());
    }
    getDay();
  }, [isNextWeek]);

  const countTabs = (window) => {
    if (window.innerWidth <= 768) {
      return 3;
    }
    if (window.innerWidth <= 1024) {
      return 4;
    }
    if (window.innerWidth <= 1280) {
      return 5;
    }
    return 7;
  };
  return (
    <div>
      <div className='guest__schedule week-schedule'>
        <div className='week-schedule__header'>
          <Tabs
            style={{ width: '100%' }}
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <Swiper initialSlide={new Date().getDay() === 0 ? 6 : new Date().getDay() - 1} centeredSlides centeredSlidesBounds slidesPerView={countTabs(window)}>
              {/* TODO: change initial slide base on date and on click on tab */}
              <TabList className='react-tabs__tab-list week-schedule__list'>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item' onSelect={(index) => alert(index)}>
                    Понеділок <br /> <span>{getDatesOfWeek().monday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item' onSelect={(index) => alert(index)}>
                    Вівторок <br /> <span>{getDatesOfWeek().tuesday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item' onClick={() => alert('wed')}>
                    Середа <br /> <span>{getDatesOfWeek().wednesday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item'>
                    Четвер <br /> <span>{getDatesOfWeek().thursday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item'>
                    П&apos;ятниця <br /> <span>{getDatesOfWeek().friday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item'>
                    Субота <br /> <span>{getDatesOfWeek().saturday}</span>
                  </Tab>
                </SwiperSlide>
                <SwiperSlide className='schedule-slide'>
                  <Tab className='week-schedule__header__item'>
                    Неділя <br /> <span>{getDatesOfWeek().sunday}</span>
                  </Tab>
                </SwiperSlide>
              </TabList>
            </Swiper>
            <div className='week-schedule__body'>
              <div className='week-schedule__body__item'>
                <div className='week-schedule-item'>
                  {renderSchedule(
                    isLoading,
                    schedule,
                    'Понеділок',
                    nextWeekDate
                  )}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(
                    isLoading,
                    schedule,
                    'Вівторок',
                    nextWeekDate
                  )}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(isLoading, schedule, 'Середа', nextWeekDate)}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(isLoading, schedule, 'Четвер', nextWeekDate)}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(
                    isLoading,
                    schedule,
                    'П&apos;ятниця',
                    nextWeekDate
                  )}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(isLoading, schedule, 'Субота', nextWeekDate)}
                </div>
                <div className='week-schedule-item'>
                  {renderSchedule(isLoading, schedule, 'Неділя', nextWeekDate)}
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default renderScheduleByWeek;
