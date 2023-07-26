import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav role="navigation">
        <img src={Logo} className="" alt={Logo}></img>
        <button className="hamburger-menu" onClick={() => setOpen(!open)}>
          <MenuRoundedIcon sx={{ fontSize: 35 }} />
        </button>
        {open ? <HamburgerMenu /> : ''}
        <ul className="nav-links">
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
      </nav>
    </header>
  );
};

export default Header;
