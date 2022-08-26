import "./Team.css";
import React, { useEffect } from 'react'

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "GNC-Team"
  }, [])
  return (<div id="TeamSection">
    <h1>Our Teacher's</h1><hr />
    <h1>Faculty Member</h1><hr />
    <h1>Management Team</h1> <hr />
  </div>
  )
}

export default Team;