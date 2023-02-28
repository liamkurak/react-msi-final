import React from "react";
import css from "./Page1.module.scss";
import Products from "../products/Products";

const Page1 = () => {

    return(
        <React.Fragment>
{/*<HomePage></HomePage>*/}
            <body>
            <h1>  <label>Home Page</label>  </h1>
            <div className={css.wrapper} >

                {/*========= 111111111 =============*/}
                <div  >
                <img
                    width = "400px"
                    alt="Vital Essentials"
                    src="https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/3T7A8861_1024x1024_crop_center.jpg?v=1614339426"
                    // data-src="https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/3T7A8861_1024x1024_crop_center.jpg?v=1614339426"
                    // alt="Vital Essentials" itemProp="logo" className="lazyautosizes lazyloaded" data-sizes="auto"
                    // sizes="309px"
                />
                </div>

                {/*========== 222222222 ==========*/}
                <div>
                <img
                    src= "https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/thecoultercoop_97347056_564421401156490_1807939635361174157_n_1024x1024_crop_center.png?v=1614339426"
                    alt="Vital Essentials"
                    width= '400px'
                />

                </div>

                {/*=========== 333333333 ===========*/}
                <div>
                    <img
                        src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Dog-Product-Pages-500_2x_e29c6054-539c-4074-9bdb-68e6744b9899_1024x1024_crop_center.png?v=1614338208'}
                        width={'400px'}
                        alt={'Dog Treats'}
                    />

                </div>

                {/*========== 444444444 ===========*/}
                <div>
                   <img
                        src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Cat_Mobile_2x_f38aa5a8-37f0-457f-babf-372719b5c140_1024x1024_crop_center.png?v=1614338209'}
                        width={'400px'}
                        alt={'Dog Treats'}
                    />


                </div>


                <div>



                {/*<div className={css.two}>*/}
                    {/*<form className="inner_grid" onChange12="return checker()" action="http://echo-4131.herokurapp.com/" method="post">*/}
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
                                <td>
                                    <button>Submit</button>
                                </td>
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


                <div>

                {/*<div className={css.two}>*/}
                    {/*<form className="inner_grid" onChange12="return checker()" action="http://echo-4131.herokurapp.com/" method="post">*/}
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
                                <td>
                                    <button>Submit</button>
                                </td>
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

                    <div>
                        <Products getProducts={function(): {} {
                                throw new Error("Function not implemented.");
                            } }/>
                        <table id={css.myTable}>
                            <thead>
                                <tr className={css.first_grid_background_color}>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Author</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>

                            <tr className={css.EvenRowColor}>
                                <th>1</th>
                                <th>JavaScript</th>
                                <th>100</th>
                                <th>Bob</th>

                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <th>2</th>
                                <th>Java</th>
                                <th>200</th>
                                <th>Alex</th>

                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>

                            <tr className={css.EvenRowColor}>
                                <th>3</th>
                                <th>J2EE</th>
                                <th>150</th>
                                <th>Jim</th>

                                {/*// <!-- [label for] will auto match [input id], when we click label name, it will foucus/ jump to input box -->*/}
                                <td><label htmlFor="Edit">Edit</label>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

    {/*--------------------2nd grid------------------------------*/}

            </div>
        </body>
        </React.Fragment>
    );
}


export default Page1;

// <body>
// <h1>  <label>BOOKS</label>  </h1>
// <div className={css.wrapper}>
//     <div>
//         {/*<div className={css.two}>*/}
//         {/*<form className="inner_grid" onChange12="return checker()" action="http://echo-4131.herokurapp.com/" method="post">*/}
//         <form className={css.inner_grid_filter}
//             // action="http://echo-4131.herokurapp.com/"
//               method="post"
//         >
//             {/*// <!-- <input id="location" type="text" name="location" required>*/}
//             {/*// <button>Submit</button> -->*/}
//             <table>
//                 <h3>Filter</h3>
//                 <tr>
//                     <td> Filter</td>
//                     <td>
//                         <button>Submit</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <input id={css.location} type="text" name="location" required/>
//                     </td>
//                     <td>
//                         <button>Submit</button>
//                     </td>
//                 </tr>
//             </table>
//         </form>
//     </div>
//
//
//     {/*<div className={css.one}>*/}
//     {/*    <div className={css.inner_grid}>*/}
//     <div>
//         <div>
//             <Products getProducts={function(): {} {
//                 throw new Error("Function not implemented.");
//             } }/>
//             <table id={css.myTable}>
//                 <thead>
//                 <tr className={css.first_grid_background_color}>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Author</th>
//                     <th>Operation</th>
//                 </tr>
//                 </thead>
//
//                 <tr className={css.EvenRowColor}>
//                     <th>1</th>
//                     <th>JavaScript</th>
//                     <th>100</th>
//                     <th>Bob</th>
//
//                     <td>
//                         <button>Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//
//                 <tr>
//                     <th>2</th>
//                     <th>Java</th>
//                     <th>200</th>
//                     <th>Alex</th>
//
//                     <td>
//                         <button>Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//
//                 <tr className={css.EvenRowColor}>
//                     <th>3</th>
//                     <th>J2EE</th>
//                     <th>150</th>
//                     <th>Jim</th>
//
//                     {/*// <!-- [label for] will auto match [input id], when we click label name, it will foucus/ jump to input box -->*/}
//                     <td><label htmlFor="Edit">Edit</label>
//                         <button>Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//
//             </table>
//         </div>
//     </div>
//
//     {/*--------------------2nd grid------------------------------*/}
//
// </div>
// </body>