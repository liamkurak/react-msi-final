import React from "react";
import css from "./Page1.module.scss";
import {Link} from "react-router-dom";
import {appConstants} from "../../headers/appConstants";

const Page1 = () => {
    return(
        <React.Fragment>
            <body>
            <h1 className={'text-center'}>  <label><b>Home Page</b></label>  </h1>
            <video autoPlay= {true} muted={true} loop = {true}
                src={"https://marvel-b1-cdn.bc0a.com/f00000000236716/images.salsify.com/video/upload/s--qstEyJBT--/ba2vxbatmkbbquv8pw2v"}/>

            <div className={css.wrapper} >

                {/*========= 111111111 =============*/}
                <div className={'text-center'}>
                    <p><b>Shop Dog Food</b></p>
                    <p><Link to={`${appConstants.shopRoute}`} >
                        <img
                            src="https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/3T7A8861_1024x1024_crop_center.jpg?v=1614339426"
                            width = "400px"
                            alt="Vital Essentials"
                        />
                    </Link></p>

                </div>

                {/*========== 222222222 ==========*/}
                <div className={'text-center'}>
                    <p><b>Shop Cat Food</b></p>
                    <p><Link to={`${appConstants.shopRoute}`} >
                        <img
                            src= "https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/thecoultercoop_97347056_564421401156490_1807939635361174157_n_1024x1024_crop_center.png?v=1614339426"
                            width= '400px'
                            alt="Vital Essentials"
                        />
                    </Link></p>


                </div>

                {/*=========== 333333333 ===========*/}

                <div className={'text-center'}>
                    <p><b>Shop Dog Treat</b></p>
                    <p><Link to={`${appConstants.shopRoute}`} >
                        <img
                            src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Dog-Product-Pages-500_2x_e29c6054-539c-4074-9bdb-68e6744b9899_1024x1024_crop_center.png?v=1614338208'}
                            width={'400px'}
                            alt={'Dog Treats'}
                        />
                    </Link></p>

                </div>

                {/*========== 444444444 ===========*/}
                <div className={'text-center'}>
                    <p><b>Shop Cat Treat</b></p>
                    <p><Link to={`${appConstants.shopRoute}`} >
                        <img
                            src={'https://marvel-b1-cdn.bc0a.com/f00000000236716/cdn.shopify.com/s/files/1/0472/5922/2175/files/P_Header_Products_Cat_Mobile_2x_f38aa5a8-37f0-457f-babf-372719b5c140_1024x1024_crop_center.png?v=1614338209'}
                            width={'400px'}
                            alt={'Cat Treats'}
                        />
                    </Link></p>

                </div>

            </div>
        </body>
        </React.Fragment>
    );
}

export default Page1;