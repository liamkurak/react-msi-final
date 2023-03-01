import React from 'react';
import {NavLink} from "react-router-dom";
import {appConstants} from "./appConstants";
// import {appConstants} from "./old/component/constant";
// import exp from "constants";


const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href='/' className="navbar-brand">Pet GiuGiu</a>
                <ul className="nav navbar-nav">

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.homeRoute}> Home </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.page1Route}> Page1 </NavLink>
                    </li>

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.namesRoute}> Names </NavLink>*/}
                    {/*</li>*/}

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.ADD_NAME}> Add Name </NavLink>
                    </li>

                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.productsRoute}> Product </NavLink>*/}
                    {/*</li>*/}


                    {/*<li className="nav-item">*/}
                    {/*    <NavLink className="nav-link" to={appConstants.addProductRoute}> Add Product</NavLink>*/}
                    {/*</li>*/}

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.loginRoute}> Login </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.reactCounterRouter}> React </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.page2Route}> Test_GetData </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.detailRoute}> Detail </NavLink>
                    </li>

                </ul>
            </nav>
        </header>

    );
}

export default Header;