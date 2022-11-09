/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createClass } from '../../../slices/classes/classesSlice';

const CreateClass = () => {
    const [className, setClassName] = useState('');
    const [classDescription, setClassDescription] = useState('');
    const [classImage, setClassImage] = useState('');

    const { status } = useSelector((state) => state.classes);
    // const { isLoading } = useSelector((state) => state.classes);
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: reset status to null after toast

        if (status) {
            toast(status, { toastId: 12241234 });
        }

        // if (!isLoading) {
        //     navigate('/admin/classes');
        // }
    }, [status, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            // eslint-disable-next-line no-undef
            dispatch(
                createClass({
                    className,
                    classDescription,
                    classImage,
                })
            );
            setClassName('');
            setClassDescription('');
            setClassImage('');
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div>
            <h1>Створити клас</h1>
            <form className='create-class-form'>
                <div className='input-container'>
                    <label className='label'>
                        <input
                            type='text'
                            placeholder='Назва тренування'
                            className='form-input'
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </label>
                </div>
                <div
                    className='input-container'
                    style={{ minHeight: '40px', height: 'auto' }}
                >
                    <label className='label'>
                        <textarea
                            // type='text'
                            rows={15}
                            placeholder='Опис тренування'
                            className='form-input'
                            value={classDescription}
                            onChange={(e) =>
                                setClassDescription(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label className='label'>
                        <input
                            type='text'
                            placeholder='Посилання на зображення'
                            value={classImage}
                            className='form-input'
                            onChange={(e) => setClassImage(e.target.value)}
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={handleSubmit}
                >
                    Створити
                </button>
            </form>
        </div>
    );
};

export default CreateClass;
