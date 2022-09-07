import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Classes from '../components/classes/Classes';
import Header from '../components/header/Header';
import MainScreen from '../components/mainScreen/MainScreen';
import Schedule from '../components/schedule/Schedule';
import Trainers from '../components/trainers/Trainers';
import RegisterPage from '../components/register/RegisterPage';
import LoginPage from '../components/login/LoginPage';
import { getMe } from '../features/auth/authSlice';
import 'react-toastify/dist/ReactToastify.min.css';
import Admin from '../components/admin/Admin';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    return (
        <div className='site-wrap'>
            <Header />
            <AnimatePresence>
                <Routes location={useLocation()} key={useLocation().pathname}>
                    <Route path='/' element={<MainScreen />} />
                    <Route path='/classes' element={<Classes />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/trainers' element={<Trainers />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
                <ToastContainer
                    position='bottom-center'
                    autoClose={2000}
                    hideProgressBar
                    // icon={false}
                    // closeButton={false}
                />
            </AnimatePresence>
        </div>
    );
};

export default App;
