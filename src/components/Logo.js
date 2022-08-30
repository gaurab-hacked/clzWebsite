import React from 'react'
import ClzLogo from '../images/logo.png'
import './css/Navigation.css'


const Logo = () => {
    const logoclicked = ()=>{
        document.title = "Greenfield National College"
    }
  return (
    <div id="LogoID">
      <img src={ClzLogo} alt="" onClick={logoclicked}/>
    </div>
  )
}

export default Logo
