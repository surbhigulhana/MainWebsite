import React, { useState, useRef } from "react";
import "../../css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import Helmet from "react-helmet";
import $ from "jquery";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import axios from "axios";
import po from '../../../images/popup.PNG'

const { REACT_APP_API_ENDPOINT } = process.env;

const Job = () => {
 
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
  const selectedFile = useRef();
  const [NameP, setNameP] = useState("");
  const [PhoneP, setPhoneP] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [Resume, setResume] = useState("");
  const [show, setShow] = useState(true);

  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.
  
    const url = 'https://www.omkatech.com/career.php';
  
    const formData = new FormData();
    formData.append("Name", NameP);
    formData.append("Email", EmailP);
    formData.append("Phone", PhoneP);

    formData.append("Resume", selectedFile.current.files[0]);
  
    // Log the formData before making the request
    console.log(formData);
  
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
        setEmailP("");
        setPhoneP("");
        setResume("");
  };
  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        <title>Web Design & Development Company in Noida</title>
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
        id="bottomNavbar"
        class="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          class="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            src={Flogo}
            style={{ height: "40px", marginLeft: "-20px" }}
            alt="Omka Tech logo"
            id="hidelogo1"
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
              <img
                src={Flogo}
                style={{
                  height: "55px",
                  marginTop: "10px",
                  marginLeft: "-40px",
                }}
                id="hidelogo"
                alt="Omka Tech logo"
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
                class="nav-link dropdown-toggle active"
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
                  class="dropdown-item active"
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
                  class="dropdown-item "
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
              class="nav-item nav-link"
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
                style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
              >
                Get Quote
              </button>
            </a>

          </div>
        </div>
      </nav>
      <div
        class="container-fluid page-header py-5 mb-5 fadeIn "
        id="careerBanner"
      >
        <h1 id="ahblog">
          CAREERS
          <hr id="ahr" />
        </h1>
        <br />
        <h2 id="cmsa">
          Unlock Your Potential, Achieve Your
          <br /> Dreams : Build a Rewarding Career.
        </h2>
      </div>
      <br />

      <br />
      
      {/* job list*/}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 className="text-light" id="careerh1">
                  Business Development Executive (On- Site)
                </h2>
              </div>
              <h4 className="" id="skillshead">
                Role Description:
              </h4>

<p style={{padding:"10px",margin:"20px"}}>This is a full-time on-site role for a Business Development Executive. The Business Development Executive will be responsible for new business development and effective business communication, establishing and maintaining a strong network of client relationships, creating and developing sales strategies, and collaborating with other teams to drive growth and achieve sales targets.</p>
<h4 className="" id="skillshead">
Job Description :
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Must be conversant with the ITbusiness development process including initiating calls, understanding requirements, proposals, price negotiation, deal closure, contract, etc.
                </li>
                <li>
                  ➜ Candidates should have prior experience acquiring projects related to e-commerce, websites, mobile applications (iOS & Android),SEO etc.
                </li>
                <li>➜ Making the presentation/proposals to the clients, negotiating rates, and following up till the closure.</li>
                <li>➜ Interacting and maintaining good relationships with new and existing clients and generating business from both.
                </li>
              </ul>
              <h4 className="" id="skillshead">
                Required Candidate profile:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ 1yr+ of relevant experience.
                </li>
                <li>
                  ➜ Bachelor's degree or relevant experience.
                </li>
                <li>➜ Candidate must be an open learner and possess good IT sales knowledge.</li>
                <li>➜ Excellent English communication skills are required.</li>
                <li>➜ Ability to approach any situation with patience and very strong empathy.</li>
                <li>➜ Must be a team player with the ability to work independently, prioritize tasks, and meet targets/deadlines.</li>
              </ul>
              <br />




              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: 01 | Experience: 1+ year</h5>
                <br />
                <button
                  class="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* job list*/}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 className="text-light" id="careerh1">
                  Wordpress Developer (On- Site)
                </h2>
              </div>
              <h4 className="" id="skillshead">
                Job Description:
              </h4>


              <ul id="skillUl">
                <li>
                  ➜ Create attractive, user friendly websites using Wordpress
                </li>
                <li>
                  ➜ Meet the design and functionality specifications by the client.
                </li>
                <li>➜ Generating Wordpress themes and plugins
                  .</li>
                <li>➜ Conduct website performance tests
                </li>
                <li> ➜ Work on custom built websites, implementation of plugins</li>
                <li> ➜ Should know how to use templates and customize them.</li>
                <li> ➜ Excellent problem-solving skills and attention to details provided by the client.</li>
                <li> ➜ Ability to work collaboratively in a team environment</li>
              </ul>
              <h4 className="" id="skillshead">
                Required Candidate profile:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Bachelor’s degree in computer science or similar field..
                </li>
                <li>
                  ➜ 1.5+ year of experience as a wordpress developer.
                </li>
                <li>➜ Knowledge of front end technologies including CSS, Javascript, HTML, jQuery.</li>
                <li>➜ Knowledge of code versioning tools like Git.</li>
                <li>➜ Experience working with debugging tools like Chrome Inspector and Firebug</li>
                <li>➜ Experience in other web development frameworks and platforms is a plus</li>
              </ul>
              <br />




              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: 02 | Experience: 1.5+ year</h5>
                <br />
                <button
                  class="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
              <br /><br />
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
                      <div class="brand-titleB">Apply Now!!</div>
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
                        <label id="Booklabel">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                        </label>{" "}
                        :&nbsp;&nbsp;
                        <input
                          type="email"
                          placeholder="Enter Email"
                          id="inputBook"
                          value={EmailP}
                          onChange={(e) => {
                            setEmailP(e.target.value);
                          }}
                          required
                        />{" "}
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
                        <label id="Booklabel">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resume
                        </label>{" "}
                        :&nbsp;
                        <input
                          type="file"
                          placeholder="Enter Project Details"
                          id="inputBook"
                          value={Resume}
                          ref={selectedFile}
                          name="Project"
                          onChange={(e) => {
                            setResume(e.target.value);
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
      <br />
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />

      {/* get in touch */}
      <GetInTounch />
    </div>
  );
};

export default Job;
