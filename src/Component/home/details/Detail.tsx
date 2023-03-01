import React, {Component} from "react";
import {RouteComponentProps} from "react-router-dom";
import css from "../../Page1/Page1.module.scss";
import Data from "../Data3";
import {Counter} from "../../Counter/Counter";
import styles from "../../Counter/Counter.module.css";
import {decrement} from "../../Counter/counterSlice";
// import {Formik} from "formik";

// class Detail extends Component<DetailProps, DetailState>{
class Detail extends Component<any, any>{


    render() {

    const item = Data[0]
        return (
            // <Formik>
            //     {/*something here*/}
            // </Formik>
        <body>
        <h1>  <label> </label>  </h1>
        <div className={css.wrapper} >


            {/*========= 111111111 =============*/}
            <div>
                <img className="card-img-top text-center" src={item.img}/>

            </div>

            {/*========== 222222222 ==========*/}
            <div className='text-center'>
                <h5><b>{item.name}</b></h5>
                <p><b>{item.category} Food</b></p>
                {/*TODO: Reviews */}
                <p>Reviews ☆☆☆</p>
                <p>${item.price}</p>
                <p>{item.desc}</p>
                <p><b>Package Size:</b> {item.weight}</p>
                {/*TODO: AddToCart*/}
                    <Counter/>


                <p>
                    <button
                        className={styles.AddToCart}
                        onClick={() => {}}
                    >
                        AddToCart

                    </button>
                </p>
            </div>



            {/*=========== 333333333 ===========*/}
            <div>
               <h2>something part3</h2>

            </div>

            {/*========== 444444444 ===========*/}
            <div>
                <h1>something part4</h1>
                <img
                    src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Cat_Mobile_2x_f38aa5a8-37f0-457f-babf-372719b5c140_1024x1024_crop_center.png?v=1614338209'}
                    width={'400px'}
                    alt={'Dog Treats'}
                />


            </div>




        </div>
        </body>

        );
    }

}

export default Detail;

// interface DetailProps extends RouteComponentProps<{id:string}> {
interface DetailProps extends RouteComponentProps<{any:any}> {
}
interface DetailState{
}