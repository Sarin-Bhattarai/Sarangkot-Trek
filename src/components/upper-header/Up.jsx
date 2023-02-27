import React from "react";
import "./up.css";
import logo from "../../resources/images/logo.jpg";
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
          <p>Company Licence no 521/057</p>
          <p>mail@mountaintrekking.com.np</p>
        </div>
        <div className="second-div">
          <p>Telephone No: 061-6231</p>
          <p>Phone No: 9856011220</p>
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
