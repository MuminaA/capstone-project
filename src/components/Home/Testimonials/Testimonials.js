import React from "react";
import { testimonials } from "../../../Data/Data";
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h1 className="test-header">Testimonials</h1>
        <div className="test-container">
          {testimonials.map((item) => (
            <div className="test-content">
              <>{item.rating}</>
              <div className="test-info">
                <img src={item.image} alt={item.image} className="test-img"></img>
                <span className="test-name">{item.name}</span>
              </div>
              <p className="tes-para">{item.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
