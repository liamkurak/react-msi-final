import React, {SyntheticEvent, useState} from "react";
import styles from "../Counter/Counter.module.css";
import LoginIcon from "@material-ui/icons/FilterHdr";
import UsernameIcon from "@material-ui/icons/Person";
import {InputAdornment} from "@material-ui/core";
import PasswordIcon from "@material-ui/icons/VpnKey";

const Test1 = () =>{

    const [data, setData] = useState("");


    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const userUpdateHandler = (event: SyntheticEvent) => {
        const key = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;

        setUser({
            ...user, // copy the old state
            [key]: value
        })
    };

    const regi = ()=>{
        console.log("regi()");

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
            console.log("getUser_a: -> ",
                getUser_a1.then((promise_result)=>{
                    console.log('current users: ',promise_result.length);
                    console.log("user: ",user);

                    // got the user id and inser new user to table
                    let newUserData = {
                        username:user.username,
                        password:user.password,
                        id:promise_result.length+1
                    };

                    (async function addNewUser(newUserData:any) {
                        let response = await fetch(
                            "http://localhost:8080/users",
                            {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json'},
                                referrerPolicy: 'no-referrer',
                                // body: JSON.stringify({username:'sa',password:"115",id:13}),
                                body: JSON.stringify(newUserData)
                            }
                        )

                        return (()=>{console.log("Done for insert/add User")})();
                        // return response.json();
                    })(newUserData);

                    setData(promise_result.length);
                })
                    .catch((failed_result)=>{
                        console.log('something wrong');
                        console.log(failed_result);
                    })
            );
            return (()=>{console.log("Done for GetUser()")})();
            // return response.json();
        })();



    }

    const submitHander = (event:SyntheticEvent) => {
        event.preventDefault();
        console.log('submitHander() -> user:',user);
        (regi)();
    };


    return(
        <>

            <div>
                <form className="login-form" onSubmit={submitHander}>
                    <UsernameIcon/>
                    <input
                        name="username"
                        className='UserTextBox'
                        value = {user.username}
                        onChange={userUpdateHandler}
                        placeholder={'username'}
                    />
                    <PasswordIcon />
                    <input
                        name="password"
                        className='UserTextBox'
                        type="password"
                        value = {user.password}
                        onChange={userUpdateHandler}
                        placeholder={'password'}
                    />
                    <button className={styles.button}>
                        Sign Up
                    </button>
                </form>



            </div>

            <style>
                {`  .UserTextBox {
                    font-size: 20px;
                    padding: 2px;
                    width: auto;
                    text-align: center;
                    margin-right: 8px;
                }`}
            </style>
        </>
    );
}

export default Test1;