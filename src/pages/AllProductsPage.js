import React from "react";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AllProductsPage = () => {
    return (
        <div className='container'>
            <Header />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default AllProductsPage;
