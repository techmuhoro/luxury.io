import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import "./CartItem2.css";

const CartItem2 = ({ item }) => {
    const { incProduct, decProduct, decToZero, reduceCart } = useContext(
        DataContext
    );
    return (
        <div className='cart-item2'>
            <div className='cart-item2-wrapper'>
                <div className='item-product'>
                    <img
                        src={item.image}
                        alt='bluefex coat'
                        height='50px'
                        width='70px'
                    />
                    <div className='item-product-details'>
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>
                            price: ${item.price}.<small>00</small>
                        </p>
                        <p
                            className='product-remove'
                            onClick={() => {
                                decToZero(item.id);
                                reduceCart(item.id);
                            }}
                        >
                            remove
                        </p>
                    </div>
                </div>

                <div className='item-qty'>
                    <p>{item.qty}</p>
                    <div className='controls'>
                        <span
                            onClick={() => {
                                incProduct(item.id);
                            }}
                        >
                            <i className='fas fa-chevron-circle-up'></i>
                        </span>
                        <span
                            onClick={() => {
                                decProduct(item.id);
                            }}
                        >
                            <i className='fas fa-chevron-circle-down'></i>
                        </span>
                    </div>
                </div>
                <div className='item-subtotal'>
                    <p>
                        ${Number(item.qty) * Number(item.price)}.
                        <small>00</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartItem2;
