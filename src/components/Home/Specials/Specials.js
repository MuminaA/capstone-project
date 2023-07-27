import React from "react";
import {food} from "../../../Data/Data";
import Delivery from '../../../assets/delivery.png';
import './Specials.css';
import { Link } from "react-router-dom";

const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-container">
        <div className="top">
          <h1>This weeks specials!</h1>
          <>
            <Link to='/capstone-project/menu' className="specials-btn btn" aria-label="On Click">Online Menu</Link>
          </>
        </div>
        <div className="bottom">
          {food.map((item) => (
            <div key={item.id} className="item-container">
              <img src={item.image} alt={item.image}  className="specials-img" />
              <div className="items-detail">
                <div className="item-content">
                  <p className="specials-name">{item.name}</p>
                  <span className="price">$ {item.price.toFixed(2)}</span>
                </div>
                <p className="specials-desc">{item.desc}</p>
                <span className="delivery-link">Order delivery<img src={Delivery} alt={Delivery}></img></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specials;
