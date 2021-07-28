import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";
import { formatPrice } from "../../utils";
import "./CartTotal.css";

const CartTotal = () => {
    const { cartTotal } = useContext(DataContext);
    return (
        <div className='cart-total'>
            <div className='ct-total'>
                <p>Total:</p>
                <p>{formatPrice(cartTotal)}</p>
            </div>
            <div className='ct-checkout'>
                <Link to='/co'>
                    <button>Procced to checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CartTotal;
