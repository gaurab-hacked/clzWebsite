import "./css/StudentCenter.css";
import React from 'react'
import MsTeams from "../images/logo/msteam.png"
import MsAuth from "../images/logo/msauthmob.png"
import { Link } from "react-router-dom";

const StudentCenter = () => {
  return (
    <div id="StudentCenter">
        <div id="StudentCenterLeft">
            <img src={MsTeams} alt="msTeams" />
            <p>Microsoft Teams</p>
            <Link to=""><button><i className="fa-solid fa-desktop"></i>Get Desktop App</button></Link>
            <Link to=""><button><i className="fa-solid fa-mobile-screen"></i>Get Android App</button></Link>
        </div>

        <div id="StudentCenterRight">
            <img src={MsAuth} alt="msAuth" />
            <p>Microsoft Authenticator</p>
            <Link to=""><button><i className="fa-solid fa-mobile-screen"></i>Get Android App</button></Link>
        </div>
    </div>
  )
}

export default StudentCenter
