import React, {Component} from "react";
import {Link} from "react-router-dom";
import css from "../Page1.module.scss";
import Data from "../Data3";
import {Counter} from "../../Counter/Counter";
import styles from "../../Counter/Counter.module.css";
import {appConstants} from "../../../headers/appConstants";
// import {Formik} from "formik";

// class Detail extends Component<DetailProps, DetailState>{
class Detail extends Component<any, any>{

    render() {
        // const item = Data[0];
        const item = Data[+window.location.pathname[8]-1];
        return (
        <body>
        <h1>  <label> </label>  </h1>
        <div className={css.wrapper} >
            {/*========= 111111111 =============*/}
            <div>
                <img className="card-img-top text-center" src={item.img} alt={item.productsType}/>

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
                    <Counter/>
                <p>
                    <Link to={`${appConstants.cartRoute}/${item.id}`}>
                        <button className={styles.AddToCart}>
                            AddToCart
                        </button>
                    </Link>
                </p>
            </div>

            {/*=========== 333333333 ===========*/}
            <div>
               <h2><b>Description</b></h2>
                <p>
                    <h4>Product Description:</h4>
                    <p><b>Curr ID: {window.location.pathname[8]}</b></p>
                    <p><b>{item.desc}</b></p>

                    <p>Real chicken for purrfect nutrition! This complete and balanced healthy cat food has everything your little hunter needs to thrive and play with true feline confidence.</p>

                    <p>Chicken is a lean and low-sodium protein source, making it a healthy option to fuel your cat’s vitality. This freeze-dried chicken cat food is made with real meat, vital organs and bone. Our proprietary “slow” freeze-drying process does not destroy natural enzymes and nutrients in the food.</p>

                    <p>Combat food allergies by excluding “junky” ingredients like additives and artificial preservatives. Our limited ingredient, grain free chicken cat food utilizes real, raw protein instead of unhealthy, carb-heavy fillers. This natural cat food can be fed as a fully balanced meal, or as a healthy protein supplement to take your cat’s diet to the next level.</p>
                </p>

            </div>

            {/*========== 444444444 ===========*/}
            <div>
                {/*TODO:CUSTOMER REVIEWS*/}
                <h1>Customer Reviews</h1>
                <p><b>ever consistent</b></p>
                <p>
                    I have been purchasing the chicken dinner patties for a few years on and off . I usually purchase from chewy and the order comes fast . This order took a long time . The patties are not the same as the last several bags . These are dark and bloody and the cats don’t like them . Maybe your quality control needs some looking at or the processing. The reason for on and off purchase is because the food is inconsistent. Our cats either love them or hate them ,and this batch is bad !
                </p>

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
// interface DetailProps extends RouteComponentProps<{any:any}> {
// }
// interface DetailState{
// }