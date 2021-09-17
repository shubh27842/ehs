/*jshint esversion: 6 */
import React from "react";
import "./Collections.css";
import PosterImg from "../../../images/Posters.svg";
import Signages from "../../../images/Signages.svg";
import FloorImg from "../../../images/FloorGraphics.svg";
import AssetImg from "../../../images/AssetMarking.svg";
import { Link } from "react-router-dom";

const Card = (props) => {
 let  title= props.title.replace(" ","-")
  return (
    <Link to={"/cat/" + title.toLowerCase()}>
      <div
        className="posterCard " >
        <div className="  d-block ">
          <img  
            className="mx-auto d-block   cardImg" 
            src={props.src}
            alt={props.alt}
          />
          <p
            className=" posterTitle"
          >
            {props.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Collections = () => {
  return (
        <div className="posters padding-10 ">
          <Card src={PosterImg} alt="Posters" title="Posters" />
          <Card src={Signages} alt="Signages" title="Signages" />
          <Card src={FloorImg} alt="Floor Graphics" title="Floor Graphics"/>
          <Card src={AssetImg} alt="Asset Markings" title="Asset Markings" />
        </div>
  );
};
export default Collections;
