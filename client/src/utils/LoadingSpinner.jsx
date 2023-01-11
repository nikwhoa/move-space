import React from 'react';
import '../styles/spinner.css';

// eslint-disable-next-line arrow-body-style
const LoadingSpinner = () => {
    return (
        <div className='spinner-container'>
            <div className='loading-spinner' />
        </div>
    );
};

export default LoadingSpinner;
