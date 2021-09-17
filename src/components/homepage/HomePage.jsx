/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import BottomImg from "../../images/BottomImg.svg";
import Promotions from "./promotions/Promotions"
import PrintPromise from "./printPromise/PrintPromise";
import Bestsellers from "./bestsellers/Bestsellers";
import Visitor from "./visitor/Visitor";
import satisfaction from "../../images/Satisfaction.png";
import customer from "../../images/customer.png";
import payment from "../../images/payment.png";

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
  
  return (
    <>
      <Design />
      <Collections />
      <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "0 0 60px 0"
      }}></div>
      <Promotions />
      <PrintPromise />
      <Visitor />
      <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "20px 0 20px 0"
      }}></div>
      <Bestsellers />
      <div className="d-none d-sm-flex justify-content-around align-items-center mx-auto" style={{width: "1200px", height: "140px",marginTop: "30px"}}>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: "90px",height: "90px", borderRadius: "50%",background: "#F4F3F4"}}>
            <img src={payment} alt="payment" className="" style={{transform: "scale(0.9)"}} />
          </div>
          <div className="d-flex flex-column" style={{marginLeft: "35px"}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
            }}>Payment</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#9A999F",
            }}>Secure</p>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: "90px",height: "90px", borderRadius: "50%",background: "#F4F3F4"}}>
          <img src={customer} alt="customer" className="" style={{transform: "scale(0.9)"}} />
          </div>
          <div className="d-flex flex-column align-items-start  " style={{marginLeft: "35px"}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
            }}>24/7 Customer Care</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#9A999F",
            }}>Mon to Fri (9:00 to 17:00)</p>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <div className="d-flex justify-content-center align-items-center" style={{width: "90px",height: "90px", borderRadius: "50%",background: "#F4F3F4"}}>
            <img src={satisfaction} alt="satisfaction" className="" style={{transform: "scale(0.9)"}} />
          </div>
          <div className="d-flex flex-column" style={{marginLeft: "35px"}}>
            <p className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
            }}>100% Satisfaction</p>
            <p  className=" mb-0" style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#9A999F",
            }}>Feedbacks</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
