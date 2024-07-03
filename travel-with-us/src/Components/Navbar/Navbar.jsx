import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    
    // function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    // function to remove navbar
    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <Link to="#home" className="logo flex" onClick={removeNavbar}>
                        <h1><MdOutlineTravelExplore className="icon" />Travel With Us</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to="#home" className="navLink" onClick={removeNavbar}>Home</Link>
                        </li>

                        <li className="navItem">
                            <Link to="#discover" className="navLink" onClick={removeNavbar}>Discover</Link>
                        </li>

                        <li className="navItem">
                            <Link to="#packages" className="navLink" onClick={removeNavbar}>Packages</Link>
                        </li>

                        <li className="navItem">
                            <Link to="#about" className="navLink" onClick={removeNavbar}>About</Link>
                        </li>

                        <button className='btn'>
                            <Link to="#signin" onClick={removeNavbar}>Sign In</Link>
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
