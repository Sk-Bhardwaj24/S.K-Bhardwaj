import React from "react";
import "./About.css";
import aboutImg from "./img/developer.gif";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta about_meta1">
              <p className="about__text p__color">
                Hello! My name is Saurabh Kumar Bhardwaj and I enjoy creating
                things that live on the internet. My interest in web development
                started back last year when I was trying to built website for
                electrical department of my college —that taught me a lot about
                HTML & CSS and motivated me to learn further.
              </p>
              <p className="about__text p__color">
                Fast Forwarding to today, I built a number of web applications
                and 2 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a full stack
                web developer.
              </p>

              <div className="about__button d__flexa align__items__center">
                <a
                  href="https://drive.google.com/file/d/1BT8xw8BV1gv6GYtRfLfI6oLhm_bTDX_p/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-download"></i>
                  <button className="about btn pointer">Resume</button>
                </a>
                {/* <a href="#Contact">
                  <button className="about btn pointer1">Hire Me</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
