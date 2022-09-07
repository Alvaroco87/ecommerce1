import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a href="#home" className='logo'>Ecommerce</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <CartWidget />
            </ul>
        </div>
    )
}

export default NavBar;