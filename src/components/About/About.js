import React from "react";
import img1 from "../../assets/MarioandAdrianA.jpg";
import img2 from "../../assets/MarioandAdrianb.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-item">
          <h1 className="res-name">Little Lemon</h1>
          <h2 className="res-location">Chicago</h2>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id="about-img">
          <img src={img2} alt={img2} className="about-img2"></img>
          <img src={img1} alt={img1} className="about-img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
