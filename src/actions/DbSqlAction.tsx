import {useState} from "react";


export const GetUsersList = ()=>{

    const [lst, setLst] = useState();
    console.log('getUsersList: ',lst);
    (async ()=>{
        let response = await fetch(
            "http://localhost:8080/users/getAll",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
            }
        )
        let res = response.json();
         res.then((promise_result)=>{
                // console.log('promise_result: ',promise_result);
                console.log(' .then lst before: ', lst);
                 setLst(promise_result);
                console.log(' .then lst after: ', lst);
                return 6;
            })
            .catch((failed_result)=>{
                // console.log('failed_result: ',failed_result);
            })
    })();


    console.log('getUsersList: ',lst);
    return (
        <>



        </>
    );
    // return{
    //     type: appConstants.DB_SQL,
    //     payload: lst,
    // }



}