import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Card2 from "../Card2/Card2";
import "./Recommendation.css";

const Recommendation = () => {
    const { data } = useContext(DataContext);

    const toGet = [2, 10, 3, 6, 4, 1];
    const items = [];
    toGet.forEach(item => {
        let itemFound = data.find(item2 => item2.id === item);
        if (itemFound) {
            items.push(itemFound);
        }
    });
    console.log(items);
    return (
        <div className='reccomendation grid'>
            {items.map(item => {
                return <Card2 key={item.id} item={item} />;
            })}
        </div>
    );
};

export default Recommendation;
/**
 * Finish on this recommendation page
 */
