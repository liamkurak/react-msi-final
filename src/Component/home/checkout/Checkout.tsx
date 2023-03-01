import React from "react";
import css from "../../Page1/Page1.module.scss";

const Checkout = () => {

    return(
        <>

            <img
                src={'https://cdn.shopify.com/s/files/1/0472/5922/2175/files/Vital_Essentials_Logo_Horizontal_Primary_ClearBG_web_2019.png?7334'}
                width= '300px'
            />
            <div className={css.wrapper} >

                <span>

                    <p><b>Contact information</b></p>
                    <p><input/></p>

                    <p><b>Shipping address</b></p>
                    <p>
                        Country <br/>
                        First Name <br/>
                        Last Name <br/>
                        Address <br/>

                    </p>

                </span>


                <span>
                    <p>Subtotal: </p>
                    <p>Discount: </p>
                    <p>Shipping: </p>
                    <p>----------</p>
                    <p>Total: </p>

                </span>

                <p><b></b>


                </p>
                <p><b></b></p>
                <p><b></b></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

            </div>
        </>
    );
}

export default Checkout;