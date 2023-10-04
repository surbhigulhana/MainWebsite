import React, { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import a2 from "../../../images/portfolio/web/02.jfif";
import axios from "axios";
import $ from "jquery";
import Flogo from "../../../images/01 logo.png";
import i1 from "../../../images/portfolio/web/01.png";
import i2 from "../../../images/portfolio/web/02.png";
import i3 from "../../../images/portfolio/web/03.png";
import i4 from "../../../images/portfolio/web/04.png";
import i5 from "../../../images/portfolio/web/05.png";
import i6 from "../../../images/portfolio/web/06.png";
import i7 from "../../../images/portfolio/web/07.png";
import i8 from "../../../images/portfolio/web/08.png";
import i9 from "../../../images/portfolio/web/09.png";
import i10 from "../../../images/portfolio/web/10.png";
import i11 from "../../../images/portfolio/web/11.png";
import i12 from "../../../images/portfolio/web/12.png";
import i13 from "../../../images/portfolio/web/13.png";
import i14 from "../../../images/portfolio/web/14.png";
import i15 from "../../../images/portfolio/web/15.png";
import i16 from "../../../images/portfolio/web/16.png";
import i17 from "../../../images/portfolio/web/17.png";
import i18 from "../../../images/portfolio/web/18.png";
import i19 from "../../../images/portfolio/web/19.png";
import i20 from "../../../images/portfolio/web/20.png";
import i21 from "../../../images/portfolio/web/21.png";
import i22 from "../../../images/portfolio/web/22.png";
import i23 from "../../../images/portfolio/web/23.png";
import i24 from "../../../images/portfolio/web/24.png";
import Footer from "../Footer";
import po from '../../../images/popup.PNG'
import ContactForm from "../ContactForm";
import { Helmet } from "react-helmet";
import GetInTounch from "../GetInTounch";
import EmailForm from "../EmailForm";
const { REACT_APP_API_ENDPOINT } = process.env;

const HireDEv = () => {

// -----------------------------------------------------------------------------
// right side
const targetDivRef1 = useRef(null);
const handleScroll1 = () => {
 const targetDiv1 = targetDivRef1.current;
 if (targetDiv1 && isElementInViewport1(targetDiv1)) {
   targetDiv1.classList.add('ani2');
 }
};

const isElementInViewport1 = (el) => {
 const rect = el.getBoundingClientRect();
 return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

useEffect(() => {
 window.addEventListener('scroll', handleScroll1);
 return () => {
   window.removeEventListener('scroll', handleScroll1);
 };
}, [])




  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white class
      } else {
        $(".navbar").removeClass("bg-dark1");
        $(".navbar").removeClass("text-whitee"); // Remove text-white class
      }
    });

    $(".navbar-toggler").click(function () {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white class
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark1");
          $(".navbar").removeClass("text-whitee"); // Remove text-white class
        }
      }
    });
  });


  // JavaScript to handle the scrolling effect

