/* eslint-disable linebreak-style */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './class.scss';

const Class = () => {
    const training = useLocation().state;
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
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='section-title'>{training.className}</h2>
                        <p>{training.classDescription}</p>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src={training.classImage}
                            className='training-image'
                            alt='training'
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Class;
