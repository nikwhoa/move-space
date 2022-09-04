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

const App = () => {
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
                </Routes>
                <ToastContainer
                    position='bottom-center'
                    autoClose={5000}
                    hideProgressBar={true}
                    // icon={false}
                    // closeButton={false}
                />
            </AnimatePresence>
        </div>
    );
};

export default App;
