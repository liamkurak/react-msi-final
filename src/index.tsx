import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'; //  this only for v18

// use ReactDOM.render, BrowserRouter,Switch
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {appConstants} from "./header/appConstants";
import {ReactCounter} from "./products/react-counter";

// Redux Steps 2 imports 然后用Provider（类工厂）创建模式 然后将store作为props传入
import store from './app/store'
import { Provider } from 'react-redux'
import {Login} from "./products/Login";
import Names from "./names/Names";
import {Shop} from "./products/shop";


const root = document.getElementById('root');
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>

        <App>
            <Switch>{/*<Route>*/}
                <Route path={appConstants.reactCounterRouter} component={ReactCounter}/>
                <Route path={appConstants.loginRoute} component={Login}/>
                <Route path={appConstants.namesRoute} component={Names}/>
                <Route path={appConstants.shopRoute} component={Shop}/>
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
