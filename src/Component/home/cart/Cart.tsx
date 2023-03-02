import React from "react";
import {Counter} from "../../Counter/Counter";
import styles from "../../Counter/Counter.module.css";
import Data from "../Data3";
import css from "../Page1.module.scss";
import {useSelector} from "react-redux";
import {selectCount} from "../../Counter/counterSlice";
import {Link} from "react-router-dom";
import {appConstants} from "../../../headers/appConstants";


const Cart = () => {

    // const item = Data[0];
    const item = Data[+window.location.pathname[6]-1];

    const count = useSelector(selectCount);
    const sum = +(item?.price) * count;

    if(item === undefined){
        return (
            <>
                <h1 className='text-center'>YOUR CART </h1>
                <h5> Product</h5>
                <div className={css.cart_wrapper} >
                    <div className={css.wrapper} >
                        {/*========= 111111111 =============*/}
                        <div>
                            <img className="card-img-top text-center" src={'https://static.vecteezy.com/system/resources/previews/005/006/007/original/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'}
                                 alt={'empty cart'}
                            />
                        </div>
                        <div> <h1> Oops! Your Cart is empty</h1> </div>
                    </div>

                    {/*========== Summary =========*/}
                    <div>
                        <p><b>ORDER SUMMERY</b></p>
                        <h5><b>Subtotal:</b> $ 0 </h5>
                        <Link to={`${appConstants.shopRoute}`}>
                            <button className={styles.CHECKOUT}> Continue Shopping </button>
                        </Link>
                    </div>

                </div>


            </>
        );
    }

    return(
        <>
            <h1 className='text-center'>YOUR CART </h1>
            <h5> Product</h5>
            <div className={css.cart_wrapper} >
                <div className={css.wrapper} >

                    {/*========= 111111111 =============*/}
                    <div>
                        <img className="card-img-top text-center" src={item?.img} alt={item.productsType}/>

                    </div>

                    {/*========== 222222222 ==========*/}
                    <div className='text-center'>
                        <h5><b>{item?.name}</b></h5>
                        <p><b>{item?.category} Food</b></p>
                        {/*TODO: Reviews */}
                        <p>Reviews ☆☆☆</p>
                        <p>${item?.price}</p>
                        <p>{item?.desc}</p>
                        <p><b>Package Size:</b> {item?.weight}</p>
                        {/*TODO: AddToCart*/}
                        <Counter/>

                    </div>
                </div>

                {/*========== Summary =========*/}
                <div>
                    <p><b>ORDER SUMMERY</b></p>

                    <h5><b>Items:</b> {item?.brand} x {count} </h5>
                    <h5><b>Subtotal:</b> ${sum.toFixed(2)} </h5>

                    <Link to={`${appConstants.checkoutRoute}`}>
                        <button className={styles.CHECKOUT}>
                            PROCEED TO CHECKOUT
                        </button>
                    </Link>
                </div>

            </div>
        </>

    );
}

export default Cart;