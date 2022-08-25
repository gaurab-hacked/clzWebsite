import React from 'react'
import AboutGnc from './AboutGnc';
import Gallery from './Gallery';
import Imageslider from './Imageslider'
import Slider from "./Slider"

const Home = () => {
  return (
    <div>
      <Imageslider />
      <AboutGnc />
      <div id="messageslider">
        <Slider />
      </div>
      <Gallery />
    </div>
  )
}

export default Home;