import React from "react";
import Heading2 from "../Heading2";
import TopSelling from "../TopSelling";
import CrazyDiscounts from "../CrazyDiscounts";
import "./HomeContainer.css";
import Recommendation from "../Recommendation";

const HomeContainer = () => {
    return (
        <section className='home-container'>
            <Heading2 text={"Top selling products"} bg={"158, 155, 155, 1"} />
            <TopSelling />
            <Heading2 text={"Crazy discounts"} bg={"0, 100, 190, 1"} />
            <CrazyDiscounts />
            <Heading2 text={"Items you might like"} bg={"10, 205, 0"} />
            <Recommendation />
        </section>
    );
};

export default HomeContainer;
