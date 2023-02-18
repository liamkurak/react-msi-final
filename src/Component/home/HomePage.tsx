import React, {useState} from "react";
import Data from "./Data";
import Filters from "./FIlters";
import Card from "./Card";

const HomePage = (props:any) => {

    const [item, setItem] = useState(Data);

    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
    // const menuItems = Data.map((Val) => Val.category);

    const lst = ['Breakfast','Lunch','Dinner','Snakes'];
    const menuItems = lst;

    const filterItem = (curcat:any) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
                    <Filters
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <Card item={item} />
                </div>
            </div>

        </>
    );
}

export default HomePage;