/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, A11y, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';
import './classes.scss';
import { getClasses } from '../../slices/classes/classesSlice';
import LoadingSpinner from '../../utils/LoadingSpinner';

const Classes = () => {
    const dispatch = useDispatch();

    const { classes } = useSelector((state) => state.classes);
    const { isLoading } = useSelector((state) => state.classes);

    useEffect(() => {
        dispatch(getClasses());
    }, [dispatch]);

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
                            {isLoading ? (
                                <LoadingSpinner />
                            ) : (
                                classes.map((item) => (
                                    <SwiperSlide key={item._id}>
                                        <Link
                                            className='work-thumb'
                                            state={item}
                                            to={`/classes/class/${CyrillicToTranslit(
                                                { preset: 'uk' }
                                            )
                                                .transform(item.className, '-')
                                                .toLowerCase()}`}
                                        >
                                            <div className='work-text'>
                                                <h3>{item.className}</h3>
                                            </div>
                                            <img
                                                src={item.classImage}
                                                alt='slide 4'
                                                className='img-fluid'
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Classes;
