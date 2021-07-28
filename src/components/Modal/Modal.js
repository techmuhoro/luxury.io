import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import "./Modal.css";

const Modal = () => {
    const { showModal } = useContext(DataContext);

    return (
        <div className={showModal ? "modal-cart show" : "modal-cart"}>
            <div className='modal-cart-wrapper'>
                <div className='modal-left'>
                    <span>
                        <i className='fas fa-check-circle'></i>
                    </span>
                </div>
                <div className='modal-center'>
                    <p>Item has been added to cart</p>
                </div>
                <div className='modal-right'>
                    <span>
                        <i className='fas fa-times-circle'></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
