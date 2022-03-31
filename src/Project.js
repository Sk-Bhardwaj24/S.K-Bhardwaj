import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.png";
// import Project2 from "./img/portfolio-2.jpg";
// import Project3 from "./img/portfolio-3.jpg";
// import Project4 from "./img/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Right now working on real world Todo-app & hope it will come very
          soon.
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      {/* ******************************8 */}
      <div className="conatiner">
        <div className="prow">
          <div className="pcol3">
            <img src={Project1} alt="" />
          </div>
          <div className="pcol4">
            <h1>Clone of IndiaMart</h1>
            <p>
              IndiaMart website is an open source online B2B marketplace
              connecting numerous buyers with sellers across the globe.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="prl">
              <a href="https://github.com/Sk-Bhardwaj24/INDIA-MART/tree/Saurabh">
                <i class="fab fa-github git"></i>
              </a>
              <a href="https://sk-bhardwaj24.github.io/INDIA-MART/">
                <i class="fas fa-external-link-alt el"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ******************************************** */}
    </div>
  );
}

export default Project;
