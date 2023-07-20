import React from 'react';
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} className='' alt={Logo}></img>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><Link to='/order'>Order online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;