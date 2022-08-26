import React from 'react'
import "./css/Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div id="footer" style={{ background: "rgb(0, 0, 0, .8)", color: "rgb(255, 255, 255, 0.8)" }}>
      <footer className="text-center">
        <section className="d-flex justify-content-center container justify-content-lg-between p-4 my-5 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>greenfieldnational@gmail.com</span>
          </div>
          <div>
            <div className="socialMedia">
              <a href="https://www.facebook.com/greenfieldcollegenepal" target="blank">
                <i className="fa-brands fa-facebook-f mx-4"></i>
              </a>
              <a href="https://twitter.com/" target="blank">
                <i className="fa-brands fa-twitter mx-4"></i>
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <i className="fa-brands fa-instagram mx-4"></i>
              </a>
              <a href="https://www.facebook.com/messages/t/1866373626778452" target="blank">
                <i className="fa-solid fa-message mx-4"></i>
              </a>
            </div>
          </div>
        </section>
        <section className='my-5'>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <p className='h3'>”Dare To Dream”</p>
                </h6>
                <p className='h6'>
                  GREENFIELD NATIONAL COLLEGE
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  ACADAMIC PROGRAMS
                </h6>
                <p>
                  <Link to="/courses" className="text-reset">MBS</Link>
                </p>
                <p>
                  <Link to="/courses" className="text-reset">BBS</Link>
                </p>
                <p>
                  <Link to="/courses" className="text-reset">BBM</Link>
                </p>
                <p>
                  <Link to="/courses" className="text-reset">BCA</Link>
                </p>
                <p>
                  <Link to="/courses" className="text-reset">BA/BSW</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-grayish"></i>Bafal, Chetana Marg, Kathmandu, Nepal</p>
                <p>
                  <i className="fas fa-envelope me-3 text-grayish"></i>
                  www.greenfield.edu.np

                </p>
                <p><i className="fas fa-phone me-3 text-grayish"></i> 01-5237352, 01-5237317</p>
              </div>


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex align-items-center justify-content-center">
                <img src="" alt="" />
                <div style={{ border: "none", height: "200px", width: "300px" }}>
                  <iframe title='clzmap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6172.528055721134!2d85.283217!3d27.704456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56d62869f1ee2301!2sGreenfield%20National%20College!5e1!3m2!1sen!2snp!4v1661407763341!5m2!1sen!2snp" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}>
          © 2021 Greenfield National College. All Rights Reserved. <br />
          Designed by I.O Technology Pvt.Ltd
        </div>
      </footer>
    </div>
  )
}

export default Footer;