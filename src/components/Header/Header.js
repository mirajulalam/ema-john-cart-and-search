import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;