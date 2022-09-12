import React,{useState} from 'react'
import './css/Navigation.css'
import { Link } from "react-router-dom";
import Logo from "./Logo"

const Navigation = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div id="uppNav" className={showMediaIcons?'none':""}>
                <div id="upperNavigation">
                    <div className="left">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank" id="TNavClzLink">info@gnc.edu.np</a>
                    </div>
                    <div className="right">
                        <div className="number TNavDec">Call: (+977) 01-5237317, 01-5237352, 9851078391</div>
                        <div className="icones TNavDecLink" >
                            <a href="https://www.facebook.com/greenfieldcollegenepal" target="blank">
                                <i className="fa-brands fa-facebook-f mx-4"></i>
                            </a>
                            <a href="https://twitter.com/" target="blank">
                                <i className="fa-brands fa-twitter mx-4"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="blank">
                                <i className="fa-brands fa-instagram mx-4"></i>
                            </a>
                            <a href="https://www.facebook.com/messages/t/1866373626778452" target="blank" className='lastlinkTop'>
                                <i className="fa-solid fa-message mx-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div id="navigation" >
                <nav>
                    <div id="logo">
                        <Link to="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div id="navcontent" className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                        <ul className="navlinks">
                            <li><Link to="/" onClick={() => { setShowMediaIcons(false) }}>Home</Link></li>
                            <li><Link to="/aboutus" onClick={() => { setShowMediaIcons(false) }}>About Us</Link></li>
                            <li className="nav-item dropdown">
                                <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>Courses</Link>
                                <div className="dropdown-content" id='dropdowncontent'>
                                        <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>BBS</Link>
                                        <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>BBM</Link>
                                        <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>BCA</Link>
                                        <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>MBS</Link>
                                        <Link to="/courses" onClick={() => { setShowMediaIcons(false) }}>BA/BSW</Link>
                                </div>
                            </li>
                            <li><Link to="/team" onClick={() => { setShowMediaIcons(false) }}>Our Team</Link></li>
                            <li><Link to="/contact" onClick={() => { setShowMediaIcons(false) }}>Contact</Link></li>
                            <li><Link to="/studentcenter" onClick={() => { setShowMediaIcons(false) }}>Student Center</Link></li>
                            <li><Link to="/gallery" onClick={() => { setShowMediaIcons(false) }}>Gallery</Link></li>
                            <li><Link to="/registration" onClick={() => { setShowMediaIcons(false) }}>Registration</Link></li>
                            <Link to="/login">
                            <button id="contactBtn" onClick={() => { setShowMediaIcons(false) }}>Login</button>
                            </Link>
                        </ul>
                    </div>
                    <div id="hambar" onClick={() => { setShowMediaIcons(!showMediaIcons) }}>
                        <i className={!showMediaIcons ? "fa-solid fa-bars block" : "fa-solid fa-x"} style={!showMediaIcons ? { color: "black" } : { color: "white" }}></i>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation;