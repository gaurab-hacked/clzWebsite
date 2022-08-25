import React from 'react'
import './css/Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div id="navigation" style={{ width: "100%", position: "fixed", zIndex: "100" }}>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid ">
                        <Link className="navbar-brand mx-5" to="/">
                            <img src="https://gnc.edu.np/images/logo.png" alt="" style={{ height: "40px", width: "190px", marginTop: "-10px" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-3" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/courses">Courses</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle mx-3" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Courses
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">BBS</Link></li>
                                        <li><Link className="dropdown-item" to="/">BCA</Link></li>
                                        <li><Link className="dropdown-item" to="/">BBM</Link></li>
                                        <li><Link className="dropdown-item" to="/">MBS</Link></li>
                                        <li><Link className="dropdown-item" to="/">BA/BSW</Link></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item mx-3 ">
                                    <Link className="nav-link" to="/team">Our Team</Link>
                                </li>
                                <li className="nav-item mx-3 ">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item mx-3 ">
                                    <Link className="nav-link" to="/studentcenter">Student Center</Link>
                                </li>
                                <li className="nav-item mx-3 ">
                                    <Link className="nav-link" to="/gallery">Galary</Link>
                                </li>
                                <li className="nav-item mx-3 ">
                                    <Link className="nav-link" to="/PreRegistation">Register</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary btn-sm mx-3" to="/login" role="button">Login</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation;