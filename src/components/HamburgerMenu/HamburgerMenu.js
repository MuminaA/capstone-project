import React from 'react'
import { Link } from "react-router-dom";
import './HamburgerMenu.css';

function HamburgerMenu() {

  return (
    <div className='menu-container'>
      <ul className="ham-nav-links">
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
  )
}

export default HamburgerMenu
