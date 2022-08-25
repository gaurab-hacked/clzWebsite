import React from 'react'
import { Link } from 'react-router-dom';


const AboutGnc = () => {
    return (
        <div style={{ height: "80vh", letterSpacing:"3px"}} className="text-center">
            <div className="container" style={{display: "flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <div className="h2" style={{marginTop:"100px"}}>About GNC</div>
                <p style={{width:"50%", textAlign:"justify", letterSpacing:"1px", marginTop:"20px"}}>Greenfield National College (GNC) was established in 2007 with the aim to add a new dimension in the higher education of Nepal as an affiliated college of Tribhuvan University. The college has been working to transplant an approach to deal with the higher education in the students. The approach is to relate the higher education closer to the lives of the people. The significance of education is counted when the skills and knowledge imparted to the students are applicable in daily lives.  <Link to="#">Learn more</Link></p>
            </div>
        </div>
    )
}

export default AboutGnc;
