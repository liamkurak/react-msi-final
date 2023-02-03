import React from 'react';
// import ReactDOM from 'react-dom/client'; //  this only for v18
import ReactDOM from 'react-dom'; //  this only for v18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Switch} from "react-router-dom";

// use ReactDOM.render, BrowserRouter,Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import {appConstants} from "./header/appConstants";
import {Product} from "./Products/product";

// Redux Steps 2 imports 然后用Provider（类工厂）创建模式 然后将store作为props传入
import store from './app/store'
import { Provider } from 'react-redux'


const root = document.getElementById('root');

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>

        <App>
            <Switch>{/*<Route>*/}
                <Route path={appConstants.productRoute} component={Product}/>
            </Switch>
        </App>
        </Provider>
    </BrowserRouter>
    ,root
);




// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
