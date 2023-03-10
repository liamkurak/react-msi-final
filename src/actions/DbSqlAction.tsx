import React, {SyntheticEvent, useEffect, useState} from "react";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import styles from "../Component/Counter/Counter.module.css";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PetsIcon from '@mui/icons-material/Pets';
const DbSql= ()=>{

     async function geta(){
        let response = await fetch(
            "http://localhost:8080/comments/age/40",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                referrerPolicy: 'no-referrer',
            }
        )
     return response.json();
    }

    const [UserLst, setUserLst] = useState<{ id: any; name: any; review: any; stars: any; reviewdate: any; }[]>();

    let lstArray: { id: any; name: any; review: any; stars: any; reviewdate: any; }[] = [] ;
    useEffect(
        ()=>{
            geta()
                .then(
                    (result)=>{
                        for (let i =0; i< result.length; i++){
                            let a = {
                                id: result[i].id,
                                name: result[i].name,
                                review: result[i].review,
                                stars: result[i].stars,
                                reviewdate: result[i].reviewdate,
                            }
                            lstArray.push(a) ;
                        }
                        setUserLst(lstArray);
                    })
                .catch(
                    (failed_result)=> console.log('failed_result: ',failed_result))
        }, []
    )

    const [comment, setComment] = useState({
        id: null,
        name: '',
        review: '',
        stars: 5,
        reviewdate: '',
    })
    const submitHander =()=>{

    }
    const userUpdateHandler = (event: SyntheticEvent) => {
        const key = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setComment({
            ...comment, // copy the old state
            [key]: value
        })
    };



    return(
        <>
            {/*id: 100,*/}
            {/*name: 'any',*/}
            {/*review: 'any',*/}
            {/*stars: 200,*/}
            {/*reviewdate: 'any',*/}

            <form onSubmit={submitHander}>
                <InsertCommentIcon/>
                <input
                    name="name"
                    className='UserTextBox'
                    value = {comment.name}
                    onChange={userUpdateHandler}
                    placeholder={'title'}
                />
                <StarHalfIcon />
                <input
                    name="stars"
                    className='UserTextBox'
                    value = {comment.stars}
                    onChange={userUpdateHandler}
                    placeholder={'stars 1-5'}
                />
                <PetsIcon/>
                <input
                    name="review"
                    className='UserTextBox'
                    value = {comment.review}
                    onChange={userUpdateHandler}
                    placeholder={'review'}

                />
                <button className={styles.button}>
                    Sign Up
                </button>
            </form>



            {console.log("UserLst: ",UserLst)}

            {
                UserLst?.map(
                    (p: any)=> (
                        <tr >
                            <td>id: {p?.id}</td>
                            <td>title: {p?.name}</td>
                            <td>review: {p?.review}</td>
                            <td>stars: {p?.stars}</td>
                            <td>reviewdate: {p?.reviewdate}</td>
                            {/*<td><img width = "100px" height="80px" src={p.image} alt={p.name}/></td>*/}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </tr>
                    ))
            }

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
        </>
    );
};












































export const GetUsersList = ()=>{

    // const [lst, setLst] = useState();
    // console.log('getUsersList: ',lst);
    // (async ()=>{
    //     let response = await fetch(
    //         "http://localhost:8080/users/getAll",
    //         {
    //             method: 'GET',
    //             headers: { 'Content-Type': 'application/json'},
    //             referrerPolicy: 'no-referrer',
    //         }
    //     )
    //     let res = response.json();
    //      res.then((promise_result)=>{
    //             // console.log('promise_result: ',promise_result);
    //             console.log(' .then lst before: ', lst);
    //              setLst(promise_result);
    //             console.log(' .then lst after: ', lst);
    //             return 6;
    //         })
    //         .catch((failed_result)=>{
    //             // console.log('failed_result: ',failed_result);
    //         })
    // })();
    //
    //
    // console.log('getUsersList: ',lst);
    // return 5;
    // return{
    //     type: appConstants.DB_SQL,
    //     payload: lst,
    // }
}

export default DbSql;

