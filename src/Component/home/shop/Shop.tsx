import React, {useState} from "react";
import Filters from "./FIlters";
import CardPet from "./CardPet";
import Data3 from "../Data3";
import {NavLink} from "react-router-dom";
import {appConstants} from "../../../headers/appConstants";
import css from "../Page1.module.scss";

const Shop = (props:any) => {
    const [item, setItem] = useState(Data3);
    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
    // const menuItems = Data.map((Val) => Val.category);

    const lst2 = ['Cat','Dog','Topper'];
    const menuItems = lst2;

    const filterItem = (curcat:any) => {
        const newItem = Data3.filter((newVal) => {
            return newVal.category === curcat ||  newVal.category === 'Topper';
        });
        setItem(newItem);
    };

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <p>
                        <NavLink className={css.LinkTagBlackColor} to={appConstants.homePageRoute}>Home </NavLink>
                        &gt; Products
                    </p>


                    <h1 className="col-12 text-center my-3 fw-bold">All Dog & Cat Products</h1>
                    <Filters
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <CardPet item={item} />
                    <img
                        src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/collections/VE_LS_DogCat_Shopify_Collection_1920x250_1-21.png?v=1641834574'}
                        alt={'Pet Shop foot pic'}
                    />
                </div>
            </div>

        </>
    );
}

export default Shop;