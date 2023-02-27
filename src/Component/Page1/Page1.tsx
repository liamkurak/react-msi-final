import React from "react";
import css from "./Page1.module.scss";
import Products from "../products/Products";

const Page1 = () => {

    return(
        <React.Fragment>
{/*<HomePage></HomePage>*/}
            <body>
            <h1>  <label>BOOKS</label>  </h1>
            <div className={css.wrapper}>
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

