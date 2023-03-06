import React from "react";
import {appConstants} from "../../../headers/appConstants";
import {Link} from "react-router-dom";
import css from "../Page1.module.scss";

const CardPet = ({item}:any) => {

    const  blackTest1 ={
            'color': "red",
            'text-decoration': "none"
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((val:any) => {
                        return (
                            <div
                                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                                key={val.id}
                            >
                                <div className="card-img-top text-center">
                                    <img src={val.img} alt={val.name} className="photo w-75" />
                                </div>

                                <div className="card-body">
                                    <div className="card-title fw-bold fs-5">
                                        <Link
                                            // className={css.LinkTagBlackColor}
                                            className='blackTest'
                                            to={`${appConstants.detailRoute}/${val.id}`}
                                        >
                                            <td>{val.name}</td>
                                        </Link>

                                        {/*&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;*/}
                                        <br/>
                                        $ {val.price}
                                    </div>
                                    <div>Package Size: {val.weight}</div>
                                    <div className="card-text">{val.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style>
                {`.blackTest{
                    color: black;
                    text-decoration: none; 
                }`}
            </style>
        </>
    );
};

export default CardPet;
