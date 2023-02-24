import React, {SyntheticEvent, useState} from "react";

import {Fab, InputAdornment, Paper, TextField, withStyles} from "@material-ui/core";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoginIcon from '@material-ui/icons/FilterHdr';

import {useDispatch} from "react-redux";
import {login} from "../../actions/auth.action";

const styles = {
};
/* *?* what is functional component?
    React 16.8
    what is jsx() ?
 */

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
        console.log(user);
        dispatch(login(
            user,
            ()=>{},
            ()=>{},
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
            <div className="overlay"/>
            <form className="login-form" onSubmit={submitHander}>
                <div className="login-icon"><LoginIcon /></div>
                <TextField
                    name="username"
                    className={classes?.root}
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
                    Sign In
                    <ArrowForwardIcon />
                </Fab>
            </form>
        </Paper>
    );
};

export default withStyles(styles)(Login);


// export default Login;
// interface  LoginProps extends StyledComponentProps, RouteComponentProps{}


// import * as React from 'react';
// import './Login.css';
// import { Link } from "react-router-dom";
// import { Input, Icon, Button, message } from 'antd';
// import { IStoreUser } from '../../store/types';
// import { CaiPost } from '../../api/CaiApi';
// import {History} from 'history';
//
// interface IProps {
//     login: (user: IStoreUser) => void;
//     history: History
// }
//
// interface IState {
//     userName: string;
//     password: string;
// }
//
// class Login extends React.Component<IProps, IState> {
//
//     constructor(props: any) {
//         super(props);
//         this.state = { userName: "", password: "" };
//     }
//
//     public render() {
//         const { userName, password } = this.state;
//         return (
//             <div className="login">
//                 <div className="login-title">
//                     南财二手市场登录
//                 </div>
//                 <div className="login-input-container">
//                     <Input
//                         className="login-input"
//                         placeholder="输入用户名"
//                         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         value={userName}
//                         onChange={this.onChangeUserName}
//                     />
//                     <Input
//                         className="login-input"
//                         type="password"
//                         placeholder="输入密码"
//                         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         value={password}
//                         onChange={this.onChangePassword}
//                     />
//                 </div>
//                 <div className="submit-btn">
//                     <Button type="primary" onClick={this.doClick}>登录</Button>
//                     <Link to="/register">去注册</Link>
//                 </div>
//             </div>
//         )
//     }
//
//     private onChangeUserName = (e: any) => {
//         this.setState({ userName: e.target.value });
//     }
//
//     private onChangePassword = (e: any) => {
//         this.setState({ password: e.target.value });
//     }
//
//     private doClick = () => {
//         const { userName, password } = this.state;
//         CaiPost("/login", {name: userName, password}).then((result: any) => {
//             if (result.status === 200 && result.data.code === 8000) {
//                 message.success(result.data.msg);
//                 const r: IStoreUser = {isLogin: true, ...result.data.data};
//                 this.props.login(r);
//                 this.props.history.push("/");
//             } else {
//                 message.error(result.data.msg);
//             }
//         }).catch((e: Error) => {
//             message.error(e && e.message);
//         });
//     }
// }
// export default Login;