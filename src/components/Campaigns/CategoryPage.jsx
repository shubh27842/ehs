/*jshint esversion: 6 */
import React, { useEffect, useState,useRef } from "react";
import Cols from "./Cols";
import { Grid, Image, Segment } from "semantic-ui-react";
import Material from "../../images/MATERIAL.jpg";
import Electrical from "../../images/ELECTRICAL.jpg";
import Ppe from "../../images/PPE.jpg";
import Hindi from "../../images/HINDI.jpg";
import { Link } from "react-router-dom";
import Bilingual from "../../images/Bilingual.jpg";
import GetBPoster from "../../images/GetBiPoster.svg";
import PosterNow from "../../images/PosterNow.svg";
import Upto50 from "../../images/Upto50Offer.svg";
import Card2 from "./Card2";
import { connect } from "react-redux";
import { getBestSeller, config } from "../../helper/apiPath";
import Axios from "axios";
import $ from "jquery";
import { findMat, findDim } from "../../helper/apiPath";
import CloseBtn from "../../images/ExitBtn.svg";
import { ModalCard } from "./Card2";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import BeforeStart from "../../images/BeforeStart.svg";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import ProductCard from "../signages/ProductCard";
import promo from "../../images/campaignImg.png";
import timer from "../../images/timerIcon.png"

const ncard = (props) => {
  return (
      <ProductCard src={props.src} name={props.title} startPrice={props.startPrice} rating={props.rating} itemBought={props.itemBought} />
  );
};

function Design() {
  return (
    <div className="design row m-0">
      <div className="ml-5">
        <p id="rightText" className="ml-5" style={{ marginTop: "10px" }}>
          Campaigns
        </p>
        <p id="rightbelow" className="ml-5" style={{ marginTop: "-10px" }}>
          Need a little Direction in your Workplace ?
        </p>
        <p id="rightdes" className="ml-5" style={{ marginTop: "-35px" }}>
          Get your Workplace/Warehouse organized with a Collection of Asset
          Markers.
        </p>
      </div>
      <div className="col row ml-5 pl-5" style={{ marginTop: "0px" }}>
        {/* <img className="ml-5 pl-5" src={Back} alt="signage background" /> */}
      </div>
    </div>
  );
}

const CampaignCard = (props) => {
  return(
    <div className="campaignCard">
        <img src={props.imgSrc} alt="campaignImg" className="campaignImg" />
        <div className=" campaignCardDetail">
          <p className="campaignCardTitle  m-0">{props.title}</p>
          <p className="campaignCardText m-0">{props.details}</p>
        </div>
    </div>
  );
};


