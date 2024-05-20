// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-menu">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navbar-logo">
                    <img src="\src/components/Images/Aniverselogo.jpg" alt="AnimeVerse Logo" />
                </div>
            </div>
            <div className="navbar-search">
                <button onClick={() => setSearchOpen(!searchOpen)}>
                    <i className="fa fa-search"></i>
                </button>
                {searchOpen && <input type="text" placeholder="Search anime..." />}
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
