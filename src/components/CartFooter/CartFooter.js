import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";
import "./CartFooter.css";

const CartFooter = () => {
    const { cartTotal, clearCart, cart } = useContext(DataContext);
    const styles = {
        visibility: cart.length >= 1 ? "visible" : "hidden",
    };
    return (
        <div className='cart-footer' style={styles}>
            <div className='cart-footer-wrapper'>
                <p className='cart-footer-total'>Total</p>
                <p className='cart-footer-amount'>${cartTotal}.00</p>
                <p className='cart-footer-clear-all' onClick={clearCart}>
                    x clear all items
                </p>
                <button className='cart-footer-btn-shop btn'>
                    <Link to='/'>Shop more</Link>
                </button>
                <button className='cart-footer-btn-checkout btn'>
                    <Link to='/co'>Procced checkout</Link>
                </button>
            </div>
        </div>
    );
};

export default CartFooter;
