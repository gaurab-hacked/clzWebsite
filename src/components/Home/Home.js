import React, { useEffect } from 'react'
import AboutGnc from './AboutGnc';
import Gallery from './Gallery';
// import HomeMain from './HomeMain';
import Imageslider from './Imageslider'
import Slider from "./Slider"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Greenfield National College"
  }, [])
  return (
    <div>
      <Imageslider />
      {/* <HomeMain/> */}
      <AboutGnc />
      <div id="messageslider">
        <Slider />
      </div>
      <Gallery />
    </div>
  )
}

export default Home;