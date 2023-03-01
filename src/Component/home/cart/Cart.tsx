import React from "react";
import {Counter} from "../../Counter/Counter";
import styles from "../../Counter/Counter.module.css";
import Data from "../Data3";
import css from "../../Page1/Page1.module.scss";
import {useSelector} from "react-redux";
import {selectCount} from "../../Counter/counterSlice";

const Cart = () => {

    const item = Data[0];

    const count = useSelector(selectCount);

    const sum = +(item.price) * count;

    return(

            <>
                <h1 className='text-center'>YOUR CART </h1>


                <h5> Product</h5>

            <div className={css.cart_wrapper} >

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


                        </div>




                    {/*========== Summary =========*/}
                <div>
                    <p><b>ORDER SUMMERY</b></p>

                    <h5><b>Items:</b> {item.brand} x {count} </h5>
                    <h5><b>Subtotal:</b> ${sum.toFixed(2)}  </h5>

                    <button
                        className={styles.CHECKOUT}
                        onClick={() => {}}
                    >
                        PROCEED TO CHECKOUT
                    </button>

                </div>


            </div>
            </>
    );
}


export default Cart;