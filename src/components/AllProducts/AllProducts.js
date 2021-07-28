import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Card from "../Card/Card";
import Heading from "../Heading";

const AllProducts = () => {
    const { data } = useContext(DataContext);
    return (
        <section className='all-products'>
            <div className='wrapper'>
                <Heading text={"All products"} bg={"255,255,255, .7"} />
                <div className='products'>
                    {data.map(item => {
                        return (
                            <Card
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
