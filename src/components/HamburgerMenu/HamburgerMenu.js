import React from 'react'
import { Link } from "react-router-dom";
import './HamburgerMenu.css';

function HamburgerMenu() {

  return (
    <div className='menu-container'>
      <ul className="ham-nav-links">
          <li>
            <Link to="/capstone-project">Home</Link>
          </li>
          <li>
            <Link to="/capstone-project/about">About</Link>
          </li>
          <li>
            <Link to="/capstone-project/menu">Menu</Link>
          </li>
          <li>
            <Link to="/capstone-project/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/capstone-project/order">Order online</Link>
          </li>
          <li>
            <Link to="/capstone-project/login">Login</Link>
          </li>
        </ul>
    </div>
  )
}

export default HamburgerMenu
