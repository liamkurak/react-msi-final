import React, {SyntheticEvent} from "react";
import {changeByAmount} from "../Counter/counterSlice";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import styles from "../Counter/Counter.module.css";
import {appConstants} from "../../headers/appConstants";
import {NavLink, Redirect} from "react-router-dom";

const Logout = () =>{

        let newUserData = {
            username: 'Login',
            password: 'password',
            id:2,
        };

        async function ChangeID2() {
            let response = await fetch(
                "http://localhost:8080/users",
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(newUserData)
                })
        }
    (ChangeID2)();

    const submitHander = (event:SyntheticEvent) => {
        event.preventDefault();
    };


    return(
        <>
            <Redirect to="/Home"/>
            <form className="login-form" onSubmit={submitHander}>
                <button className={styles.button}>
                    <NavLink className="navbar-brand" to={appConstants.homePageRoute}>
                        back to Home
                    </NavLink>
                </button>
            </form>

        </>
    );
}

export default Logout;