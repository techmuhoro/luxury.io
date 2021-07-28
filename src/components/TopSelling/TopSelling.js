import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Card2 from "../Card2";
import "./TopSelling.css";

const TopSelling = () => {
    const { featured } = useContext(DataContext);
    return (
        <div className='top-selling'>
            {featured.map(item => {
                return <Card2 key={item.id} item={item} />;
            })}
        </div>
    );
};

export default TopSelling;
