import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userFetching } from './gymUsersSlice';

const GymUsers = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    console.log(users);

    useEffect(() => {
        dispatch(userFetching());
    }, []);

    // const users =

    return (
        <>
            <Link to='/'>Main page</Link>
            <h2>GymUsers</h2>
            {users.map((user) => (
                <div key={user.id}>
                    Name: {user.name} <br />
                    Level: {user.level} <br />
                </div>

            ))}
        </>
    );
};

export default GymUsers;
