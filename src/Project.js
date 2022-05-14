import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.png";

import Project2 from "./img/Project2.png";
// import Project2 from "./img/portfolio-2.jpg";
// import Project3 from "./img/portfolio-3.jpg";
// import Project4 from "./img/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        {/* <p className="heading p__color">
          Right now working on real world Todo-app & hope it will come very
          soon.
        </p> */}
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
              <a
                href="https://github.com/Sk-Bhardwaj24/INDIA-MART/tree/Saurabh"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github git"></i>
              </a>
              <a
                href="https://sk-bhardwaj24.github.io/INDIA-MART/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-external-link-alt el"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ************************************************************ */}
        <div className="prow">
          <div className="pcol3">
            <img src={Project2} alt="" />
          </div>
          <div className="pcol4">
            <h1>Clone of Medium</h1>
            <p>
              Medium is an American online publishing platform developed by Evan
              Williams. The platform is an example of social journalism, having
              a hybrid collection of amateur and professional people and
              publications, or exclusive blogs or publishers on Medium, and is
              regularly regarded as a blog host.
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node.js</li>
            </ul>
            <div className="prl">
              <a
                href="https://github.com/Sk-Bhardwaj24/Medium_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github git"></i>
              </a>
              <a
                href="https://sk-bhardwaj-medium-clone.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-external-link-alt el"></i>
              </a>
            </div>
          </div>
        </div>
        {/* ************************************************ */}
      </div>

      {/* ******************************************** */}
    </div>
  );
}

export default Project;
