/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
    getClasses,
    deleteClass,
    removeClass,
} from '../../../slices/classes/classesSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';

function Classes() {
    const { classes } = useSelector((state) => state.classes);
    const { isLoading } = useSelector((state) => state.classes);
    const { status } = useSelector((state) => state.classes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClasses());
        if (status === 'Тренування успішно видалено') {
            toast(status);
        }
    }, [status]);

    const remove = (id) => {
        dispatch(removeClass(id));
        dispatch(deleteClass(id));
    };

    return (
        <div>
            <Link to='create'>Додати тренування</Link>

            <h1>Тренування</h1>
            <table className='table table-bordered table-custom table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Назва</th>
                        <th scope='col'>Опис</th>
                        <th scope='col'>Видалити</th>
                        <th scope='col'>Редагувати</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading === true ? (
                        <tr>
                            <td colSpan={4}>
                                <LoadingSpinner />
                            </td>
                        </tr>
                    ) : (
                        classes.map((item) => (
                            <tr key={item._id}>
                                <td>{item.className}</td>
                                <td>{item.classDescription}</td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-danger'
                                        onClick={() => remove(item._id)}
                                    >
                                        Видалити
                                    </button>
                                </td>
                                <td>
                                    <Link to={`edit/${item._id}`}>
                                        <button
                                            type='button'
                                            className='btn btn-primary'
                                        >
                                            Редагувати
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Classes;
