import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {appConstants} from "./appConstants";
import GetData from "../Component/GetData/GetData";


const Header = (props:any) =>{

    const [LoginData, setLoginData] = useState("ERRRRROR");

    const CurrentUser = LoginData.substring(0,LoginData.length-1);


    (async function loginCheck() {
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {   method: 'GET',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',})
        response.json()
        .then((usersList)=> {
            setLoginData(usersList[1].username);
        })
        .catch((failed_result)=> console.log('sth wrong: ',failed_result))
    })();

    async function updateLoginStatus(userId:number) {
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {   method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',})
        response.json()
            .then((usersList)=> setLoginData(usersList[1].username))
            .catch((failed_result)=> console.log('sth wrong: ',failed_result))
    }

    let LoginHeaderInfo;
    if(LoginData === 'Login' || LoginData === '' || LoginData === null){
        LoginHeaderInfo =
            <li className="nav-item">
                <NavLink className="nav-link" to={appConstants.loginRoute}> Please, Login! </NavLink>
                {/*<b className="nav-link">Please,</b>*/}

            </li>
    }else {
        LoginHeaderInfo =
            <li className="nav-item">
                <b className="nav-link">
                    Welcome, {CurrentUser}!
                  <b><NavLink style={{'color':'grey', 'textDecoration':'none'}} className="link" to={appConstants.logoutRoute}> Logout</NavLink></b>
                </b>
            </li>
    }


    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">


                <ul className="nav navbar-nav">

                <NavLink className="navbar-brand" to={appConstants.homePageRoute}> Pet GiuGiu </NavLink>
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
                        <NavLink className="nav-link" to={appConstants.cartRoute}> Cart </NavLink>
                    </li>

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.loginRoute}> Login </NavLink>*/}
                    {/*</li>*/}

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.detailRoute}> Detail(hide) </NavLink>*/}
                    {/*</li>*/}

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.checkoutRoute}> Checkout(hide) </NavLink>*/}
                    {/*</li>*/}

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.registerRoute}> Register(hide) </NavLink>*/}
                    {/*</li>*/}

                    {LoginHeaderInfo}

                    {/*<h1 style={{'color':'white'}}>*/}
                    {/*    Log:{LoginData}*/}
                    {/*    CurrentUser: {CurrentUser}*/}
                    {/*</h1>*/}

                </ul>
            </nav>
        </header>

    );
}

export default Header;