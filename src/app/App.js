import { BrowserRouter, Router, Link, Route, Routes } from 'react-router-dom';
import GymUsers from '../features/GymUsers/GymUsers';
import AddGymUser from '../features/AddGymUser/AddGymUser'
import Nav from '../features/Nav/Nav';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />} />
                <Route path='/add' element={<AddGymUser />} />
                <Route path='/users' element={<GymUsers />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
