// TODO: do better image uploading status, validation and if geting an error
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {
    createClass,
    uploadPicture,
} from '../../../slices/classes/classesSlice';
import './style.scss';

const CreateClass = () => {
    const [className, setClassName] = useState('');
    const [classDescription, setClassDescription] = useState('');
    const [image, setImage] = useState(null);
    const [createBtn, setCreateBtn] = useState(false);
    const [preview, setPreview] = useState(null);

    const { status } = useSelector((state) => state.classes);
    const { isLoadingImage } = useSelector((state) => state.classes);
    const { imageUrl } = useSelector((state) => state.classes);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status) {
            toast(status, { toastId: 12241234 });
        }
    }, [status, dispatch]);

    if (image) {
        dispatch(uploadPicture(image)).then(setImage(false));
        setPreview(URL.createObjectURL(image));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const url = CyrillicToTranslit({ preset: 'uk' }).transform(className);

            dispatch(
                createClass({
                    className,
                    classDescription,
                    classImage: imageUrl,
                    classUrl: url.replace(/ /g, '-')
                })
            );
            setClassName('');
            setClassDescription('');
            setImage(null);
            setPreview(null);
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div className='create-class-wrapper'>
            <h1>Створити тренування</h1>
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
                            type='file'
                            placeholder='Зображення'
                            className='form-input'
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        {!isLoadingImage ? (
                            <span className='done'>&#9989;</span>
                        ) : null}
                    </label>
                </div>
                <div>
                    {preview ? (
                        <img
                            src={preview}
                            className='uploaded-image'
                            alt='preview'
                        />
                    ) : null}
                </div>
                {!createBtn ? (
                    <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={handleSubmit}
                        disabled={status !== 'Image has been uploaded'}
                    >
                        Створити
                    </button>
                ) : (
                    <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={handleSubmit}
                    >
                        Створити ще
                    </button>
                )}
            </form>
        </div>
    );
};

export default CreateClass;
