import React from 'react';
import Cover1 from '../../images/cover/cover_img_1.jpg';
import Cover2 from '../../images/cover/cover_img_2.jpg';
import Cover3 from '../../images/cover/cover_img_3.jpg';
import "./Imageslider.css"

const Imageslider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Cover1} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block"   >
            <h1>The Roots of Education are Bitter, But the Fruit is Sweet</h1>
            <br />
            <p >Greenfield National College</p>
            <p className='my-3'>"Dare To Dream"</p>
            <button className='btn btn-primary'  >PRE_REGISTATION!</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Cover2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block" >
            <h1>The Great Aim of Education is not Knowledge, But Action</h1>
            <br />
            <p  >Greenfield National College</p>
            <p className='my-3'>"Dare To Dream"</p>
            <button className='btn btn-primary'  >PRE_REGISTATION!</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Cover3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block"   >
            <h1>We Help You to Learn New Things</h1>
            <br />
            <p  >Greenfield National College</p>
            <p className='my-3'>"Dare To Dream"</p>
            <button className='btn btn-primary'  >PRE_REGISTATION!</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Imageslider;