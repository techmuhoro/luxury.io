import React from "react";
import Navbar from "../Navbar";
import "./Header.css";

export default function Header() {
    return (
        <section id='hero'>
            <Navbar />
            <div className='content'>
                <div className='left'>
                    <h1>Luxury Ecormmece Shop</h1>
                    <p>
                        Your one stop shop for trusted and authentic luxury
                        products from across all of europe
                    </p>
                    <div className='btns'>
                        <a href='#'>View products</a>
                        <a href='#'>Top Discounts</a>
                    </div>
                </div>
                <div className='right'>
                    <h1></h1>
                </div>
            </div>
        </section>
    );
}
