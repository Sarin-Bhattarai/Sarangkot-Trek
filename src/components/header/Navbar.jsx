import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList?.toggle("active", window.scrollY > 150);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          {/*  --------------nav--------------   */}
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/trekking">Trekking</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/ourTeam">Our Team</Link>
              </li>
              {/* <li>
                <Link to="/services">Social Services</Link>
              </li> */}
              <li>
                <Link to="/faq">Faqs</Link>
              </li>
              <li>
                <Link to="/others">Others</Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>
          <div>
            <button onClick={() => navigate("/contact")} className="trek-btn">
              Trek Now
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
