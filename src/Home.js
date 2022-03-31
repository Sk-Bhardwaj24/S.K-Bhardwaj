import React, { useState } from "react";
import "./Home.css";
import "./Home1.css";
import logo from "./img/logolatest.png";
import sau from "./img/saurabh2.png";

import Typed from "react-typed";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  // fixed Header
  // console.log(Typewriter);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const handlenavbar = () => {
    setShow(false);
  };
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg1">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">
                  {/* <i class="fa fa-home nc"></i> */}
                  <i class="fa-solid fa-house-user nc"></i>
                  Home
                </li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">
                  <i class="fa-solid fa-address-card nc"></i>
                  About
                </li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">
                  <i class="fa-solid fa-laptop-code nc"></i>
                  Skills
                </li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15 ">
                  <i class="fa-solid fa-diagram-project nc"></i>Projects
                </li>
              </a>

              <a href="#Contact">
                <li className="nav__items mx__15">
                  <i class="fa-solid fa-address-book nc"></i>
                  Contact
                </li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <br />
                <h1 class="close" onClick={handlenavbar}>
                  +
                </h1>
                <li className="sideNavbar">
                  <a href="#Home" onClick={handlenavbar}>
                    {" "}
                    <i class="fa-solid fa-house-user nc"></i>
                    Home
                  </a>
                </li>

                <a href="#About" onClick={handlenavbar}>
                  {" "}
                  <li className="sideNavbar">
                    {" "}
                    <i class="fa-solid fa-address-card nc"></i>About
                  </li>
                </a>
                <a href="#Services" onClick={handlenavbar}>
                  {" "}
                  <li className="sideNavbar">
                    {" "}
                    <i class="fa-solid fa-laptop-code nc"></i>Skills
                  </li>
                </a>
                <a href="#Portfolio" onClick={handlenavbar}>
                  {" "}
                  <li className="sideNavbar">
                    <i class="fa-solid fa-diagram-project nc"></i>Projects
                  </li>
                </a>

                <a href="#Contact" onClick={handlenavbar}>
                  {" "}
                  <li className="sideNavbar">
                    <i class="fa fa-address-book nc1" aria-hidden="true"></i>
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="lRfdj">
          <div className="bwSYJA">
            <a href="https://github.com/Sk-Bhardwaj24">
              {" "}
              <i class="fab fa-github git"></i>
            </a>
            <a href="www.linkedin.com/in/saurabh-kumar-bhardwaj">
              <i class="fa-brands fa-linkedin git"></i>
            </a>
            <a href="https://twitter.com/Saurabh64461803">
              <i class="fa-brands fa-twitter-square git"></i>
            </a>
            <a href="https://www.instagram.com/s.k_bhardwaj24">
              <i class="fa-brands fa-instagram-square git"></i>
            </a>
          </div>
          <div className="kyvWZW"></div>
          <div></div>
        </div>

        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta mm">
              <div>
                <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
                <h2 className="home__text pz__10"> Hi, I’m</h2>
                <h2 className="home__text pz__10">Saurabh Kumar Bhardwaj</h2>
                <div>
                  <h2 className="home__text pz__10 hst">
                    {" "}
                    <Typed
                      strings={[
                        "I'm Full Stack Developer",
                        "based in India.",
                        "I build things for web...",
                      ]}
                      typeSpeed={120}
                      backSpeed={80}
                      cursorChar={"!"}
                      loop
                      showCursor
                    />
                  </h2>
                </div>
                {/* <h3 className="home__text sweet pz__10">
                  Full Stack Developer.
                </h3>
                <h4 className="home__text pz__10">based in India.</h4>
                <h4 className="home__text pz__10">I build things for web..</h4> */}
              </div>
              <div>
                <img src={sau} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
