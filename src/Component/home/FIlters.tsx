import React, {useState} from "react";
import Data from "./Data";

const Filters = ({ filterItem, setItem, menuItems }:any) => {
// const Filters = () => {
    //
    // const [item, setItem] = useState(Data);
    // const menuItems = ['1','2'];
    // // const menuItems = [...Set(Data.map((Val) => Val.category))];
    // const filterItem = (curcat:any) => {
    //     const newItem = Data.filter((newVal) => {
    //         return newVal.category === curcat;
    //     });
    //     setItem(newItem);
    // };

    return (
        <>
        <div className="d-flex justify-content-center">
            {menuItems.map((Val:any, id:any) => {
                return (
                    <button
                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                        onClick={() => filterItem(Val)}
                        key={id}
                    >
                        {Val}
                    </button>
                );
            })}

            <button
                className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                onClick={() => setItem(Data)}
            >
                All
            </button>
        </div>
        </>
    );
};

export default Filters;
