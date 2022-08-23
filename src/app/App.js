import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Classes from '../components/classes/Classes';
import Header from '../components/header/Header';
import MainScreen from '../components/mainScreen/MainScreen';
import Schedule from '../components/schedule/Schedule';
import Trainers from '../components/trainers/Trainers';

const App = () => {
    return (
        <BrowserRouter>
            <div className='site-wrap'>
                <Header />
                <Routes>
                    <Route path='/' element={<MainScreen />} />
                    <Route path='/classes' element={<Classes />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/trainers' element={<Trainers />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
