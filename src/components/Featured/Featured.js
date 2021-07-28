import React, { useContext } from "react";
import Heading from "../Heading";
import "./Featured.css";
import Card from "../Card";
import { DataContext } from "../../DataContext";
import { formatPrice } from "../../utils";

export default function Featured() {
    const { featured } = useContext(DataContext);
    return (
        <section className='featured-products'>
            <div className='wrapper'>
                <Heading text={"Featured products"} bg={"255,255,255, .7"} />
                <div className='products'>
                    {featured.map(item => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={formatPrice(item.price)}
                                image={item.image}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
