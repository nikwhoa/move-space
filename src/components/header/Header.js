import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='sticky-wrapper'>
            <header className='site-navbar py-4 js-sticky-header site-navbar-target'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <div className='site-logo'>
                            <Link to='/'>Move.Space</Link>
                        </div>
                        <div className='ml-auto'>
                            <nav
                                className='site-navigation position-relative text-right'
                                role='navigation'
                            >
                                <ul className='site-menu main-menu js-clone-nav mr-auto d-none d-lg-block'>
                                    <li>
                                        <Link to='/' className='nav-link'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/classes'
                                            className='nav-link'
                                        >
                                            Classes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/schedule' className='nav-link'>Schedule</Link>
                                    </li>
                                    <li>
                                        <a
                                            href='#trainer-section'
                                            className='nav-link'
                                        >
                                            Trainer
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#services-section'
                                            className='nav-link'
                                        >
                                            Services
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='ml-auto'>
                            <nav
                                className='site-navigation position-relative text-right'
                                role='navigation'
                            >
                                <ul className='site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block'>
                                    <li className='cta'>
                                        <a
                                            href='#contact-section'
                                            className='nav-link'
                                        >
                                            <span className='rounded border border-primary'>
                                                Contact
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <a
                                href='#'
                                className='d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right'
                            >
                                <span className='icon-menu h3'></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
