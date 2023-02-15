import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'; //  this only for v18

// use ReactDOM.render, BrowserRouter,Switch
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {appConstants} from "./Header/appConstants";
import {ReactCounter} from "./Component/Counter/react-counter";

// Redux Steps 2 imports 然后用Provider（类工厂）创建模式 然后将store作为props传入
import { Provider } from 'react-redux'
import {Login} from "./Header/Login";
import Names from "./Component/names/Names";
import Products from "./Component/products/Products";
import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/root.reducer";
import AddName from "./Component/names/add-name/AddName";
import AddProduct from "./Component/products/add-product/AddProduct";
import EditProduct from "./Component/products/edit-product/EditProduct";
import Page1 from "./Component/Page1/Page1";

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
        <App>
            <Switch>
                {/*<Route path={appConstants.addNameRoute} component={()=><AddName addName={addName}/>} />*/}
                <Route path={appConstants.addNameRoute} component={AddName} />

                <Route path={appConstants.namesRoute} component={Names}/>
                <Route path={appConstants.productsRoute} component={Products}/>
                <Route path={appConstants.addProductRoute} component={AddProduct}/>
                <Route path={`${appConstants.editProductRoute}/:name`} component={EditProduct}/>

                <Route path={appConstants.page1Route} component={Page1}/>

                <Route path={appConstants.loginRoute} component={Login}/>
                <Route path={appConstants.reactCounterRouter} component={ReactCounter}/>
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
