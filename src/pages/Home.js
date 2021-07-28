import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HomeContainer from "../components/HomeContainer";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className='container'>
            <Nav />
            <Hero />
            <HomeContainer />
            <Footer />
        </div>
    );
};

export default Home;
