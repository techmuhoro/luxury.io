import React from "react";
import SingleProduct from "../components/SingleProduct";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SingleProductPage = props => {
    const id = props.match.params.id;
    return (
        <div className='container'>
            <Nav />
            <SingleProduct id={id} />
            <Footer />
        </div>
    );
};

export default SingleProductPage;
