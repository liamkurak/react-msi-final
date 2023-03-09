import React, {SyntheticEvent, useEffect, useState} from "react";
import styles from "../Counter/Counter.module.css";
import {useDispatch} from "react-redux";

function GetData() {


    const [data, setData] = useState("");

    async function f() {
        let response = await fetch(
            "http://localhost:8080/samples/age/40",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: 'omit',
                // redirect: 'follow',
                // body: body && JSON.stringify(body)
            }
        )
        let a = response.json();
        // console.log("f(): response.json() -> ",a);

        return a;
        // return response.json();
    }

    async function insertComment() {
        let response = await fetch(
            "http://localhost:8080/samples",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({name:'Tony',age:115})
            }
        )
        return response.json();
    }

    async function deleteData() {
        let response = await fetch(
            "http://localhost:8080/samples/test1",
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
            }
        )
        return response.json();
    }

    // username: String, password:String, id: number
    const user_data = {username:'12312',password:"115",id:11};
    async function addUser() {
        let response = await fetch(
            "http://localhost:8080/users",
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
                // body: JSON.stringify({username:'sa',password:"115",id:13}),
                body: JSON.stringify(user_data)
            }
        )
        return response.json();
    }

    async function getUser() {
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
            }
        )
        let getUser_a = response.json();
        console.log("getUser_a: -> ",
                getUser_a.then((promise_result)=>{
                            console.log('current users: ',promise_result.length);
                            setData(promise_result.length)
                    return (()=>{console.log("asdasdasds"+promise_result.length)})();
                         })
                         .catch((failed_result)=>{
                            console.log('something wrong');
                            console.log(failed_result);
                         })
            );
        return getUser_a;
        // return response.json();
    }




    useEffect(
        ()=>{
            // a promise function， return (success | failed results)
            f()
                .then(
                    (resolved_result)=>{
                        console.log("f()");
                        // console.log('resolved_result: ',resolved_result);
                        // console.log(resolved_result[0])
                        // let lst = "";
                        // for (let i =0; i< resolved_result.length; i++){
                        //     // lst += resolved_result[i].name + resolved_result[i].age;
                        //     lst +=
                        //         "{name='" + resolved_result[i].name + '\n' +
                        //         ", age=" + resolved_result[i].age +
                        //         '}';
                        // }

                        setData(resolved_result[0].age);
                        // setData(lst);
                    }
                )
                .catch(
                    (failed_result)=>{
                        console.log('something wrong');
                        console.log(failed_result);
                    }
                )
            //unmount execute
            // return ()=>{console.log('asd')}
        }, []

    )

    function regi (){
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

    const dispatch =  useDispatch();
    const submitHander = (event:SyntheticEvent) => {
        event.preventDefault();
        console.log('submitHander() -> user:',user);

        (regi)();

        // dispatch(login(
        //     user,
        //     ()=>{
        //         console.log('dispatch succeed');
        //     },
        //     ()=>{
        //         console.log('dispatch failed');
        //     },
        // ));
    };

    return (
        <>
            <div className={'text-center'}>
                DB data:
                <br/>
                {data}
                <p></p>

                <p><button onClick={f}>f</button></p>

                <p><button onClick={insertComment}>insertComment</button></p>
                <p><button onClick={deleteData}>deleteData</button></p>
                <p><button onClick={addUser}>addUser</button></p>
                <p><button onClick={getUser}>getUser</button></p>
                <p><button onClick={regi}>regi()</button></p>
                <p><button onClick={getUser}>Get Current User list length</button></p>
                <p><button  className={styles.button}
                            onClick={()=>{
                            console.log("user: ",user.username," pw: ",user.password)
                            }}>Test Typing Result
                </button></p>



                <div>
                    {/*{console.log("1111 before form!")}*/}
                    <form className="login-form" onSubmit={submitHander}>
                        {/*{console.log("1111 start form!")}*/}
                        <input

                            name="username"
                            className='UserTextBox'
                            value = {user.username}
                            onChange={userUpdateHandler}
                            placeholder={'username'}
                        />
                        {/*{console.log("2222 input1!")}*/}
                        <input
                            name="password"
                            className='UserTextBox'
                            type="password"
                            value = {user.password}
                            onChange={userUpdateHandler}
                            placeholder={'password'}
                        />
                        {/*{console.log("3333 input2!")}*/}
                        <button
                            className={styles.button}
                            // ***??是否也不需要这个 type submit了，因为有了form的OnSubmit？
                            // type="submit"
                            // onClick={()=>{{console.log("55555 onClick!")}}}
                        >
                            {/*{console.log("4444 button!")}*/}
                            Sign Up</button>
                    </form>


                </div>

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


export default GetData;