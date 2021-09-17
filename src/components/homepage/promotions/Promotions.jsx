import React from "react";
import p1 from "../../../images/promo1.jpg";
import p2 from "../../../images/promo2.jpg";
import p3 from "../../../images/promo3.jpg";
import p4 from "../../../images/promo4.jpg";
import "./card.css";

const Data = [
    {
        imgsrc: p1,
        title: "Protect yourself and others",
        desc: "Shop for COVID Posters"
    },
    {
        imgsrc: p2,
        title: "Spread fire safety awareness",
        desc: "Eye-catching Safety graphics"
    },
    {
        imgsrc: p3,
        title: "Improve workflow",
        desc: "Shop for worker safety posters"
    },
    {
        imgsrc: p4,
        title: "Occupational safety and health",
        desc: "When practical pairs with"
    },
];

const Card = (props) => {
    return (
        <div className=" m-0 promoCard br-22 ">
            <img src={props.imgsrc} className="promoCardImg br-22" alt="off" />
            <div className="cardBody mt-2  text-center d-flex flex-column justify-content-between">
                <div className="cardTitle  text-capitalize mb-0">{props.title}</div>
                <div className="cardText  mb-0 mt-auto" >{props.desc}</div>
            </div>
        </div>
    );
};
const ncard = (val) => {
    return (
        <Card imgsrc={val.imgsrc} title={val.title} desc={val.desc} />
    );
};

const Promotions = () => {
    return(
        <div className="promo  p-0  margin-10 ">
            { Data.map(ncard)}
        </div>
    );
};

export default Promotions;