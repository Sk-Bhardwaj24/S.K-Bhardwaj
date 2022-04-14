import React from "react";
import footerImg from "./img/logolatest.png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      {/* <img src={footerImg} alt="" className="footer__img pointer" />

      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 saurabh Kumar Bhardwaj. All Rights Reserved.
      </span> */}

      {/* ********************************* */}
      {/* <div className="lRfdj"> */}
      <div className="bwSYJA">
        <a
          href="https://github.com/Sk-Bhardwaj24"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i class="fab fa-github git"></i>
        </a>
        <a
          href="www.linkedin.com/in/saurabh-kumar-bhardwaj"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin git"></i>
        </a>
        <a
          href="https://twitter.com/Saurabh64461803"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter-square git"></i>
        </a>
        <a
          href="https://www.instagram.com/s.k_bhardwaj24"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram-square git"></i>
        </a>
      </div>
      <div className="kyvWZW"></div>
      <div></div>
      {/* </div> */}

      {/* ******************************************* */}
    </div>
  );
}

export default Footer;
