import React from "react";
import restaurantImage from "../../../assets/restauranfood.jpg";
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="Hleft-side">
          <h1 className="res-name">Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-para">
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to='/booking' className="reserve-btn btn" aria-label="On Click">Reserve a table</Link>
        </div>
        <img src={restaurantImage} alt='Restaurant food' className="hero-img"></img>
      </div>
    </section>
  );
}

export default Hero;
