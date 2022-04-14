import React from "react";
import "./Contact.css";
import contactImg from "./img/quater-spin.svg";
// import PhoneIcon from "@mui/icons-material/Phone";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>

              <p className="hire__text white">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>

                <strong>&nbsp;&nbsp; +91 8210673961 </strong>
              </p>
              <br />
              <p className="hire__text white">
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>

                <strong> &nbsp;&nbsp; me24.saurabhkumar@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <div className="jKLUHq">
            <img src={contactImg} alt="allo" />
            <img src={contactImg} alt="" />
            <img src={contactImg} alt="" />
            <img src={contactImg} alt="" />
          </div>
        </div>
        {/* <img src={contactImg} alt="" className="contact__img" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
