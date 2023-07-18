import React from "react";
import Logo from "../../assets/Flogo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt={Logo} className="footer-logo"></img>
        <div className="link-section">
          <div>
            <h2 className="footer-header">Doormat Navigation</h2>
            <ul className="footer-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Reservations</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
          <div>
            <h2  className="footer-header">Contact</h2>
            <ul className="footer-links">
              <li>
                <a href="">Address</a>
              </li>
              <li>
                <a href="">Phone Number</a>
              </li>
              <li>
                <a href="">email</a>
              </li>
            </ul>
          </div>
          <div>
            <h2  className="footer-header">Social Media Links</h2>
            <ul className="footer-links">
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Tiktok</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
