import React from "react";
import "./up.css";
import logo from "../../resources/images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Up = () => {
  return (
    <header className="up-header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        id="tt-tt"
      >
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="first-div">
          <p>Company Licence no 610405899</p>
          <p>harry884839@gmail.com</p>
        </div>
        <div className="second-div">
          <p>Telephone No: 061-453900</p>
          <p>Phone No: +977-9846056804</p>
        </div>
        <div className="socialIcon">
          <a
            href="https://www.facebook.com/profile.php?id=100088485020931"
            target="next"
          >
            <FaFacebookF className="i facebook" />
          </a>
          <a href="https://www.instagram.com/sarangkottreks/" target="next">
            <FaInstagram className="i instagram" />
          </a>
          <a href="https://twitter.com/SarangkotTrek" target="next">
            <FaTwitter className="i twitter" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Up;
