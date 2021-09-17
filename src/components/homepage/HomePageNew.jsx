/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import "./HomePageNew.css"
import Collections from "./collections/Collections";
import BottomImg from "../../images/BottomImg.svg";
import Promotions from "./promotions/Promotions"
import PrintPromise from "./printPromise/PrintPromise";
// import Bestsellers from "./bestsellers/Bestsellers";
import Bestsellers from "./bestsellers/BestsellersNew";
import Visitor from "./visitor/Visitor";
import satisfaction from "../../images/Satisfaction.png";
import customer from "../../images/customer.png";
import payment from "../../images/payment.png";
import homepagePoster from "../../images/homePagePoster.png"
import paymentNew from "../../images/credit-card.png"
import customerNew from "../../images/customer-care.png"
import satisfactionNew from "../../images/comment.png"
import posterTag from "../../images/Group_99.png";
import signagesTag from "../../images/Group_100.png";
import floorTag from "../../images/Group_101.png";
import assetTag from "../../images/Group_102.png";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [authUser, setAuthUser] = React.useState("");
  React.useEffect(() => {
     document.title = "Ehs prints";
     if (JSON.parse(localStorage.getItem("userDetails123")))
       setAuthUser(
         JSON.parse(localStorage.getItem("userDetails123")).emailid ||
           JSON.parse(localStorage.getItem("userDetails123")).phonenumber
       );
   }, [props.loginResponse]);
   const screenWidth = window.innerWidth;
  return (
    <>
        <div className="padding-10 d-flex justify-content-between mb-4  mt-4">
            <div className="">
                <p className="taglineN">The Best Environment, Health and Safety Prints for your Workplace</p>
                <div className="d-lg-block d-none" >
                    <p className="taglineN1">What would you like to order today</p>
                    <div className="d-flex flex-row  justify-content-between">
                        <Link to="/cat/posters" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={posterTag} alt="poster" className="" />
                            <p className="tagText mb-0">Posters</p>
                        </div>
                        </Link>
                        <Link to="/cat/signages" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={signagesTag} alt="poster" className="" />
                            <p className="tagText mb-0">Signages</p>
                        </div>
                        </Link>
                        <Link to="/cat/floor-graphics" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={floorTag} alt="poster" className="" />
                            <p className="tagText mb-0">Floor Graphics</p>
                        </div>
                        </Link>
                        <Link to="/cat/asset-markings" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={assetTag} alt="poster" className="" />
                            <p className="tagText mb-0">Asset Markings</p>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="  ">
                <img src={homepagePoster} className="homepagePoster" />
            </div>
        </div>
        <div className="padding-10 mt-2 d-block d-lg-none mb-4" >
                    <p className="taglineN1">What would you like to order today</p>
                    <div className="d-flex flex-row  justify-content-between">
                        <Link to="/cat/posters" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={posterTag} alt="poster" className="tagImgP" />
                            <p className="tagText mb-0">Posters</p>
                        </div>
                        </Link>
                        <Link to="/cat/signages" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={signagesTag} alt="poster" className="tagImg" />
                            <p className="tagText mb-0">Signages</p>
                        </div>
                        </Link>
                        <Link to="/cat/floor-graphics" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={floorTag} alt="poster" className="tagImgD" />
                            <p className="tagText mb-0">Floor Graphics</p>
                        </div>
                        </Link>
                        <Link to="/cat/asset-markings" className="tagHome">
                        <div className="Rectangle_68_ke" id="Rectangle_68_ke">
                            <img src={assetTag} alt="poster" className="tagImgD" />
                            <p className="tagText mb-0">Asset Markings</p>
                        </div>
                        </Link>
                       
                    </div>
                </div>
      <Promotions />
      <PrintPromise />
      <Visitor />
      <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "20px 0 20px 0"
      }}></div>
      <Bestsellers />
      <div className=" d-flex justify-content-around align-items-center mx-auto mb-3 mb-sm-4" style={{width: `${screenWidth>480 ? "1200px" : "360px" }`, height: `${screenWidth>480 ? "140px" : "40px" }`,marginTop: "30px"}}>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: `${screenWidth> 480 ? "90px" : "40px"}`,height: `${screenWidth> 480 ? "90px" : "40px"}`, borderRadius: "50%",background: "#F4F3F4"}}>
            {/* <img src={payment} alt="payment" className="" style={{transform: "scale(0.9)"}} /> */}
            <img src={paymentNew} alt="payment" className="" style={{transform: `${screenWidth> 480 ? "scale(1)" : "scale(0.4)"}`}} />
          </div>
          <div className="d-flex flex-column" style={{marginLeft: `${screenWidth > 480 ? "35px" : "5px" }`}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: `${screenWidth>480 ? "18px" : "8px" }`,
              lineHeight: `${screenWidth>480 ? "23px" : "10px" }`,
              color: "#000000",
            }}>Payment</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: `${screenWidth>480 ? "16px" : "7px" }`,
              lineHeight: `${screenWidth>480 ? "20px" : "9px" }`,
              color: "#9A999F",
            }}>Secure</p>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: `${screenWidth> 480 ? "90px" : "40px"}`,height: `${screenWidth> 480 ? "90px" : "40px"}`, borderRadius: "50%",background: "#F4F3F4"}}>
          {/* <img src={customer} alt="customer" className="" style={{transform: "scale(0.9)"}} /> */}
          <img src={customerNew} alt="customer" className="" style={{transform: `${screenWidth> 480 ? "scale(1)" : "scale(0.4)"}`}} />
          </div>
          <div className="d-flex flex-column align-items-start  " style={{marginLeft: `${screenWidth > 480 ? "35px" : "5px" }`}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: `${screenWidth>480 ? "18px" : "8px" }`,
              lineHeight: `${screenWidth>480 ? "23px" : "10px" }`,
              color: "#000000",
            }}>24/7 Customer Care</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: `${screenWidth>480 ? "16px" : "7px" }`,
              lineHeight: `${screenWidth>480 ? "20px" : "9px" }`,
              color: "#9A999F",
            }}>Mon to Fri (9:00 to 17:00)</p>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: `${screenWidth> 480 ? "90px" : "40px"}`,height: `${screenWidth> 480 ? "90px" : "40px"}`, borderRadius: "50%",background: "#F4F3F4"}}>
            {/* <img src={satisfaction} alt="satisfaction" className="" style={{transform: "scale(0.9)"}} /> */}
            <img src={satisfactionNew} alt="satisfaction" className="" style={{transform: `${screenWidth> 480 ? "scale(1)" : "scale(0.4)"}`}} />
          </div>
          <div className="d-flex flex-column" style={{marginLeft: `${screenWidth > 480 ? "35px" : "5px" }`}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: `${screenWidth>480 ? "18px" : "8px" }`,
              lineHeight: `${screenWidth>480 ? "23px" : "10px" }`,
              color: "#000000",
            }}>100% Satisfaction</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: `${screenWidth>480 ? "16px" : "7px" }`,
              lineHeight: `${screenWidth>480 ? "20px" : "9px" }`,
              color: "#9A999F",
            }}>Feedbacks</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