const CategoryPage = (props) => {
  const [posterData, setPosterData] = React.useState([]);
    const [authUser, setAuthUser] = React.useState("");

  useEffect(() => {
    Axios.get(
      getBestSeller + "/campaigns",
      config(
        props.loginResponse.token || localStorage.getItem("ehstoken12345678910")
      )
    )
      .then((res) => {
        setPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
    
     if (JSON.parse(localStorage.getItem("userDetails123")))
       setAuthUser(
         JSON.parse(localStorage.getItem("userDetails123")).emailid ||
           JSON.parse(localStorage.getItem("userDetails123")).phonenumber
       );
  }, [props.loginResponse.token]);

  const cardDet = [
    { src: Hindi, title: "Fit-India" },
    { src: Bilingual, title: "Monsoon-Safety" },
    { src: Ppe, title: "Work-Right" },
    { src: Electrical, title: "Home-Alone" },
    { src: Material, title: "Lab-and-School-Safety" },
    { src: Material, title: "Nature Safety" },
  ];

  const twoPosters = [GetBPoster, PosterNow];

  const [bottomDet, setBottomDet] = useState({});

  const addToCart = (bottomDet) => {
    setBottomDet(bottomDet);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(bottomDet);
  };

  const [selectedModal, setSelectedModal] = React.useState({});

  const selectedModalCard = (data) => {
    setSelectedModal(data);
    $("#modalOpen").trigger("click");
  };

  const [selectMatDim, setMatDim] = useState({
    Material: { one: false, two: false, three: false },
    Dimension: { one: false, two: false, three: false },
  });

  let card1Det, card2Det;
  try {
    card1Det = {
      select: "Material",
      box: [
        {
          src: selectedModal.material[0].imgUrl,
          title: selectedModal.material[0].title,
          name: "one",
          select: "Material",
        },
        {
          src: selectedModal.material[1].imgUrl,
          title: selectedModal.material[1].title,
          name: "two",
          select: "Material",
        },
        {
          src: selectedModal.material[2].imgUrl,
          title: selectedModal.material[2].title,
          name: "three",
          select: "Material",
        },
      ],
    };
    card2Det = {
      select: "Dimension",
      box: [
        {
          src: selectedModal.dimension[0].imgUrl,
          title: selectedModal.dimension[0].title,
          cus: true,
          cusWidth: "90",
          cusHeight: "50",
          name: "one",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[1].imgUrl,
          title: selectedModal.dimension[1].title,
          cus: true,
          cusWidth: "100",
          cusHeight: "60",
          name: "two",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[2].imgUrl,
          title: selectedModal.dimension[2].title,
          cus: true,
          cusWidth: "120",
          cusHeight: "80",
          name: "three",
          select: "Dimension",
        },
      ],
    };
  } catch (e) {}

  const card3Det = {
    select: "Quantity",
    quantity: 1,
    material: "Material: " + findMat(selectMatDim.Material),
    dimension: "Dimensions:" + findDim(selectMatDim.Dimension),
    price: selectedModal.originalPrice,
  };

  const ModalDet = {
    src: selectedModal.imgUrl,
    title: selectedModal.name,
    select: "Select Material",
    selectedMatDim: selectMatDim,
    card1: card1Det,
    card2: card2Det,
    card3: card3Det,
  };

  const [modalCarousel, setModalCar] = useState({
    one: true,
    two: false,
    three: false,
  });

  const setModalCarousel = (e) => {
    if (e.target.id === "one") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "two") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "three") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const setModalCarouselb = (e) => {
    if (e.target.id === "oneb") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "twob") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "threeb") {
      setModalCar({ one: false, two: false, three: true });
    }
  };
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const similarProductInfo = [
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473 },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473 },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473},
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473},
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473 },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473 },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473 },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 473},
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 780, itemsToShow: 4 }
  ];
  
  
  const similarCarousel = useRef();
  return (
    <>
      <div className="padding-10 " style={{
        background: "#F6F6F6",
        lineHeight: "45px",
        letterSpacing: "0.2",
        color: "#000"
      }}>
          <p className="campaignNav"><Link style={{color: "#333"}} to="/">Home</Link> / <span style={{ fontWeight: "700",color: "#333" }}>Campaigns</span></p>
      </div>

      <div className="  comingSoonBox ">
        <img src={timer}  alt="Coming Soon" className=" d-block mx-auto my-5 comingSoonImg" />
        <p className="comingSoon  my-5 ">Coming Soon!</p>
      </div>



     <div className="d-none">
     <p className="campaignHead ">
      Spread fire safety awareness
      </p>
      <div className="campaignBanner">

      </div>
      <p className="campaignText">Omnis corporis aperiam tenetur. Sequi blanditiis et. Magni qui debitis ratione iusto est sed. Eius ab quia minus tenetur ipsam atque quaerat ratione. Repudiandae repudiandae accusantium aut odit.  Mollitia nulla debitis. Molestiae id unde. Optio fuga dolores error dolorem. Vel mollitia itaque non in.  Soluta cupiditate natus. Nihil earum accusamus qui ut porro repellendus alias voluptatibus aut. Rem inventore qui et sed voluptatem. Qui velit nesciunt architecto labore provident delectus eius. Ut sed asperiores autem quia in.<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span><span onClick={myFunction} id="myBtn" role="button" style={{color: "#40CEFC",textDecorationLine: "underline"}}>Read more</span></p>
      

              {/* <div className="margin-10 mt-5">
                <div className="text-right d-none d-sm-block mb-3">
                  <span className="mr-5">Page 1-6</span>
                  <span role="button" className="seemore " style={{lineHeight: "24px", fontWeight: "600"}} >View All</span>
                </div>     
            
                <div className="d-sm-flex  d-none" >
                    <ArrowBackIosRoundedIcon onClick={() => similarCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block" style={{width: "40px",height: "40px",mixBlendMode: "normal", opacity: "0.54"}} />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={similarCarousel} style={{opacity: "1!important"}}>
                        {similarProductInfo.map(ncard)}
                    </Carousel>  
                    <ArrowForwardIosRoundedIcon onClick={() => similarCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block"  style={{width: "40px",height: "40px",mixBlendMode: "normal", opacity: "0.54"}}  />
                </div>

                <div className="d-sm-none productsOnMobile ">
                    {similarProductInfo.slice(0,4).map(ncard)} 
                </div>
                <p role="button" className="seemore text-center  d-sm-none mt-3 mx-auto" style={{lineHeight: "24px", fontWeight: "600"}} >View All</p>
                </div> */}

                <hr className="campaignLine" />
                <p className="campaignHead  m-0">
                  More Campaigns
                </p>

                <div className="moreCampaigns margin-10">
                  <CampaignCard imgSrc={promo} title="Protect yourself and others" details="Dolorem recusandae placeat excepturi natus. Dicta laborum quo. Asperiores aut dicta. Perspiciatis ipsum magni. Iure dolorem ad." />
                  <CampaignCard imgSrc={promo} title="Protect yourself and others" details="Dolorem recusandae placeat excepturi natus. Dicta laborum quo. Asperiores aut dicta. Perspiciatis ipsum magni. Iure dolorem ad." />
                  <CampaignCard imgSrc={promo} title="Protect yourself and others" details="Dolorem recusandae placeat excepturi natus. Dicta laborum quo. Asperiores aut dicta. Perspiciatis ipsum magni. Iure dolorem ad." />
                  <CampaignCard imgSrc={promo} title="Protect yourself and others" details="Dolorem recusandae placeat excepturi natus. Dicta laborum quo. Asperiores aut dicta. Perspiciatis ipsum magni. Iure dolorem ad." />
                </div>
     </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
export default connect(mapStateToProps)(CategoryPage);
