import React from 'react'
import "./Aboutgnc.css"
import { Link } from 'react-router-dom';

const AboutGnc = () => {
    return (
        <div id="AboutGnc" className="text-center">
            <div className="aboutcontainer">
                <div className="h2">About GNC</div>
                <p>Greenfield National College (GNC) was established in 2007 with the aim to add a new dimension in the higher education of Nepal as an affiliated college of Tribhuvan University. The college has been working to transplant an approach to deal with the higher education in the students. The approach is to relate the higher education closer to the lives of the people. The significance of education is counted when the skills and knowledge imparted to the students are applicable in daily lives.  <Link to="/">Learn more</Link></p>
            </div>
        </div>
    )
}

export default AboutGnc;
