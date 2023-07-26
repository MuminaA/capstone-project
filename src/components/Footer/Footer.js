import React from "react";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt={Logo} className="footer-logo"></img>
        <div className="link-section">
          <div>
            <h2 className="footer-header">Doormat Navigation</h2>
            <ul className="footer-links">
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
            </ul>
          </div>
          <div>
            <h2  className="footer-header">Contact</h2>
            <ul className="footer-links">
              <li>
                <a href="/">Address</a>
              </li>
              <li>
                <a href="/">Phone Number</a>
              </li>
              <li>
                <a href="/">email</a>
              </li>
            </ul>
          </div>
          <div>
            <h2  className="footer-header">Social Media Links</h2>
            <ul className="footer-links">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Tiktok</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
