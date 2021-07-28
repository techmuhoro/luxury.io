import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import HomeContainer from "../components/HomeContainer";
import Modal from "../components/Modal";

const TestPage = () => {
    return (
        <div className='test-page'>
            <Nav />
            <Hero />
            {/* <HomeContainer /> */}
            <Modal />
        </div>
    );
};

export default TestPage;
