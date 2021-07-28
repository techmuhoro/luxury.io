import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";
import "./Card.css";

const Card = ({ name, price, image, id }) => {
    const { addToCart } = useContext(DataContext);
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={image} alt='Product image' />
            </div>
            <div className='card-body'>
                <h1>{name}</h1>
                <p>{price}</p>
                <Link to={`/sp/${id}`} className='view-more'>
                    <p>View more</p>
                </Link>
                <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Card;
