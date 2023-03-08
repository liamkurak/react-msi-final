import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'; //  this only for v18

// use ReactDOM.render, BrowserRouter,Switch
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {appConstants} from "./headers/appConstants";

// Redux Steps 2 imports 然后用Provider（类工厂）创建模式 然后将store作为props传入
import { Provider } from 'react-redux'
import Names from "./Component/names/Names";
import Products from "./Component/products/Products";
import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/root.reducer";
import AddName from "./Component/names/add-name/AddName";
import AddProduct from "./Component/products/add-product/AddProduct";
import EditProduct from "./Component/products/edit-product/EditProduct";
import HomePage from "./Component/home/HomePage";
import Login from "./Component/login/Login";
import GetDate from "./Component/GetData/GetData";
import Detail from "./Component/home/details/Detail";
import {ReactCounter} from "./Component/Counter/react-counter";
import Cart from "./Component/home/cart/Cart";
import Checkout from "./Component/home/checkout/Checkout";
import Shop from "./Component/home/shop/Shop";
import Register from "./Component/login/Register";

//move names[] to reducers!
// const names = ['App-Names!!','Liam','Rayna','Charlie','names list'];
//
// const products = [
//     // tslint:disable-next-line:max-line-length
//     { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://d2um6umu4gwssp.cloudfront.net/apple/wp-content/uploads/2016/06/iphone-1.jpg'},
//     { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://cdn.mos.cms.futurecdn.net/005cd70c02c2c8bd7b07d3cfeca82a3a.jpg'},
// ];


const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Provider store={createStore(rootReducer)}>
        {/*<Provider store={contersReducer}>*/}
        <App>
            <Switch>
                {/*<Route path={appConstants.addNameRoute} component={()=><AddName addName={addName}/>} />*/}
                <Route path={appConstants.addNameRoute} component={AddName} />
                <Route path={appConstants.shopRoute} component={Shop}/>

                <Route path={appConstants.namesRoute} component={Names}/>
                <Route path={appConstants.productsRoute} component={Products}/>
                <Route path={appConstants.addProductRoute} component={AddProduct}/>
                <Route path={`${appConstants.editProductRoute}/:name`} component={EditProduct}/>
                <Route path={`${appConstants.detailRoute}/:name`} component={Detail}/>


                <Route path={appConstants.homePageRoute} component={HomePage}/>

                <Route path={appConstants.loginRoute} component={Login}/>

                <Route path={appConstants.page2Route} component={GetDate}/>

                <Route path={appConstants.reactCounterRouter} component={ReactCounter}/>

                <Route path={appConstants.cartRoute} component={Cart}/>
                <Route path={appConstants.checkoutRoute} component={Checkout}/>
                <Route path={appConstants.registerRoute} component={Register}/>

            </Switch>
        </App>
        </Provider>
    </BrowserRouter>
    ,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
