import React from "react";
import "./footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import moment from "moment";
import { Link } from "react-router-dom";
import logo from "../../resources/images/footerlogo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div className="box">
            <img src={logo} alt="footerLogo" />
          </div>

          <div className="box">
            <div className="footer-info">
              <h2>ABOUT US</h2>
              <p>
                Sarangkot Treks is growing trekking agency served for managing
                your treks and tours outshining in providing services and to
                enchance your adventurous moment.
              </p>
            </div>
          </div>

          <div className="box">
            <h2>SUPPORT LINKS</h2>
            <ul>
              <li>
                <Link className="footer-links" to="/ourTeam">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/">
                  Harry Guest House
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/others">
                  Other Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              "CREATE YOUR ADVENTEROUS MOMENTS EXPLORING UNIDENTIFIED NATURE"
            </p>
            <div className="icon">
              <FaMapMarkerAlt className="ia" />
              <label>
                Location: Lakeside, 6 Pokhara, Nareswor (next to street no. 28)
              </label>
            </div>
            <div className="icon">
              <FaPhoneAlt className="ia" />
              <label>Phone: +977-9846056804</label>
            </div>
            <div className="icon">
              <RiKakaoTalkFill className="ia" />
              <label>Kakao Talk ID: hottelavocado</label>
            </div>
            <div className="icon">
              <FaEnvelope className="ia" />
              <label>Email: harry5847@yahoo.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @ {moment().year()} All rights reserved.</p>
          <label>
            <span
              style={{
                color: "#25B92B",
              }}
            >
              Design & Developed by
            </span>{" "}
            <span>Untech boys</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
