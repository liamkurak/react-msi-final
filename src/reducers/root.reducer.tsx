import {combineReducers} from "redux";
import {namesReducer} from "./names.reducer";
import {productsReducer} from "./products.reducer";

export const rootReducer = combineReducers({
    // key - value pair
    // key later will be date name
    names: namesReducer,
    products: productsReducer,
    //1/13 11:48
});
