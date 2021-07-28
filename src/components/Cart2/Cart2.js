import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import CartFooter from "../CartFooter";
import CartItem2 from "../CartItem2";
import Nav from "../Nav";
import "./Cart2.css";

const Cart2 = () => {
    const { cart } = useContext(DataContext);
    return (
        <div className='cart2-page'>
            <Nav />
            <section className='cart2'>
                <div className='cart2-wrapper'>
                    <div className='cart2-header'>
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Sub-total</p>
                    </div>
                    <div className='cart2-body'>
                        {cart.map(item => {
                            return <CartItem2 key={item.id} item={item} />;
                        })}

                        <CartFooter />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart2;
