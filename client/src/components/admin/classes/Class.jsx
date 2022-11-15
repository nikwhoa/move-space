/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

function Class() {
    const training = useLocation().state;
    const [className, setClassName] = useState('');
    const [classDescription, setClassDescription] = useState('');
    const [image, setImage] = useState(null);

    // console.log(training);
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <form>
                        <div className='input-container'>
                            <label className='label'>
                                <input
                                    type='text'
                                    placeholder='Назва тренування'
                                    className='form-input'
                                    value={training.className}
                                    // onChange={(e) =>
                                    //     setClassName(e.target.value)
                                    // }
                                />
                            </label>
                        </div>
                    </form>
                    <h2 className='title'>{training.className}</h2>
                    <p>{training.classDescription}</p>
                    <img
                        src={training.classImage}
                        alt='training'
                        className='uploaded-image'
                    />
                </div>
            </div>
        </div>
    );
}

export default Class;
