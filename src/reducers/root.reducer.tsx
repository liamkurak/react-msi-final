import {combineReducers} from "redux";
import {namesReducer} from "./names.reducer";
import {productsReducer} from "./products.reducer";
import {authReducer} from "./auth.reducer";
import counterReducer from "../Component/Counter/counterSlice";

export const rootReducer = combineReducers({
    // key - value pair
    // key later will be date name
    names: namesReducer,
    products: productsReducer,
    //1/13 11:48

    //day5 part 1 47:42
    user: authReducer,
    counter: counterReducer,
});
