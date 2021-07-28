import React from "react";
import "./Hero.css";
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";

const Hero = () => {
    return (
        <section id='site-hero'>
            <div className='site-hero-wrapper'>
                <div className='more-details'>
                    <h1>Shop at Luxury.io</h1>
                    <p>
                        Get authentic and high quality luxurois products
                        worldwide. We ship to all major cities across europe
                        asian and africa. Shop with us to today
                    </p>
                </div>
                <div className='site-hero-img'>
                    <img src={hero1} alt='' className='img1' />
                    <img src={hero2} alt='' className='img2' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
