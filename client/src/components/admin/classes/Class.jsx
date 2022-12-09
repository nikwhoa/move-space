import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {
    getClasses,
    uploadPicture,
    updateClass,
} from '../../../slices/classes/classesSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import './style.scss';

function Class() {
    const [className, setClassName] = useState('');
    const [classDescription, setClassDescription] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadImage, setUploadImage] = useState(null);

    const { isLoading } = useSelector((state) => state.classes);
    const { isLoadingImage } = useSelector((state) => state.classes);
    const { imageUrl } = useSelector((state) => state.classes);
    const { status } = useSelector((state) => state.classes);

    const dispatch = useDispatch();

    const classID = useParams().id;

    useEffect(() => {
        dispatch(getClasses()).then((trains) => {
            const train = trains.payload.filter((el) => el._id === classID);
            setClassName(train[0].className);
            setClassDescription(train[0].classDescription);
            setImage(train[0].classImage);
        });
    }, [dispatch]);

    useEffect(() => {
        if (status) {
            toast(status);
        }
    }, [status]);

    if (uploadImage) {
        dispatch(uploadPicture(uploadImage)).then(setUploadImage(false));
        setPreview(URL.createObjectURL(uploadImage));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = CyrillicToTranslit({ preset: 'uk' }).transform(className);

        dispatch(
            updateClass({
                className,
                classDescription,
                classImage: imageUrl || image,
                classID,
                classUrl: url.replace(/ /g, '-')
            })
        );
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12 mb-5'>Редагувати тренування</div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className='col-lg-8'>
                        <div>
                            <form className='update-class'>
                                <div className='input-container'>
                                    <label className='label'>
                                        <input
                                            type='text'
                                            placeholder='Назва тренування'
                                            className='form-input'
                                            value={className}
                                            onChange={(e) =>
                                                setClassName(e.target.value)
                                            }
                                        />
                                    </label>
                                </div>
                                <div className='input-container update-class-description'>
                                    <label className='label'>
                                        <textarea
                                            className='form-input update-class-description'
                                            value={classDescription}
                                            onChange={(e) =>
                                                setClassDescription(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </label>
                                </div>
                                <div className='input-container input-container-image'>
                                    <label className='label'>
                                        <div>Зображення</div>
                                        <br />
                                        <img
                                            src={preview || image}
                                            className='uploaded-image'
                                            alt='preview'
                                        />
                                    </label>
                                </div>
                                <div className='input-container'>
                                    <label className='label'>
                                        <input
                                            type='file'
                                            placeholder='Зображення'
                                            className='form-input'
                                            onChange={(e) =>
                                                setUploadImage(
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        {!isLoadingImage ? (
                                            <span className='done'>
                                                &#9989;
                                            </span>
                                        ) : null}
                                    </label>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='btn btn-primary'
                                        onClick={handleSubmit}
                                    >
                                        Редагувати
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Class;