let prevScrollPos = window.pageYOffset;
const topNavbar = document.getElementById("topNavbar");
const bottomNavbar = document.getElementById("bottomNavbar");

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        topNavbar.style.transform = "translateY(0)";
        topNavbar.style.opacity = "1";
    } else {
        topNavbar.style.transform = "translateY(-100%)";
        topNavbar.style.opacity = "0";
    }

    prevScrollPos = currentScrollPos;
};
 
  // popup
  const navigate = useNavigate();
  const [NameP, setNameP] = useState("");
  const [PhoneP, setPhoneP] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [ProjectP, setProjectP] = useState("");
  const [show, setShow] = useState(true);
  
 
  const submitNow1 = (e) => {
   
    e.preventDefault(); // Prevent the form from submitting the traditional way.
  
    const url = 'https://www.omkatech.com/Request.php';
  
    const formData = new FormData();
    formData.append("Name", NameP);
    formData.append("Email", EmailP);
    formData.append("Phone", PhoneP);
    formData.append("Message", ProjectP);
  
    // Log the formData before making the request
    console.log(formData);
    navigate("/Thankyou")
    
    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then((res) => {
            if (res.ok) {
             
                // Handle success, e.g., show a success message or redirect
            } else {
                // Handle errors, e.g., show an error message
            }
        })
        .catch((error) => {
            // Handle network or other errors
        });
  
        setNameP("");
        setEmailP("");
        setPhoneP("");
        setProjectP("");
      
  };




  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        <title>Hire Developer | Noida India</title>
        <meta
          name="description" data-react-helmet="true"
          content="We’re a website development company in Noida. Omka Tech offers SEO-friendly, mobile-responsive websites with 24/7 support. Open your online store with us."
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Website Design, Web design, Web Development Company, Website Development Company"
        />
      </Helmet>
      {/* navbar */}
      <nav
        id="topNavbar"
        class=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >
        <div class="container" >
         
        <div class="flag-container">
                            <img src='../india.png' class="flag-icon" alt ="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../us.png' class="flag-icon" alt ="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../canda.png' class="flag-icon" alt ="Canda"></img>
                        </div>
                    <div className="row" id="gsss" >

                        <div className="col-5"></div>
                        <div className="col-7">
                            <a href="tel:+1 (786)648-29107"> <img src='../c.jpg' id="flag" alt="canda"></img>&nbsp;+1(786) 648-2910</a>&nbsp; |&nbsp;&nbsp;
                            <a href="tel:+1 (437) 979-1504"><img src='../po.jpg' id="flag" alt="US"></img> &nbsp;+1 (437) 979-1504</a>&nbsp; |&nbsp;&nbsp;

                            <a href="tel:+91 9717511913"><img src='../in.jpg' id="flag" alt="india" ></img>&nbsp; +91 9717511913</a>
                        </div>

                    </div>
        </div>
      </nav>
      <nav
        class="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          class="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            alt="Omka Tech logo"
            src={Flogo}
            id="hidelogo1"
            style={{ height: "40px", marginLeft: "-20px" }}
          ></img>
        </a>
        <button
          type="button"
          class="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav me-auto p-3 p-lg-0" >
            <a
              href="/"
              style={{
                height: "56px",
                // marginTop: "4px",
                backgroundColor: "transparent",
                border: "none",
              }}
              rel="noopener noreferrer"
            >
              {" "}
              <img
                alt="Omka Tech logo"
                src={Flogo}
                style={{
                  height: "55px",
                  marginTop: "10px",
                  marginLeft: "-40px",
                }}
                id="hidelogo"
              ></img>
            </a>
            <a
              href="/"
              class="nav-item nav-link"
              id="homeleft"
              rel="noopener noreferrer"
            >
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <div class="nav-item dropdown">
              <a
                rel="noopener noreferrer"
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <div
                class="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/about-us"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Our Company
                </a>
                <a
                  href="/Careers"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
                {/* <a
                  href="/Main"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CaseStudy
                </a> */}
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                rel="noopener noreferrer"
              >
                Services
              </a>
              <div
                class="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/services/website-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Website Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/services/designing"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/social-media-marketing"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/enterprise-software-solution"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Enterprise Software Solution
                </a>
                <a
                  href="/services/e-commerce-web-apps"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  E-Commerce Web & Apps
                </a>
                <a
                  href="/services/cms-design-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CMS Design & Development
                </a>
                {/* <a href="/Services/ReadyMadeSolution" class="dropdown-item">
                  Ready Made Solution
                </a> */}
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <a
              href="/hire-resources"
              class="nav-item nav-link active"
              rel="noopener noreferrer"
            >
              Hire Resources
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="/blog" class="nav-item nav-link" rel="noopener noreferrer">
              Blog
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a
              href="/contact-us"
              style={{
                textDecoration: "none",
                color: "White",
                marginTop: "25px",
              }}
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="btn btn-primary rounded-pill"
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite" ,color:"white"}}
              >
                Get Quote
              </button>
            </a>
            
            
          </div>
        </div>
      </nav>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        id="HireBanner"
      >
        <h1 id="ah">
          HIRE REMOTE
          <br /> RESOURCES
          <hr id="ahr" />
        </h1>
      </div>
      <br />
      <EmailForm />
      <br />
      {/* {why choose Us */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="h-100">
                <h4 class="display-6 mb-4" style={{ textAlign: "left" }}>
                  Hire Expert Developers,
                  <span style={{ color: "#04165D" }} id="whoweare">
                    Don’t Just Outsource
                  </span>
                </h4>
                <p class="mb-4">
                  Hiring dedicated developers to work on your project can be
                  easier than you think, as OMKA TECH brings you a talented tool
                  of professionals with expertise in different technologies. All
                  you need to do is to get connected with us and share your
                  requirements and we will be there to help. We have a team of
                  100+ professionals with rich and variant skill sets in a wide
                  array of technologies that match the digital needs of
                  businesses. Till date, we have catered to diverse development
                  requirements of all sizes of businesses, from budding startups
                  to established enterprises.
                </p>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="img-border">
                <img class="img-fluid" ref={targetDivRef1} src={a2} alt="hire expert developers don’t just outsource" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 class="display-6 mb-4">
              Why Hire Developers{" "}
              <span style={{ color: "#04165D" }}> For Your Project?</span>
            </h2>
          </div>
          <div class="row g-4" style={{ lineHeight: "normal" }}>
            <p>
              A dedicated developer can help your business to embark on a
              digital transformation journey with a faster turnaround time and
              lesser cost. It is also a way where you will be able to have
              complete control over the work and security of the business data.
            </p>
          </div>
        </div>
      </div>
      {/* technology */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white text-primary" id="whoweare">
              Our Expertise
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              What Makes Us The Best Destination To Hire
              <span class="text-primary" id="whoweare">
                {" "}
                Full Stack Developers
              </span>
            </h2>
          </div>

          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <p>
                  We cater extensive expertise in a range of technologies to
                  help businesses build optimal solutions that overcome their
                  challenges and drive comprehensive growth.
                </p>
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i1} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Magento Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                   
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i2} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Magento 2 Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i3} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Java Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i4} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>PHP Developer</h5>
                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i5} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Laravel Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i6} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Codeigniter Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i8} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>CorePHP Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i7} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>MEAN Stack Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i9} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>MERN Stack Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i10} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>React JS Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i11} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>NodeJS Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i12} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Wordpress Developer</h5>
                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i13} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Shopify Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i14} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Project Manager</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i15} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Mobile App Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i16} alt="text" class="card-img-top" />

                    <br/><br/><div class="card-body">
                      <h5>Flutter Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i17} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>iOS Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i18} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Android Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i19} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Ecommerce Developer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i20} alt="text" class="card-img-top" />

                    <br/><br/><div class="card-body">
                      <h5>HTML Developer</h5>
                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i21} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Web Designer</h5>
                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i22} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>UI UX Designer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i23} alt="text" class="card-img-top" />
                    <br/><br/><div class="card-body">
                      <h5>Graphic Designer</h5>
                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num1">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={i24} alt="text" class="card-img-top" />

                    <br/><br/><div class="card-body">
                      <h5>Logo Designer</h5>

                      <button
                        class="btn btn-primary rounded-pill"
                        style={{ height: "35px" ,color:"white"}}
                        // id="contactWeb23"
                        data-target="#myModal"
                        role="button"
                        data-toggle="modal"
                      >
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popupform */}
      {show && (
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div
                  class="contact-page-form"
                  method="post"
                  style={{ marginTop: "-20px" }}
                >
                  <form onSubmit={submitNow1}>
                    <div class="containerB" style={{backgroundColor:"white"}}>
                      {" "}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                      <div class="brand-logoB"> <img src={po}></img></div>
                      <div class="brand-titleB">HIRE US!!</div>
                      <div class="inputsB">
                        <label id="Booklabel">Name</label> :&nbsp;
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          id="inputBook"
                          value={NameP}
                          onChange={(e) => {
                            setNameP(e.target.value);
                          }}
                          required
                        />{" "}
                        <label id="Booklabel">&nbsp;Email</label>{" "}
                        :&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="email"
                          placeholder="Enter Email"
                          id="inputBook"
                          value={EmailP}
                          onChange={(e) => {
                            setEmailP(e.target.value);
                          }}
                          required
                        />
                        <br />
                        <label id="Booklabel">Phone</label> :&nbsp;
                        <input
                          type="number"
                          placeholder="Enter Phone"
                          id="inputBook"
                          value={PhoneP}
                          onChange={(e) => {
                            setPhoneP(e.target.value);
                          }}
                          required
                        />
                        <label id="Booklabel">Project</label> :&nbsp;
                        <input
                          type="text"
                          placeholder="Enter Project Details"
                          id="inputBook"
                          value={ProjectP}
                          name="Project"
                          onChange={(e) => {
                            setProjectP(e.target.value);
                          }}
                          required
                        />
                        <button type="submit" id="bookNow" >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* integrity */}

      <div class="container" style={{ backgroundColor: "#04165D" }}>
        <div class="row">
          <div class="col-sm">
            <div id="workexperience" class="sectionClass">
              <div class="row ">
                <div class="fullWidth eight columns">
                  <ul class="cbp_tmtimeline">
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-phone">
                        <i class="faPra fa-briefcas">
                          <img
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon26.png"
                            alt="text"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Dedicated Skilled Resources</h3>

                        <p class="projectParagraph">
                          You have a dedicated team of skilled developers and
                          technical architects to work on your development
                          project
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="cbp_tmicon cbp_tmicon-mail">
                        <i class="faPra fa-briefcas">
                          <img
                            alt="undefined"
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon29.png
"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>High-Quality Development</h3>

                        <p class="projectParagraph">
                          Get access to multiple user stories, use cases & in
                          depth analysis for a thorough development of features
                          & functionalities throughout the project development.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-screen">
                        <i class="faPra fa-briefcse">
                          <img
                            alt="text"
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon32.png
"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Adherence To Deadlines</h3>

                        <p class="projectParagraph">
                          Assurance of adherence to deadlines, on time every
                          time, which translates into zero hassles regarding
                          project delivery.
                        </p>
                      </div>
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div id="workexperience" class="sectionClass">
              <div class="row ">
                <div class="fullWidth eight columns">
                  <ul class="cbp_tmtimeline">
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-phone">
                        <i class="faPra fa-briefcas">
                          <img
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon27.png"
                            alt="text"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Confidentiality And Security</h3>

                        <p class="projectParagraph">
                          Guaranteed confidentiality and security for your
                          project with strict non-disclosure agreements for
                          every client we work for..
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-screen">
                        <i class="faPra fa-briefcas">
                          <img
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon30.png"
                            alt="text"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>IP Protection</h3>

                        <p class="projectParagraph">
                          You are the sole owner of your IP and we prioritize
                          the IP protection for all our clients to match the
                          trust they have in us.
                        </p>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-mail">
                        <i class="faPra fa-briefse">
                          <img
                            alt="text"
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon33.png
"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Seamless User Experience</h3>

                        <p class="projectParagraph">
                          Build a seamless user experience for your software and
                          apps to add value to them and generate revenue for
                          your.
                        </p>
                      </div>
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div id="workexperience" class="sectionClass">
              <div class="row ">
                <div class="fullWidth eight columns">
                  <ul class="cbp_tmtimeline">
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-phone">
                        <i class="faPra fa-briefcas">
                          <img
                            alt="text"
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon28.png
"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Test First Approach</h3>

                        <p class="projectParagraph">
                          You have a dedicated team of skilled developers and
                          technical architects to work on your development
                          project
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-screen">
                        <i class="faPra fa-briefcae">
                          <img
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon31.png"
                            alt="text"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Articulated Documentation</h3>

                        <p class="projectParagraph">
                          Get access to multiple user stories, use cases & in
                          depth analysis for a thorough development of features
                          & functionalities throughout the project development.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cbp_tmicon cbp_tmicon-mail">
                        <i class="faPra fa-briefcse">
                          <img
                            src="https://www.orangemantra.com/wp-content/uploads/2021/09/icon34.png"
                            alt="text"
                          ></img>
                        </i>
                      </div>
                      <div class="cbp_tmlabel wow fadeInRight animated">
                        <h3>Single Coding Standard</h3>

                        <p class="projectParagraph">
                          Assurance of adherence to deadlines, on time every
                          time, which translates into zero hassles regarding
                          project delivery.
                        </p>
                      </div>
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />
      <GetInTounch />
    </div>
  );
};

export default HireDEv;
