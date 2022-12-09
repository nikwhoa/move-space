import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './class.scss';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClasses } from '../../slices/classes/classesSlice';
import LoadingSpinner from '../../utils/LoadingSpinner';

const Class = () => {
    const { isLoading } = useSelector((state) => state.classes);

    const dispatch = useDispatch();

    const training = useSelector((state) => state.classes.classes);

    const trainToDisplay = training.filter(
        (element) => element.classUrl === useParams().className
    );

    useEffect(() => {
        dispatch(getClasses());
    }, [dispatch]);

    return (
        <motion.div
            transition={{ duration: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='site-section'
            id='class-section'
        >
            <div className='container'>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2 className='section-title'>
                                {trainToDisplay[0].className}
                            </h2>
                            <p>{trainToDisplay[0].classDescription}</p>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                src={trainToDisplay[0].classImage}
                                className='training-image'
                                alt='training'
                            />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Class;
