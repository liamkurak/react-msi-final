// import {ProductModel} from "../shared/models/ProductModel";
// import {appConstants} from "../shared/constants/constant";
import {AxiosResponse} from "axios";
import {appConstants} from "../Header/appConstants";
import {ProductModel} from "../shared/models/ProductModel";

const products = [
    // tslint:disable-next-line:max-line-length
    { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://d2um6umu4gwssp.cloudfront.net/apple/wp-content/uploads/2016/06/iphone-1.jpg'},
    { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://cdn.mos.cms.futurecdn.net/005cd70c02c2c8bd7b07d3cfeca82a3a.jpg'},
    { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://technabob.com/blog/wp-content/uploads/2009/06/iphone_3gs.jpg'},
    { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'},
    { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'},
    { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'},
    { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://www.notebookcheck.net/uploads/tx_nbc2/N48-Blue.jpg'},
    { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'},
    { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png'}
];

export const productsReducer = (state = products, action: ProductsReducerAction ) => {
// export const productsReducer = (state: ProductModel[] | null = null, action: ProductsReducerAction ) => {
    // idk somehwo state = null -> 1/13 16:46
//     switch(action.type){
//         case appConstants.ADD_PRODUCT:
//             // return state ? [...state, action.payload] : [action.payload];
//             // return state ? [...state, (action.payload.data as  {product: ProductModel, success: boolean} ).product] : state;
//             return state ? [...state, (action.payload.data as  ProductResponse).product] : state;
//             //return state ? [...state, action.payload] : 'if state is null, return whatever, null, state(null), [action.payload]';
//         case appConstants.GET_PRODUCTS:
//             // payload: AxiosResponse is {data: [], status, ..]
//             return (action.payload as AxiosResponse).data;
//         default:
//             return state;
//
// // !!! 16:50 lifeclcey
//     }
            return state;
// //     default case is 'return state'
//     return state;
};

interface ProductsReducerAction{
    type: string;
    // payload: ProductModel | AxiosResponse;
    // payload: AxiosResponse <ProductModel | AxiosResponse>;
    payload: AxiosResponse <ProductModel | {product: ProductModel, success: boolean}>;
}

interface ProductResponse{
    product: ProductModel,
    success: boolean
}
