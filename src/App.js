import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Error from "./pages/Error";
import TestPage from "./pages/TestPage";
import Modal from "./components/Modal/Modal";
const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route
                        exact
                        path='/all_products'
                        component={AllProductsPage}
                    />
                    {/* <Route exact path='/cart' component={CartPage} /> */}
                    <Route exact path='/sp/:id' component={SingleProductPage} />
                    <Route exact path='/co' component={CheckoutPage} />
                    <Route exact path='/tp' component={TestPage} />
                    <Route exaxt path='/cart' component={CartPage} />
                    <Route component={Error} />
                </Switch>
                <Modal />
            </Router>
        </>
    );
};

export default App;
