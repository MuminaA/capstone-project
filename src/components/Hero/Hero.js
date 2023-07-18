import React from "react";
import Himg from "../../assets/restauranfood.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="Hleft-side">
          <h1 className="res-name">Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-para">
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <button className="reserve-btn">Reserve a table</button>
          </div>
        </div>
        <div className="Hright-side">
          <img src={Himg} alt={Himg} className="hero-img"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
