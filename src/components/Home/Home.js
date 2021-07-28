import React, { useContext } from "react";
import { DataContext } from "../../DataContext";

const Home = props => {
    const [data, setData] = useContext(DataContext);
    console.log(data);
    return (
        <div>
            <h1
                onClick={() => {
                    setData([]);
                    //console.log(data);
                }}
            >
                {"value"}
            </h1>
        </div>
    );
};

export default Home;
