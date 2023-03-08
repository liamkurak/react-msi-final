import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {appConstants} from "./appConstants";
// import {appConstants} from "./old/component/constant";
// import exp from "constants";


const Header = () =>{

    const [LoginData, setLoginData] = useState("Non Login Info");

    (async function loginCheck() {
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {   method: 'GET',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',})
        response.json()
        .then((usersList)=> setLoginData(usersList[1].username))
        .catch((failed_result)=> console.log('sth wrong: ',failed_result))
    })();
    async function f() {
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {   method: 'GET',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',})
        return response.json();

    };

    useEffect(
        ()=>{
            f()
                .then((usersList)=> setLoginData(usersList[1].username))
                .catch((failed_result)=> console.log('sth wrong: ',failed_result))
        },[]
    );

    let LoginHeaderInfo;
    if(LoginData === 'Login' || LoginData === '' || LoginData === null){
        LoginHeaderInfo =
            <li className="nav-item">
                {/*<b className="nav-link">Please,</b>*/}
                <NavLink className="nav-link" to={appConstants.loginRoute}> Please, Login! </NavLink>
            </li>
    }else {
        LoginHeaderInfo =
            <li className="nav-item">
                <b  className="nav-link">Welcome! {LoginData} !!</b>
                {console.log("setLoginData: ",LoginData)}
            </li>
    }

    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href='/' className="navbar-brand">
                    <NavLink className="nav-link" to={appConstants.homePageRoute}> Pet GiuGiu </NavLink>
                </a>

                <ul className="nav navbar-nav">

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.namesRoute}> Names </NavLink>*/}
                    {/*</li>*/}

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.ADD_NAME}> Add Name </NavLink>*/}
                    {/*</li>*/}

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.productsRoute}> Product </NavLink>*/}
                    {/*</li>*/}


                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.addProductRoute}> Add Product</NavLink>*/}
                    {/*</li>*/}


                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.reactCounterRouter}> React </NavLink>*/}
                    {/*</li>*/}

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.page2Route}> Test_GetData </NavLink>
                    </li>

                    {/*=============================*/}
                    {/*=============================*/}
                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.homePageRoute}> &nbsp; &nbsp; &nbsp; &nbsp;  Home </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.shopRoute}> Shop </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.detailRoute}> Detail(hide) </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.cartRoute}> Cart </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.checkoutRoute}> Checkout(hide) </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.loginRoute}> Login </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.registerRoute}> Register(hide) </NavLink>
                    </li>

                    {LoginHeaderInfo}

                </ul>
            </nav>
        </header>

    );
}

export default Header;