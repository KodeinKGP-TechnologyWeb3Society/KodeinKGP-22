import React from "react";
import "../LandingPage/LandingPage.css";

const Navbar = () => {
  return (
    <>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon" />
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/QnA">Q/A Section</a>
          </li>
          <li>
            <a href="/OurTeam">Our Team</a>
          </li>
          <li>
            <a href="ContactUs">Contact Us</a>
          </li>
          <li>
            <a href="Hackathon">Hackathon</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
