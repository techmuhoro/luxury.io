import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    const { cart } = useContext(DataContext);
    const calcTotalItems = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.qty;
        });
        return total;
    };
    return (
        <section id='nav'>
            <div className='logo'>
                <Link to='/'>
                    <h2>
                        Lu
                        <span className='larger'>x</span>
                        ury.io
                    </h2>
                </Link>
            </div>
            <div className='center'>
                <input type='text' placeholder='Search any product here' />
            </div>
            <div className='last-icons'>
                <div className='cart-icon'>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart main'></i>
                    </Link>
                    <div className='badge flex-center'>{calcTotalItems()}</div>
                </div>
                <div className='account-icon'>
                    <span>
                        <i className='fas fa-user-circle main'></i>
                    </span>
                    <span>
                        <i className='fas fa-chevron-down down'></i>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Nav;
