import React, {useState} from "react";
import Data from "./Data";
import Filters from "./FIlters";
import Card from "./Card";
import Data2 from "./Data2";
import CardPet from "./CardPet";
import Data3 from "./Data3";

const HomePage = (props:any) => {

    const [item, setItem] = useState(Data3);

    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
    // const menuItems = Data.map((Val) => Val.category);

    // const lst = ['Breakfast','Lunch','Dinner','Snakes','Wet Food'];
    const lst2 = ['Cat','Dog'];
    const menuItems = lst2;

    const filterItem = (curcat:any) => {
        const newItem = Data3.filter((newVal) => {
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
                    <CardPet item={item} />
                </div>
            </div>

        </>
    );
}

export default HomePage;