import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { checkIsAuth, logout } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const Header = () => {
    const isAuth = useSelector(checkIsAuth);


    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        toast('You signed');
    };

    return (
        <div className="sticky-wrapper">
            <header className="site-navbar py-4 js-sticky-header site-navbar-target">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="site-logo">
                            <Link to="/">Move.Space</Link>
                        </div>
                        <div className="ml-auto">
                            <nav
                                className="site-navigation position-relative text-right"
                                role="navigation"
                            >
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li>
                                        <Link to="/" className="nav-link">
                                            {' '}
                                            Головна{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/classes"
                                            className="nav-link"
                                        >
                                            {' '}
                                            Тренування{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/schedule"
                                            className="nav-link"
                                        >
                                            {' '}
                                            Розклад{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/trainers"
                                            className="nav-link"
                                        >
                                            {' '}
                                            Тренери{' '}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ml-auto">
                            <nav
                                className="site-navigation position-relative text-right"
                                role="navigation"
                            >
                                <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block">
                                    <li className="cta">
                                        {!isAuth ? (
                                            <>
                                                <Link
                                                    to="/login"
                                                    className="nav-link"
                                                >
                                                    <span className="rounded border border-primary">
                                                        Вхід
                                                    </span>{' '}
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <a
                                                    className="nav-link"
                                                    onClick={logoutHandler}
                                                >
                                                    <span className="rounded border border-primary">
                                                        Вихід
                                                    </span>{' '}
                                                </a>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                            <a
                                href="#"
                                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"
                            >
                                <span className="icon-menu h3"></span>{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;