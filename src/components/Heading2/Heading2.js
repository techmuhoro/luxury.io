import React from "react";
import { Link } from "react-router-dom";
import "./Heading2.css";

const Heading2 = ({ text, bg }) => {
    return (
        <div className='heading2' style={{ backgroundColor: `rgba(${bg})` }}>
            <h1>{text}</h1>
            <Link to='/ro' className='heading2-link'>
                See all
            </Link>
        </div>
    );
};

export default Heading2;
