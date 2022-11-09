import React, { Fragment, useEffect } from 'react';
import './trainers.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getTrainers } from '../../slices/trainers/trainersSlice';

const Trainers = () => {
    const trainers = useSelector((state) => state.trainers.trainers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrainers);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            className='site-section'
            id='trainer-section'
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mb-5'>
                        <h2 className='section-title'>Тренери</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rem possimus distinctio ex. Natus totam
                            voluptatibus animi aspernatur ducimus quas obcaecati
                            mollitia quibusdam temporibus culpa dolore molestias
                            blanditiis consequuntur sunt nisi.
                        </p>
                    </div>
                </div>
                <div className='row m-t-1 large-gutters'>
                    {trainers.map((trainer) => {
                        return (
                            <Fragment key={trainer.id}>
                                <div className='col-md-6 person col-lg-4 mb-4 mb-lg-0'>
                                    <img
                                        src={trainer.image.src}
                                        alt={trainer.image.alt}
                                        className='img-fluid mb-5 img-square'
                                    />
                                    <h3>
                                        {trainer.name}
                                    </h3>
                                    <p className='mb-4 opacity-7'>
                                        {trainer.title}
                                    </p>
                                    <p>{trainer.description}</p>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Trainers;
