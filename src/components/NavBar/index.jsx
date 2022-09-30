import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/" className='logo'>Ecommerce</Link></li>
                <li><Link to="/category/men's clothing">Men's clothing</Link></li>
                <li><Link to="/category/women's clothing">Women's clothing</Link></li>
                <li><Link to="/category/electronics">Electronics</Link></li>
                <li><Link to="/category/jewelery">Jewelery</Link></li>
                <div className='cart-widget'>
                <Link to="/cart"><CartWidget /></Link>
                </div>
            </ul>
        </div>
    )
}

export default NavBar;