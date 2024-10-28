import React from 'react';
import Img1 from './assets/images/logo.png';
import Img2 from './assets/images/img.png';
import Img3 from './assets/images/web.jpg';
import Img4 from './assets/images/service1.png';
import Img5 from './assets/images/service2.png';
import Img6 from './assets/images/service3.png';
import Img7 from './assets/images/service4.png';
import Img8 from './assets/images/service5.png';
import Img9 from './assets/images/service6.png';
import Img10 from './assets/images/why1.png';
import Img11 from './assets/images/why2.png';
import Img12 from './assets/images/why3.png';


function Home() {
  return (
    <>
    <div>
    {/* loader  */}
    {/* <div className="loader_bg">
      <div className="loader"><img src="images/loading.gif" alt="#" /></div>
    </div> */}
    {/* end loader */}
    {/* header */}
    <header>
      {/* header inner */}
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="index.html"><img src={Img1} alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"> About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service"> Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* end header inner */}
    {/* end header */}
  
    {/* banner */}
    <section className="banner_main">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-5">
            <div className="text-bg">
              <h1>Power ful<br /> Web Hosting</h1>
              <span>Landing Page 2019</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
              <a href="#">Get Started</a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-img">
              <figure><img src={Img2} /></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end banner */}
    {/* Hosting */}
    <div id className="hosting">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>What’s New In Web Hosting</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="web_hosting">
              <figure><img src={Img3} alt="#" /></figure>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Hosting */}
    {/* Services  */}
    <div id="service" className="Services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Best Services</h2>
              <p>Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad <br />
                teimpor sittem elit inuning ut sed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img4} alt="#" /></i>
              <h3> Shared Hosting</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img5} alt="#" /></i>
              <h3>Dedicated Hosting</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img6} alt="#" /></i>
              <h3>Domain Registration</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img7} alt="#" /></i>
              <h3>VPS Hosting</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img8} alt="#" /></i>
              <h3>Cloud Hosting</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Services-box">
              <i><img src={Img9} alt="#" /></i>
              <h3>Reseller Hosting</h3>
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <a className="read_more" href="#">Read More</a>
        </div>
      </div>
    </div>
    {/* end Servicess */}
    {/* why */}
    <div id="why" className="why">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Why you should choose </h2>
              <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div id="box_ho" className="why-box">
              <i><img src={Img10} alt="#" /></i>
              <h3>Powerful Features</h3>
              <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <a className="read_more bg" href="#">Read More</a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="why-box">
              <i><img src={Img11} alt="#" /></i>
              <h3>Totaly Optimised</h3>
              <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <a className="read_more bg" href="#">Read More</a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="why-box">
              <i><img src={Img12} alt="#" /></i>
              <h3>Worldwide Support</h3>
              <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <a className="read_more bg" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* end why */}
    {/* contact */}
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <form className="main_form">
              <div className="row">
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Name" type="text" name="Name" />
                </div>
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Email" type="text" name=" Email" />
                </div>
                <div className="col-sm-12">
                  <input className="contactus" placeholder="Phone" type="text" name="Phone" />
                </div>
                <div className="col-sm-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                </div>
                <div className="col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* end contact */}
    
     {/*  footer */}
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="cont">
              <h3>Contact now</h3>
              <span>Free Multipurpose Responsive Landing Page 2019</span>
              <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quissed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>© 2019 All Rights Reserved. <a href="https://html.design/">Free html Templates</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
  
      </>
  )
}

export default Home