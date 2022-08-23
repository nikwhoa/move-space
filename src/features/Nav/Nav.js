import { Link } from 'react-router-dom';
import AddGymUser from '../AddGymUser/AddGymUser';
import GymUsers from '../GymUsers/GymUsers';

const Nav = () => {
    return (
        <>
            <Link to='/add'>Add user</Link> <br />
            <Link to='/users'>Gym users</Link>
        </>
    );
};

export default Nav;
