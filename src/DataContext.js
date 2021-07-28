import React, { useState, createContext, useEffect } from "react";
import datas from "./data";
const DataContext = createContext();

const DataProvider = props => {
    const [data, setData] = useState(datas);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartUpdate, setCartUpdated] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const addToCart = id => {
        let tempCart = cart;
        //get the item using its id
        let item = datas.filter(item => item.id == id)[0];
        //assign a default value of 1
        item["qty"] = 1;
        //check whether the item is in cart
        let inCart = cart.filter(item => item.id == id)[0];
        if (!inCart) {
            tempCart.push(item);
            setCart(tempCart);
        }
        //calcultaes the cartTotal
        calcTot();
        // cart.push(datas.filter(item => item.id == id)[0]);
    };
    const incProduct = id => {
        let tempCart = cart.map(item => {
            if (item.id === id) {
                item.qty += 1;
                return item;
            }
            return item;
        });
        setCart(tempCart);
        calcTot();
    };
    const decProduct = id => {
        let tempCart = cart.map(item => {
            if (item.id === id) {
                if (item.qty === 0) {
                    item.qty = 0;
                } else {
                    item.qty -= 1;
                }
                return item;
            }
            return item;
        });
        setCart(tempCart);
        calcTot();
    };
    const decToZero = id => {
        let tempCart = cart.map(item => {
            if (item.id === id) {
                item.qty = 0;
                return item;
            }
            return item;
        });

        setCart(tempCart);
        calcTot();
    };

    const reduceCart = id => {
        setCart(cart.filter(item => item.id != id));
    };
    const featured = data.filter(item => item.featured === 1);
    const calcTot = () => {
        // console.log(cartTotal);
        let total = 0;
        let itemTotal = 0;
        cart.forEach(item => {
            itemTotal = item.qty * item.price;
            total = total + itemTotal;
        });

        setCartTotal(total);
        // console.log(total);
    };
    const clearCart = () => setCart([]);
    const displayModal = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 1000);
    };

    return (
        <DataContext.Provider
            value={{
                featured,
                data,
                cart,
                addToCart,
                incProduct,
                decProduct,
                reduceCart,
                cartTotal,
                calcTot,
                decToZero,
                clearCart,
                showModal,
                displayModal,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
