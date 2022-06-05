import React from "react";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact us</h2>
          <div className="licon">
            {" "}
            {/* <LocationOnOutlinedIcon /> &nbsp;&nbsp;&nbsp;*/}
            IIT Kharagpur, West Bengal
          </div>
          <div className="eicon">
            {" "}
            {/* <EmailOutlinedIcon className="eicon" /> */}
            kodeinkgp@gmail.com
          </div>
          <div className="picon">
            {/* <LocalPhoneOutlinedIcon /> &nbsp;&nbsp;*/} +91 8879555132
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form
            className="contact"
            action="https://formspree.io/f/xgeddnyb"
            method="POST"
          >
            <input
              type="text"
              name="name"
              className="text-box"
              placeholder="Your Name"
              required="true"
            />
            <input
              type="email"
              name="email"
              className="text-box"
              placeholder="Your Email"
              required="true"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <input
              type="submit"
              name="submit"
              className="send-btn"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
