import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/electronic">Electronic</Link>
                <Link to="/fashion">Fashion</Link>
            </div>
            <div className="shopping-cart links">
                <Link to="/cart">
                    <ShoppingCart size={32} className='cart-icon' />
                </Link>
            </div>
        </div>
    )
};