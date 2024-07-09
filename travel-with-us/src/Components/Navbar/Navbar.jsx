import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const location = useLocation();
    const navigate = useNavigate();
    
    // function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    // function to remove navbar
    const removeNavbar = () => {
        setActive('navBar');
    };

    const handleNavigation = (hash) => {
        removeNavbar();
        if (location.pathname !== '/') {
            navigate('/' + hash);
        }
    };

    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <Link to="/#home" className="logo flex" onClick={() => handleNavigation('#home')}>
                        <h1><MdOutlineTravelExplore className="icon" />Travel With Us</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to="/#home" className="navLink" onClick={() => handleNavigation('#home')}>Home</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/#discover" className="navLink" onClick={() => handleNavigation('#discover')}>Discover</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/#packages" className="navLink" onClick={() => handleNavigation('#packages')}>Packages</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/#about" className="navLink" onClick={() => handleNavigation('#about')}>About</Link>
                        </li>

                        <button className='btn'>
                            <Link to="/#signin" onClick={() => handleNavigation('#signin')}>Sign In</Link>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>

            </header>
        </section>
    );
}

export default Navbar;