import React, { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import "./CartItem.css";
import { formatPrice } from "../../utils";

const CartItem = ({ item }) => {
    const { incProduct, decProduct, reduceCart, decToZero } = useContext(
        DataContext
    );
    return (
        <div className='cart-item'>
            <div className='wrapper'>
                <div className='img'>
                    <img src={item.image} alt='lia' />
                </div>
                <div className='details'>
                    <h3>{item.name}</h3>
                    <div>
                        <p>qty: {item.qty}</p>
                        <p>price: {formatPrice(item.price)}</p>
                        <p>total: {formatPrice(item.qty * item.price)}</p>
                    </div>
                </div>
                <div className='controls'>
                    <div className='btns'>
                        <div className='inc-dec'>
                            <button
                                onClick={() => {
                                    incProduct(item.id);
                                }}
                            >
                                +
                            </button>
                            <button
                                onClick={() => {
                                    decProduct(item.id);
                                }}
                            >
                                -
                            </button>
                        </div>
                        <div className='remove'>
                            <button
                                onClick={() => {
                                    decToZero(item.id);
                                    reduceCart(item.id);
                                }}
                            >
                                x
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
