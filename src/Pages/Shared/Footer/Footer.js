import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "../SharedStyle/SharedStyle.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="footer-first-part">
        <div className="footer-img-container">
          <img src={logo} alt={logo} />
        </div>
        <div className="footer-link-group-1">
          <Link to="/">About online food</Link>
          <Link to="/">Read our blog</Link>
          <Link to="/">Sign up to deliver</Link>
          <Link to="/">Add your restaurant</Link>
        </div>
        <div className="footer-link-group-2">
          <Link to="/">Get help</Link>
          <Link to="/">Read FAQ's</Link>
          <Link to="/">View all cities</Link>
          <Link to="/">Restaurants near me</Link>
        </div>
      </div>
      <div className="footer-second-part">
        <div className="copyright-text">
          Copyright @ {new Date().getFullYear()} Hot Onion
        </div>
        <div className="footer-link-group-3">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Pricing</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
