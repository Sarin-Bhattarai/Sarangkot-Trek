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
          <FaFacebookF className="i facebook" />
          <FaInstagram className="i instagram" />
          <FaTwitter className="i twitter" />
        </div>
      </div>
    </header>
  );
};

export default Up;
