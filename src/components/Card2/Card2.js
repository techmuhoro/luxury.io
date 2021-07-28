import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";
import "./Card2.css";

const Card2 = ({ item }) => {
    const { addToCart, displayModal } = useContext(DataContext);
    return (
        <div className='card2'>
            <div className='card2-wrapper'>
                <Link to={`/sp/${item.id}`}>
                    <div className='card2-img'>
                        <img src={item.image} alt='' width='100px' />
                    </div>
                </Link>
                <div className='card2-body'>
                    <p>{item.name}</p>
                    <p>
                        ${item.price}.<span className='price-small'>00</span>
                    </p>
                    <button
                        className='add-cart'
                        onClick={e => {
                            addToCart(item.id);
                            displayModal();
                        }}
                    >
                        <span>
                            <i className='fas fa-shopping-cart'></i>
                        </span>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card2;
