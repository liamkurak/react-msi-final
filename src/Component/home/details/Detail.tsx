import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import css from "../Page1.module.scss";
import Data from "../Data3";
import {Counter} from "../../Counter/Counter";
import styles from "../../Counter/Counter.module.css";
import {appConstants} from "../../../headers/appConstants";
import Products from "../../products/Products";
// import {Formik} from "formik";

// class Detail extends Component<DetailProps, DetailState>{
class Detail extends Component<any, any>{

    render() {
        // const item = Data[0];
        const item = Data[+window.location.pathname[8]-1];
        return (
        <body>

        <p>
            <NavLink
                className={css.LinkTagBlackColor}
                to={appConstants.homePageRoute}>Home </NavLink>
            &gt;
            <NavLink className={css.LinkTagBlackColor} to={appConstants.shopRoute}> Products </NavLink>
            &gt; Detailas
        </p>

        {/*================*/}
        {/*================*/}
        {/*================*/}



        {/*================*/}
        {/*================*/}

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
            <div className={css.reviews}>
                {/*TODO:CUSTOMER REVIEWS*/}
                <h1>Customer Reviews</h1>
                <p><b>Makes breakfast taste like dessert!</b></p>
                <p>
                    My puppy usually ignores breakfast, until I started adding Vital Essentials Beef Topper to his food. He starts jumping out of excitement and gobbles it all up! This topper is a great way to add in some additional protein and get your pets excited to eat!
                </p>

                <img
                    // src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Cat_Mobile_2x_f38aa5a8-37f0-457f-babf-372719b5c140_1024x1024_crop_center.png?v=1614338209'}
                    src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/dcdn.aitrillion.com/ai-review/jxjhP8Kiqelhc2y0-GbOAOr5cOV148hE81LluK9MJTQ/1651242543vitalessentials_2.jpg'}
                    width={'400px'}
                    alt={'Dog Treats'}
                />
            </div>

        </div>

        {/*===========================*/}
        {/*===========================*/}
        {/*===========================*/}

        <div></div>
        <br/>
        <div className={css.inner_grid_filter}>
            {/*<div className={css.wrapper} >*/}
                <div>
                <div>
                    <form className={css.inner_grid_filter}
                        // action="http://echo-4131.herokurapp.com/"
                          method="post"
                    >
                        {/*// <!-- <input id="location" type="text" name="location" required>*/}
                        {/*// <button>Submit</button> -->*/}
                        <table>
                            <h3>Filter</h3>
                            <tr>
                                <td> Filter</td>
                                <td> <button>Submit</button> </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id={css.location} type="text" name="location" required/>
                                </td>
                                <td>
                                    <button>Submit</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>


                {/*<div className={css.one}>*/}
                {/*    <div className={css.inner_grid}>*/}
                <div>

                </div>
            </div>

            {/*--------------------2nd grid------------------------------*/}


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




// <div>
//
//     <table id={css.myTable}>
//         <thead>
//         <tr className={css.first_grid_background_color}>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Author</th>
//             <th>Operation</th>
//         </tr>
//         </thead>
//
//         <tr className={css.EvenRowColor}>
//             <th>1</th>
//             <th>JavaScript</th>
//             <th>100</th>
//             <th>Bob</th>
//
//             <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//             </td>
//         </tr>
//
//         <tr>
//             <th>2</th>
//             <th>Java</th>
//             <th>200</th>
//             <th>Alex</th>
//
//             <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//             </td>
//         </tr>
//
//         <tr className={css.EvenRowColor}>
//             <th>3</th>
//             <th>J2EE</th>
//             <th>150</th>
//             <th>Jim</th>
//
//             {/*// <!-- [label for] will auto match [input id], when we click label name, it will foucus/ jump to input box -->*/}
//             <td><label htmlFor="Edit">Edit</label>
//                 <button>Edit</button>
//                 <button>Delete</button>
//             </td>
//         </tr>
//
//     </table>
// </div>