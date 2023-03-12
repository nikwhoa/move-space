/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import '../../styles/hamburgers.css';
import { toast } from 'react-toastify';
import {
    checkIsAuth,
    logout,
    checkIsAdmin,
    checkIsTrainer,
} from '../../slices/auth/authSlice';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const isAuth = useSelector(checkIsAuth);
    const isAdmin = useSelector(checkIsAdmin);
    let isTrainer = useSelector(checkIsTrainer) === 'trainer';

    if (isAdmin) {
        isTrainer = true;
    }

    const showAdmin = isAdmin || isTrainer;

    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        toast('Ви вийшли з облікового запису');
    };

    const showMenuHandler = () => {
        if (window.innerWidth <= 768) {
            setShowMenu(!showMenu);
        }
    };

    return (
        <div
            className={`sticky-wrapper${
                showMenu ? ' sticky-wrapper-open' : ''
            }`}
        >
            <header className='site-navbar py-4 js-sticky-header site-navbar-target'>
                <div
                    className={`container-fluid${
                        showMenu ? ' no-padding' : ''
                    }`}
                >
                    <div className='d-flex align-items-center'>
                        <div
                            className={`site-logo${showMenu ? ' hidden' : ''}`}
                        >
                            <Link to='/'>MOV.space</Link>
                        </div>
                        <div
                            className={`ml-auto${
                                showMenu ? ' margin-left-0' : ''
                            }`}
                        >
                            <nav
                                className={`site-navigation position-relative text-center${
                                    showMenu ? ' show-main-menu' : ''
                                }`}
                                role='navigation'
                            >
                                <ul
                                    className={`site-menu main-menu mr-auto d-none d-lg-block${
                                        showMenu ? ' menu-visible' : ''
                                    }`}
                                >
                                    <li>
                                        <Link
                                            onClick={showMenuHandler}
                                            to='/'
                                            className='nav-link'
                                        >
                                            Головна
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={showMenuHandler}
                                            to='/classes'
                                            className='nav-link'
                                        >
                                            Тренування
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={showMenuHandler}
                                            to='/schedule'
                                            className='nav-link'
                                        >
                                            Розклад
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={showMenuHandler}
                                            to='/trainers'
                                            className='nav-link'
                                        >
                                            Тренери
                                        </Link>
                                    </li>

                                    {isAuth && showAdmin ? (
                                        <li>
                                            <Link
                                                onClick={showMenuHandler}
                                                to='/admin'
                                                className='nav-link'
                                            >
                                                Адмін-панель
                                            </Link>
                                        </li>
                                    ) : null}
                                </ul>
                            </nav>
                        </div>
                        <div className='ml-auto'>
                            <nav
                                className='site-navigation position-relative text-right'
                                role='navigation'
                            >
                                <ul className='main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block'>
                                    <li className='cta'>
                                        {!isAuth ? (
                                            <Link
                                                to='/login'
                                                className='nav-link login-btn'
                                            >
                                                <span className='rounded border border-primary'>
                                                    Вхід
                                                </span>
                                            </Link>
                                        ) : (
                                            <button
                                                className='nav-link'
                                                type='button'
                                                onClick={logoutHandler}
                                            >
                                                <span className='rounded border border-primary'>
                                                    Вихід
                                                </span>
                                            </button>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button
                            className={`hamburger hamburger--spin${
                                showMenu ? ' is-active' : ''
                            }`}
                            type='button'
                            onClick={showMenuHandler}
                        >
                            <span className='hamburger-box'>
                                <span className='hamburger-inner' />
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
