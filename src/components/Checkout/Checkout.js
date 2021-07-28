import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import "./Checkout.css";

const Checkout = () => {
    const { cartTotal } = useContext(DataContext);
    return (
        <div className='checkout'>
            <div className='checkout-wrapper'>
                <div className='checkout-left'>
                    <h3>
                        Total: ${cartTotal}.<small>00</small>
                    </h3>
                </div>
                <div className='checkout-form'>
                    <h3>Credit card</h3>
                    <form>
                        <div>
                            <label htmlFor='name'>Holder name</label>
                            <input type='text' name='name' id='name' />
                        </div>
                        <div>
                            <label htmlFor='number'>Card number</label>
                            <input type='number' name='number' id='number' />
                        </div>
                        <div className='form-flex'>
                            <label>
                                Expires
                                <br />
                                <input type='date' name='data' id='date' />
                            </label>
                            <label>
                                CVC
                                <br />
                                <input type='text' name='cvc' id='cvc' />
                            </label>
                        </div>
                        <button>Buy now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
