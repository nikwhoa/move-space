import React from 'react';
import { Navigation, A11y, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import slide4 from './slide_4.jpg';
import slide3 from './slide_3.jpg';
import slide2 from './slide_2.jpg';
import slide1 from './slide_1.jpg';
import slide0 from './slide_0.jpg';

// import 'swiper/css/bundle';
import './classes.scss';

const Classes = () => {
    return (
        <motion.div
            transition={{ duration: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='site-section section-2'
            id='classes-section'
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 mb-5'>
                        <h2 className='section-title'>Тренування</h2>
                        <p>
                            Рух – це життя! А тренування – це рух у різних
                            площинах і амплітудах, який не просто допомагає вам
                            коригувати фігуру. Це рух – який дає вам шанс завжди
                            почуватися молодими і здоровими:
                        </p>
                        <p>
                            <b>Тренування допоможуть:</b>
                        </p>
                        <ul>
                            <li>зміцнити м‘язи</li>
                            <li>бути завжди радісним і сповненим сил</li>
                            <li>покращити когнітивні функції та пам’ять</li>
                            <li>мати хороший сон</li>
                            <li>зняти стрес</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Swiper
                            modules={[Navigation, A11y, Scrollbar]}
                            slidesPerView={3}
                            navigation
                            loop
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <a className='work-thumb' href='single.html'>
                                    <div className='work-text'>
                                        <h3>Classes fitness name here</h3>
                                        <span className='category'>
                                            Fitness
                                        </span>
                                    </div>
                                    <img
                                        src={slide4}
                                        alt='slide 4'
                                        className='img-fluid'
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='work-thumb' href='single.html'>
                                    <div className='work-text'>
                                        <h3>Classes fitness name here</h3>
                                        <span className='category'>
                                            Fitness
                                        </span>
                                    </div>
                                    <img
                                        src={slide3}
                                        alt='slide 3'
                                        className='img-fluid'
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='work-thumb' href='single.html'>
                                    <div className='work-text'>
                                        <h3>Classes fitness name here</h3>
                                        <span className='category'>
                                            Fitness
                                        </span>
                                    </div>
                                    <img
                                        src={slide2}
                                        alt='slide 3'
                                        className='img-fluid'
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='work-thumb' href='single.html'>
                                    <div className='work-text'>
                                        <h3>Classes fitness name here</h3>
                                        <span className='category'>
                                            Fitness
                                        </span>
                                    </div>
                                    <img
                                        src={slide1}
                                        alt='slide 3'
                                        className='img-fluid'
                                    />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='work-thumb' href='single.html'>
                                    <div className='work-text'>
                                        <h3>Classes fitness name here</h3>
                                        <span className='category'>
                                            Fitness
                                        </span>
                                    </div>
                                    <img
                                        src={slide0}
                                        alt='slide 3'
                                        className='img-fluid'
                                    />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Classes;
