import React from "react";
import "./Heading.css";

export default function Heading({ text, bg }) {
    return (
        <div className='custom-heading'>
            <h1>{text}</h1>
        </div>
    );
}
