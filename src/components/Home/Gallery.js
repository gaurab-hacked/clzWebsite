import React from 'react'
import "./Gallery.css"
import img1 from '../../images/insta/img_1.jpg'
import img2 from '../../images/insta/img_2.jpg'
import img3 from '../../images/insta/img_3.jpg'
import img4 from '../../images/insta/img_bbs.jpg'

const Gallery = () => {
  return (
    <div id='gallery'>
        <div id="Gallerytitle">
            <p>gallery</p>
        </div>
        <div id="galleryImgs">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img3} alt="img1" />
            <img src={img4} alt="img1" />
        </div>
    </div>
  )
}

export default Gallery