import React from "react";
import tag1 from "../../../images/tag1.png";
import tag2 from "../../../images/tag2.png";
import tag3 from "../../../images/tag3.png";
import "./printPromise.css"

const Card = (props) => {
    return (
        <div className="inline promiseCard p-2 py-4 marginPP my-3">
            <img src={props.imgsrc} className="cardImg " alt="promiseTag" />
            <p className=" titleText">{props.title}</p>
            <p className=" descText">{props.desc}</p>
        </div>
    );
};

const PrintPromise = () => {
    return(
    <div className="mx-auto py-2" style={{ backgroundColor: "#F6F6F6", }}>
        <p className="promiseHeading   mx-auto">The EHS Prints Promise</p>
        <div className="container-fluid py-5 mx-auto text-center">
            <div className="mx-auto text-center">
            <Card imgsrc={tag1} className="col-md-4 " title="Effusive Designs" desc="We provide you a huge variety of highly impactful Visual communications designed by skilled artists all around the Globe!" />
            <Card imgsrc={tag2} className="col-md-4" title="High Quality Prints" desc="Prints from all our category are printed &nbsp;digitally on best quality durable materials providing effective communication!" />
            <Card imgsrc={tag3} className="col-md-4 " title="Door Step Service" desc="We provide all your orders at your doorstep in least possible time in safest packaging with help of best logistics firms." />
            </div>
        </div>
    </div>
    );
};

export default PrintPromise;


// import React from "react";
// import tag1 from "../../../images/tag1.png";
// import tag2 from "../../../images/tag2.png";
// import tag3 from "../../../images/tag3.png";
// import "./printPromise.css"

// const Card = (props) => {
//     return (
//         <div className="d-flex flex-column promiseCard ">
//             <img src={props.imgsrc} className="cardImg  m-0" alt="promiseTag" />
//             <p className=" titleText m-0 mb-0 ">{props.title}</p>
//             <p className=" descText ">{props.desc}</p>
//         </div>
//     );
// };
// const Card2 = (props) => {
//     return (
//         <div className="d-flex flex-column  promiseCard2 py-2 ">
//             <img src={props.imgsrc} className="cardImg2 " alt="promiseTag" />
//             <p className="titleText m-0 mb-0 ">{props.title}</p>
//             <p className="descText ">{props.desc}</p>
//         </div>
//     );
//  };

// const PrintPromise = () => {
//     return(
//     <div className="d-flex flex-column" style={{ backgroundColor: "#F6F6F6", }}>
//         <p className="promiseHeading   mx-auto">The EHS Prints Promise</p>
//         <div className="cardContainer   margin-10">
//             <div className="d-flex  upperBox justify-content-between mb-4">
//             <Card imgsrc={tag1} title="Effusive Designs !" desc="We provide you a huge variety of highly impactful Visual communications designed by skilled artists all around the Globe!" />
//             <Card imgsrc={tag2} title="High Quality Prints !" desc="Prints from all our category are printed digitally on best quality durable materials providing effective communication!" />
//             </div>
//             <Card2 imgsrc={tag3} title="Door Step Service !" desc="We provide all your orders at your doorstep in least possible time in safest packaging with help of best logistics firms." />
          
//         </div>
//     </div>
//     );
// };

// export default PrintPromise;