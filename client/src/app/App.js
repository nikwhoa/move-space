import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';
import Classes from '../components/classes/Classes';
import Header from '../components/header/Header';
import MainScreen from '../components/mainScreen/MainScreen';
import Schedule from '../components/schedule/Schedule';
import Trainers from '../components/trainers/Trainers';
import RegisterPage from '../components/register/RegisterPage';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { LoginPage } from '../components/login/LoginPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from '../features/auth/authSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    });

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
                </Routes>
                <ToastContainer
                    position='bottom-center'
                    autoClose={2000}
                    hideProgressBar={true}
                    // icon={false}
                    // closeButton={false}
                />
            </AnimatePresence>
        </div>
    );
};

export default App;
