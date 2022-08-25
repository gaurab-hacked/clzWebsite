import React from 'react'
import img1 from '../../images/insta/img_1.jpg'
import "./AboutContent.css"


const AboutContent = () => {
  return (
    <div id='AboutContent' className='container'>
        <div id="AboutRightBox">
            <p className='headPara'>About Greenfield National College (GNC)</p>
            <h1 className='aboutHeading'>Welcome to Greenfiled National College</h1>
            <p>Greenfield National College (GNC) was established in 2007 with the aim to add a new dimension in the higher education of Nepal as an affiliated college of Tribhuvan University. The college has been working to transplant an approach to deal with the higher education in the students. The approach is to relate the higher education closer to the lives of the people. The significance of education is counted when the skills and knowledge imparted to the students are applicable in daily lives.</p>
            <p>That is why we make our students learning from the society and from the people more than they learn from the curriculum and theories. Besides regular formal classes, students are exposed to the renowned scholars, artists, writers, entrepreneurs etc. and are facilitated to know the secrets of success. Similarly, the college offers non-credit courses on various project–based programs.</p>
            <p>GNC aims to become a center of higher education in all disciplines and to explore the knowledge for the advancement of the future society. It has been working to establish a strong foundation for the future organization. The vision, mission and goals as following have been deeply intertwined into each activity and the program of the college.</p>
        </div>
        <div id="AboutLeftBox">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default AboutContent
