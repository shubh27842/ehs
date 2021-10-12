import React from "react";
import "./visitor.css";

const Visitor = () => {
    return(
        <div className="visitor-container-wrap">
            <div  className="d-flex  visitorContainer ">
            <p className="visitor  " >4500+ <span className="visitorHead ">VISITORS</span></p>
            <span className="my-auto mx-auto dot"></span>
            <p className="visitor ">1100+ <span className="visitorHead">CUSTOMERS</span></p>
            <span className="my-auto mx-auto dot"></span>
            <p className="visitor ">250+ <span className="visitorHead">DESIGNERS</span></p>
        </div>

        </div>
        
    );
};

export default Visitor;