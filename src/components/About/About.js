import React from 'react'
import AboutContent from './AboutContent'
import AboutMission from './AboutMission'

const About = () => {
  return (
    <div>
      <AboutContent/>
      <hr style={{boxShadow:"0 -3px 5px 1px black"}}/>
      <AboutMission/>
    </div>
  )
}

export default About
