import React, {SyntheticEvent, useCallback, useEffect, useState} from "react";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PetsIcon from "@mui/icons-material/Pets";
import styles from "../../Counter/Counter.module.css";
import css from "../Page1.module.scss";

let allStar = 0;
let lenOfComLst =1;
function setAllStar(newAveStar:number){
    allStar = newAveStar;
}
function setLenOfComLst(newLen:number){
    lenOfComLst = newLen;
}

export function getAveStar(){
    return (allStar/lenOfComLst).toFixed(2);
}

export let printStarInDetail = (x:number)=>{
    if(x >= 5) return '★★★★★';
    else if(x < 1) return '☆';

    let lst ='★';
    while(x-- > 1)
        lst += '★';
    return lst;
};


const Review = ()=>{
    const [currentCommentsListLength,setCurrentCommentsListLength] = useState(100);
    // const [totalStar,setTotalStar] = useState(0);

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

    const [commentLst, setCommentLst] = useState<{ id: any; name: any; review: any; stars: any; reviewdate: any; }[]>();

    let lstArray: { id: any; name: any; review: any; stars: any; reviewdate: any; }[] = [] ;

    let totalStars = 0.0;
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
                            totalStars += result[i].stars===666?5:result[i].stars;
                            lstArray.push(a);
                        }
                            setCommentLst(lstArray);
                            setCurrentCommentsListLength(result.length+1);

                        // console.log("Review-> Effec -> totalsatr: ",totalStars);
                        setAllStar(totalStars);
                        setLenOfComLst(result.length);


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

    const [,updateState] = useState({});
    const forceUpdateReview = useCallback(()=>{updateState({})},[]);


    const submitHander =(event:SyntheticEvent)=>{
        event.preventDefault();
        forceUpdateReview();

        const date = new Date();
        let  exactDate = new Date();
        // let  exactDate = new Date().toJSON();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${month}-${day}-${year}`;

        console.log('currentDate: ',currentDate);
        console.log('exactDate: ',exactDate);
        setCurrentCommentsListLength(currentCommentsListLength+1);

        let newCommentsData = {
            // id: (commentLst?.length||100) +20,
            id: currentCommentsListLength+1,
            name: comment.name,
            review: comment.review,
            stars: comment.stars===666?666:comment.stars>5?5:comment.stars<0?0:comment.stars,
            reviewdate: currentDate,
            // reviewdate: exactDate,
        };

        (async function(newCommentsData:any) {
            let response = await fetch(
                "http://localhost:8080/comments",
                {   method: 'PUT',
                        headers: { 'Content-Type': 'application/json'},
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(newCommentsData)
                })
            return (()=>{console.log("newCommentsData added!")})();
            // return response.json();
        })(newCommentsData);

    }
    const commentUpdateHandler = (event: SyntheticEvent) => {
        const key = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setComment({
            ...comment, // copy the old state
            [key]: value
        })
    };


    const printStar = (len:number)=>{
        let lst ='★';

        if(len === 666) return <span><PetsIcon/><PetsIcon/><PetsIcon/><PetsIcon/><PetsIcon/></span>;
        else if(len >= 5) return '★★★★★';
        else if(len < 0) return '☆';

        while(len-- > 1)
            lst += '★';

        return lst;
    }

    // (()=>{
    //     setAllStar(totalStars);
    //     setLenOfComLst(currentCommentsListLength);
    //     return totalStars/currentCommentsListLength;
    // })()



    return(
        <>
            <h2 style={{'textAlign':'center'}}>Customer Reviews</h2>
            <form onSubmit={submitHander}>
                <InsertCommentIcon/>
                <input
                    name="name"
                    className='UserTextBox'
                    value = {comment.name}
                    onChange={commentUpdateHandler}
                    placeholder={'title'}
                />
                <StarHalfIcon />
                <input
                    name="stars"
                    className='UserTextBox'
                    value = {comment.stars}
                    type = 'number'
                    onChange={commentUpdateHandler}
                    placeholder={'stars 1-5'}
                />

                <button className={styles.button}>
                    Submit Comment!
                </button>

                <div>
                    <PetsIcon/>
                    <textarea
                        name="review"
                        className='UserTextBox'
                        value = {comment.review}
                        onChange={commentUpdateHandler}
                        placeholder={'review in 400 words'}
                    />
                </div>
            </form>

            {/*{console.log("commentList: ",commentLst)}*/}

            {   commentLst?.map(
                    (p: any)=> (
                        // <div style={{textAlign:'center'}}>
                        <div className={css.reviewsSmall}>
                            <p>
                                <b>Customer: </b> {p?.id}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <b>stars: </b>{printStar(p?.stars)}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {p?.reviewdate}
                            </p>
                            <p><h5><b>{p?.name}</b></h5> </p>
                            <p> {p?.review} </p>
                            <br/><br/><br/>
                        </div>
                    ))
            }
        </>
    );
}

export default Review;
