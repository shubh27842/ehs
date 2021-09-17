import React from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import {Link} from "react-router-dom";
import img1 from "../../images/posterCircle.png";
import img2 from "../../images/pictogramCircle.png";
import img3 from "../../images/signCircle.png";
import img4 from "../../images/signagesCircle.png";
import img5 from "../../images/floorCircle.png";
import img6 from "../../images/MiscellaneousCircle.png";

const About = () => {
    return (
        <>
          <div className=" my-sm-2 my-1 padding-10" >
                <Link to="/" className="text-dark "><ArrowBackIosRoundedIcon  style={{width: "12px",marginBottom: "2px" }} /> Back to Home </Link>
          </div>
          <div className=" padding-10 py-sm-4 py-2" style={{ background: "#F6F6F6" }}>
            <h1 className=" catHead text-capitalize text-left" >
                About Us
            </h1>
          </div>
          <p className="aboutTagLine mx-auto my-sm-5 my-3  ">
                    EHS posters is a subsidiary of Dichroic Labs LLP incorporated in January 2017.<br />
                    E-marketplace for Industrial content development & improving Industrial operational safety & standards.
          </p>
          <p className="aboutHead">Our Products</p>
          <div className="aboutBanners padding-10 ">
              <div className=" ">
                  <img src={img1} alt="circle" className="aboutImg" />
                  <p className="aboutTag2 ">Posters</p>
              </div>
              <div className="">
                  <img src={img2} alt="circle" className="aboutImg" />
                  <p className="aboutTag2">Pictograms</p>
              </div>
              <div>
                  <img src={img3} alt="circle" className="aboutImg" />
                  <p className="aboutTag2">Sign Templates</p>
              </div>
              <div>
                  <img src={img4} alt="circle" className="aboutImg" />
                  <p className="aboutTag2">Signages</p>
              </div>
              <div>
                  <img src={img5} alt="circle"  className="aboutImg"/>
                  <p className="aboutTag2">Floor Graphics</p>
              </div>
              <div>
                  <img src={img6} alt="circle" className="aboutImg" />
                  <p className="aboutTag2">Miscellaneous</p>
              </div>
          </div>
            <div className="aboutTextContainer padding-10 my-sm-5 my-4 pb-sm-5 pb-4">
                <p className="aboutText">People’s health and enabling better outcomes through prevention & keeping informed is our duty. EHS Prints leverages advanced technology and deep design/thought process and consumer insights to deliver integrated solutions.</p>
                <p className="aboutText">The company is an innovation leader in posters, safety Signage, floor graphics & asset markings due to its vast panel of artist/designer/industry experts & online presence for all (Artist, Distributor and Customer). We facilitate customized digital asset portfolio creation through E central.</p>
                <p className="d-none d-sm-block aboutText">We provide and implement unique safe environment solutions by understanding business processes, application & infrastructure of our customers. Lot of our work is a mandatory operational requirement.</p>
                <p className="d-none d-sm-block aboutText">We have developed D.I.Y tools also to facilitate end user & we do provide educational/informational data on our website www.ehsprints.com.We ensure your sign displays a powerful message with impact at right place</p>
            </div>
        </>
    );
};


export default About;