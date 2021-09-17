import React, { useState } from "react";
import "./category.css"
import $ from "jquery";
import "bootstrap";
import NoSmoke from "../../images/NoSmoke.svg";
import WearMask from "../../images/WearMask.svg";
import Fire from "../../images/Fire.svg";
import NoTouch from "../../images/NoTouch.svg";

import SafeTwo from "../../images/BeSafe.svg";
import Mind from "../../images/Mind.svg";
import BeforeStart from "../../images/BeforeStart.svg";

import FootPrint from "../../images/FootPrint.svg";
import OvalTwoMen from "../../images/OvalTwoMen.svg";
import RoundTwoMen from "../../images/RoundTwoMen.svg";
import RoundMask from "../../images/RoundMask.svg";

import FloorImg from "../../images/floor1.svg";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const ncard = (val) => {
    return (
        <ImgBox src={val.src} title={val.title} />
    );
};

const ImgBox = (props) => {
  return (
    <div className="text-center imgBox">
      <img className="imgBoxImg" src={props.src} alt="poster" />
      <p
        className="imgBoxTitle"
      >
        {props.title}
      </p>
    </div>
  );
};

$(document).ready(()=>{

  $(".carousel").carousel({
    interval: 10000
  });


  $('#nextBtn').click(()=>{
    $('#myCarousel').carousel('next');
    if($('#first').hasClass('active')){
      $('#first').toggleClass('active');
    $('#second').toggleClass('active');
    }
    else if($('#second').hasClass('active')){
      $('#second').toggleClass('active');
      $('#third').toggleClass('active');
    }
    else if($('#third').hasClass('active')){
      $('#third').toggleClass('active');
      $('#fourth').toggleClass('active');
    } else{
      $('#fourth').toggleClass('active');
      $('#first').toggleClass('active');
    }
  });

  $('#prevBtn').click(()=>{
    $('#myCarousel').carousel('prev');
    if($('#first').hasClass('active')){
      $('#first').toggleClass('active');
    $('#fourth').toggleClass('active');
    }
    else if($('#second').hasClass('active')){
      $('#second').toggleClass('active');
      $('#first').toggleClass('active');
    }
    else if($('#third').hasClass('active')){
      $('#third').toggleClass('active');
      $('#second').toggleClass('active');
    } else{
      $('#fourth').toggleClass('active');
      $('#third').toggleClass('active');
    }
  });

  $('#first').click(()=>{
    $('#myCarousel').carousel(0);
    $('#first').toggleClass('active');
    $('#second').removeClass('active');
    $('#third').removeClass('active');
    $('#fourth').removeClass('active');
  });

  $('#second').click(()=>{
    $('#myCarousel').carousel(1);
    $('#first').removeClass('active');
    $('#second').toggleClass('active');
    $('#third').removeClass('active');
    $('#fourth').removeClass('active');
    
  });

  $('#third').click(()=>{
    $('#myCarousel').carousel(2);
    $('#first').removeClass('active');
    $('#second').removeClass('active');
    $('#third').toggleClass('active');
    $('#fourth').removeClass('active');
  });
  $('#fourth').click(()=>{
    $('#myCarousel').carousel(3);
    $('#first').removeClass('active');
    $('#second').removeClass('active');
    $('#third').removeClass('active');
    $('#fourth').toggleClass('active');
  });

  $('.seemore').click(()=>{

  });
});

const PosterBestseller = () => {

    const warnImgTitle = [
        { src: NoSmoke, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: WearMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Fire, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: NoTouch, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: NoSmoke, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: WearMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Fire, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: NoTouch, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
      ];
    
      const FloorGraphicsImgTitle = [
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
      ];
    
      const awareImgTitle = [
        { src: FootPrint, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: OvalTwoMen, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
        { src: RoundTwoMen, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
        { src: RoundMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: FootPrint, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: OvalTwoMen, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: RoundTwoMen, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
        { src: RoundMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
      ];

      const [visible, setVisible] = useState(4);
      
      const showMoreCards = () =>{
        setVisible(9);
      }
      const showLessCards = () =>{
        setVisible(4);
      }


    return(
      <>
          <div className="sellerContainer border border-success padding-10" style={{backgroundColor: "#F6F6F6"}}>
              <div id="myCarousel" class="carousel slide border border-primary" data-ride="carousel" data-interval="false">
                  <div className=" mt-4">
                    <h2 className="shopByHead border d-block">Bestsellers</h2>
                    <ArrowBackIosRoundedIcon id="prevBtn"  role="button" data-slide="prev" className="  border shadow-sm rounded-circle pointer" />
                    {/* <span className="sellerHead active"  role="button" id="first">POSTERS</span>
                    <span className="sellerHead"  role="button" id="second">Signages</span>
                    <span className="sellerHead"  role="button" id="third">Floor Graphics</span>
                    <span className="sellerHead"  role="button" id="fourth">Asset Markings</span>*/}
                    <ArrowForwardIosRoundedIcon id="nextBtn" role="button" data-slide="next" className=" border shadow-sm rounded-circle pointer "  />
                  </div>
                  
              <div className="carousel-inner border  " >
                <div className="carousel-item active">
                  {FloorGraphicsImgTitle.slice(0,visible).map(ncard)}
                </div>
                <div className="carousel-item ">
                  {warnImgTitle.slice(0,visible).map(ncard)}
                </div>
                <div className="carousel-item">
                  {FloorGraphicsImgTitle.slice(0,visible).map(ncard)}
                </div>
                <div className="carousel-item">
                  {awareImgTitle.slice(0,visible).map(ncard)}
                </div>
              </div>
              
            </div>
            {visible===4 ? (
              <p role="button" className="seemore" onClick={showMoreCards}>See More</p>
            ):(
              <p role="button" className="seemore" onClick={showLessCards}>See Less</p>
            ) }
            
            
        </div>
        </>
    );
};

export default PosterBestseller;