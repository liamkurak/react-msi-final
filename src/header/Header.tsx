import React from 'react';
import {NavLink} from "react-router-dom";
import {appConstants} from "./appConstants";
// import {appConstants} from "./old/component/constant";
// import exp from "constants";


const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href='#PetStore' className="navbar-brand">Pet GiuGiu</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.productRoute}> Product </NavLink>
                    </li>
                    <li><b>|</b></li>

                </ul>
            </nav>
        </header>

    );
}

export default Header;