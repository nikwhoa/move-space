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
import { getMe } from '../slices/auth/authSlice';
import Admin from '../components/admin/Admin';
import 'react-toastify/dist/ReactToastify.min.css';
import Class from '../components/classes/Class';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    return (
        <div className='site-wrap'>
            <Header />
            <AnimatePresence>
                <Routes location={useLocation()} key='main-route'>
                    <Route path='/' element={<MainScreen />} key='mainscreen' />
                    <Route
                        path='/classes'
                        element={<Classes />}
                        key='classes'
                    />
                    <Route
                        path='/classes/class/:className'
                        element={<Class />}
                        key='class'
                    />
                    <Route
                        path='/schedule'
                        element={<Schedule />}
                        key='schedule'
                    />
                    <Route
                        path='/trainers'
                        element={<Trainers />}
                        key='trainers'
                    />
                    <Route
                        path='/register'
                        element={<RegisterPage />}
                        key='register'
                    />
                    <Route path='/login' element={<LoginPage />} key='login' />
                    <Route path='/admin/*' element={<Admin />} key='admin' />
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
