import {ProductModel} from "../shared/models/ProductModel";

import axios, {AxiosResponse} from "axios";
import {Action} from "redux";
import {appConstants} from "../headers/appConstants";


export const addProduct = (product: ProductModel, succeed:() =>void, fail:() => void) => {
    const addProductPromise = axios.post(
        //first
        `${process.env.REACT_APP_API}/products`,
        //second param: data/ value
        product
    )
    return{
        type: appConstants.ADD_PRODUCT,
        payload: product,
    }

};

// in Products.tsx -> interface ProdudctProps{   getProducts: () => {}; };
export const getProducts = () => {
// export const getProducts = (): ActionObject<AxiosResponse <ProductModel[]>> => {
    // let getProductsPromise = axios.get('http://localhost:8080/products');
    let getProductsPromise = axios.get(`${process.env.REACT_APP_API}/products`);
    //     .then(date => payload = date);
    console.log(process.env.REACT_APP_API);

    // addProductPromise
    //     .then(
    //         () => succeed()
    //     )
    //     .catch(
    //         () => fail()
    //     );

    return{
        type: appConstants.GET_PRODUCTS,
        payload: getProductsPromise,
    }
};

interface ActionObject<P> extends Action<string>{
    payload: P;
}
