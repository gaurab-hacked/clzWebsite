import "./css/StudentCenter.css";
import React, { useEffect } from 'react'
// import MsTeams from "../images/logo/msteam.png"
// import MsAuth from "../images/logo/msauthmob.png"


const StudentCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "GNC-StudentCenter"
  }, [])
  return (
    <></>
    // <div id="StudentCenter">
    //   <div id="StudentCenterLeft">
    //     <img src={MsTeams} alt="msTeams" />
    //     <p>Microsoft Teams</p>
    //     <a href="https://www.microsoft.com/en-ww/microsoft-teams/download-app" target="blank">
    //       <button><i className="fa-solid fa-desktop"></i>Get Desktop App</button>
    //     </a>
    //     <a href="https://play.google.com/store/apps/details?id=com.microsoft.teams&hl=en&gl=US" target="blank">
    //       <button><i className="fa-solid fa-mobile-screen"></i>Get Android App</button>
    //     </a>
    //   </div>

    //   <div id="StudentCenterRight">
    //     <img src={MsAuth} alt="msAuth" />
    //     <p>Microsoft Authenticator</p>
    //     <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en&gl=US" target="blank">
    //       <button><i className="fa-solid fa-mobile-screen"></i>Get Android App</button>
    //     </a>
    //   </div>
    // </div >
  )
}

export default StudentCenter
