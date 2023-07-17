import React from "react";
import Logo from "../../assets/Flogo.png";

function Footer() {
  return (
    <footer>
      <img src={Logo}></img>
      <div>
        <div>
          <h2>Doormat Navigation</h2>
          <ul>
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
          <h2>Contact</h2>
          <ul>
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
          <h2>Social Media Links</h2>
          <ul>
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
    </footer>
  );
}

export default Footer;
