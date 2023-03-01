import React from "react";

const Card = ({item}:any) => {
// const Card = () => {
//
//     const Data = [
//         {
//             id: "1",
//             title: "Poha",
//             category: "Breakfast",
//             price: "$1",
//             img: "https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
//             desc: " Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples",
//         },
//         {
//             id: "2",
//             title: "Upma",
//             category: "Breakfast",
//             price: "$1",
//             img: "https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
//             desc: " A quintessential South Indian Breakfast! Made with protein-packed urad dal and semolina followed by crunchy veggies and curd, this recipe makes for a hearty morning meal. With some grated coconut on top, it gives a beautiful south-Indian flavour.",
//         }]
//     const item = Data;
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((Val:any) => {
                        return (
                            <div
                                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                                key={Val.id}
                            >
                                <div className="card-img-top text-center">
                                    <img src={Val.img} alt={Val.title} className="photo w-75" />
                                </div>
                                <div className="card-body">
                                    <div className="card-title fw-bold fs-4">
                                        {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                                        {Val.price}
                                    </div>
                                    <div className="card-text">{Val.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;
