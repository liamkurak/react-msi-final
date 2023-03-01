import React from "react";
import Data3 from "../Data3";

const Filters = ({ filterItem, setItem, menuItems }:any) => {
    return (
        <>
        {/*<div>*/}
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
                onClick={() => setItem(Data3)}
            >
                All
            </button>
        </div>
        </>
    );
};

export default Filters;
