import React from 'react'
import './css/Navigation.css'
import { Link } from "react-router-dom";
import Logo from './Logo';


const Navigation = () => {
    return (
        <>
            <div id="navigation" style={{ width: "100%", position: "fixed", zIndex: "100" }}>
                <nav>
                    <h1 id="logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </h1>
                    <div className="nav-Hide">
                        <ul className="navlinks hide">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/studentcenter">Student Center</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/PreRegistation">Register</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <Link to="/login">
                                <button id="contactBtn">Login</button>
                            </Link>
                        </ul>
                    </div>
                    <i className="fa-solid fa-x" id="cloceBurger"></i>
                    <i className="fa-solid fa-bars" id="hamburger"></i>
                </nav>
            </div>
        </>
    )
}

export default Navigation;