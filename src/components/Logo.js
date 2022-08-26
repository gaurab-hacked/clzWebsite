import React from 'react'
import ClzLogo from '../images/logo.png'

const Logo = () => {
    const logoclicked = ()=>{
        document.title = "Greenfield National College"
    }
  return (
    <div>
      <img src={ClzLogo} alt="" onClick={logoclicked} />
    </div>
  )
}

export default Logo
