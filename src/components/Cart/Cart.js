import React, { useContext } from "react";
import "./Cart.css";
import { DataContext } from "../../DataContext";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

const Cart = () => {
    const { cart } = useContext(DataContext);

    return (
        <div className='cart'>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} />;
            })}
            <CartTotal />
            {/* <div className='total'>
                <div>
                    <p>Total</p>
                    <p>$3458.00</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;
