import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>Luxury.io</h1>
            </div>
            <div className='left'>
                <ul>
                    <Link to='/all_products'>
                        <li>All products</li>
                    </Link>
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
