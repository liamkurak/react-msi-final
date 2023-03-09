import React, {SyntheticEvent, useEffect, useState} from "react";
import {Fab, InputAdornment, Paper, TextField, withStyles} from "@material-ui/core";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoginIcon from '@material-ui/icons/FilterHdr';
import {NavLink} from "react-router-dom";
import {appConstants} from "../../headers/appConstants";
import setCurrentUserID from "../../headers/Header";

const styles = {

};

const  blackTest1 ={
    'color': "red",
    'text-decoration': "none"
}
const Login = (props: any) => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    })
    const [loginMsg, setLoginMsg] = useState('')


    const {classes} = props;
    const userUpdateHandler = (event: SyntheticEvent) => {
        const field  = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setUser({
            ...user, // copy the old state
            [field]: value
        })
    };

    const submitHander = (event:SyntheticEvent) => {
        event.preventDefault();
        console.log('submitHander() -> user:',user);
        (Logi)();
    };

    const Logi = ()=>{
        console.log("Logi()");
        //Get the User id, which is user list length
        (async function GetUsersCount(){
            let response = await fetch(
                "http://localhost:8080/users/getAll",
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',
                }
            )
            let getUser_a1 = response.json();
            console.log("getUser_a = response.json() -> ",
                getUser_a1.then((promise_result)=>{
                    console.log('promise_result: ',promise_result);

                    for(let i =0; i< promise_result.length; i++){
                        if(promise_result[i].username === user.username && promise_result[i].password === user.password){
                            return (()=>{
                                setLoginMsg('Login Success!')
                                console.log('Login Success!');
                                (UpdateLoginUser)();
                                setCurrentUserID(1);
                            })();
                        }
                    }
                    setLoginMsg('Invalid Username or Password')
                    console.log('Invalid Username or Password');
                })
                    .catch((failed_result)=>{
                        console.log('something wrong');
                        console.log(failed_result);
                    })
            );
            return (()=>{console.log("Done for Logi()")})();
            // return response.json();
        })();
    }

    const UpdateLoginUser = ()=>{
        //change user id = 2 info
        let newUserData = {
            username:user.username + '!',
            password:user.password,
            id:2,
        };

        (async function ChangeID2(newUserData:any) {

            console.log("ChangeID2(): newUserData -> ",newUserData);

            let response = await fetch(
                "http://localhost:8080/users",
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(newUserData)
                }
            )
            return (()=>{console.log("Done for ChangeID2()")})();
        })(newUserData);
    }

    return(
        <Paper className="Login" elevation={10}>
            <style>
                {`  .UserTextBox {
                        font-size: 20px;
                        padding: 2px;
                        width: auto;
                        text-align: center;
                        margin-right: 8px;
                    }
                    .SignUpMessage{
                        text-center: auto;
                        color: red;
                    }
                `}
            </style>
            <div className="overlay"/>
            <form className="login-form" onSubmit={submitHander}>
                <div className="login-icon"><LoginIcon/></div>
                <UsernameIcon/>
                <TextField
                    name="username"
                    className='UserTextBox'
                    label="Username"
                    value = {user.username}
                    onChange={userUpdateHandler}
                />

                <PasswordIcon />
                <TextField
                    name="password"
                    className={classes?.root}
                    label="Password"
                    type="password"
                    value = {user.password}
                    onChange={userUpdateHandler}
                />

                <Fab
                    variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="Login"
                    className={classes?.button}
                    type="submit"
                >
                    <b>Login In</b>
                    <ArrowForwardIcon/>
                </Fab>

                <Fab
                    variant="extended"
                    size="medium"
                    // color="secondary"
                >
                    <NavLink to={appConstants.registerRoute} className='blackTest'>
                        Or Sign Up <b>!</b>
                    </NavLink>
                </Fab>
            </form>


            <style>
                {`.blackTest{
                    color: black;
                    text-decoration: none; 
                }`}
            </style>

            <h3> {loginMsg} </h3>

        </Paper>
    );
};

export default withStyles(styles)(Login);
