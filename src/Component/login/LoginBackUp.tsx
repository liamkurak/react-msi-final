import React, {SyntheticEvent, useState} from "react";
import {Fab, InputAdornment, Paper, TextField, withStyles} from "@material-ui/core";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoginIcon from '@material-ui/icons/FilterHdr';
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth.action";
import {NavLink} from "react-router-dom";
import {appConstants} from "../../headers/appConstants";

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

    const {classes} = props;
    const userUpdateHandler = (event: SyntheticEvent) => {
        const field  = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;

        setUser({
            ...user, // copy the old state
            [field]: value
        })
    };

    const dispatch =  useDispatch();
    const submitHander = (event:SyntheticEvent) => {
        event.preventDefault();
        console.log('user:',user);
        dispatch(login(
            user,
            ()=>{
                console.log('dispatch succeed');
            },
            ()=>{
                console.log('dispatch failed');
            },
        ));

        /*
            when you called login creator, you get:
            return{
                type: appConstants.LOGIN,
                payload: loginPromise,
            };
         */
    };

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
                <TextField
                    name="username"
                    className='UserTextBox'
                    label="Username"
                    value = {user.username}
                    onChange={userUpdateHandler}
                    InputProps={{
                        className: classes?.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <UsernameIcon/>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    name="password"
                    className={classes?.root}
                    label="Password"
                    type="password"

                    value = {user.password}
                    onChange={userUpdateHandler}

                    InputProps={{
                        className: classes?.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        )
                    }}
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
                    color="secondary"
                    // aria-label="Login"
                    // className={classes?.button}
                    // type="submit"
                >
                    <NavLink to={appConstants.registerRoute} className='blackTest'>
                        Or Sign Up <b>!</b>
                        {/*<ArrowForwardIcon/>*/}
                    </NavLink>
                </Fab>
            </form>


            <style>
                {`.blackTest{
                    color: black;
                    text-decoration: none; 
                }`}
            </style>
        </Paper>
    );
};

export default withStyles(styles)(Login);
