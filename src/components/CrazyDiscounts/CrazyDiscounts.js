import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Card2 from "../Card2/Card2";
import "./CrazyDiscounts.css";

const CrazyDiscounts = () => {
    const { data } = useContext(DataContext);
    const items = data.filter(item => item.discount > 0);

    return (
        <div className='crazy-discounts'>
            {items.map(item => {
                return <Card2 key={item.id} item={item} />;
            })}
        </div>
    );
};
/**
 * Todo
 *  how to style a before pseudo element in inlinestyles
 */

export default CrazyDiscounts;
