/*jshint esversion: 6 */
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hindi from "../../images/posterCategory/HINDI.png";
import English from "../../images/posterCategory/ENGLISH.png";
import Bilingual from "../../images/posterCategory/BILINGUAL.png";
import Upto50 from "../../images/Upto50Offer.svg";
import { connect } from "react-redux";
import Axios from "axios";
import { API } from "../../backend";
import $ from "jquery";
import Card from "./Card";
import "./category.css"
import "../homepage/bestsellers/bestsellers.css";
import SafeTwo from "../../images/BeSafe.png";
import Mind from "../../images/Mind.png";
import BeforeStart from "../../images/BeforeStart.png";
import FloorImg from "../../images/FloorImg.png";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel,  { consts } from "react-elastic-carousel";
import Spinner from "react-loading";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const ncard = (val,i) => {
  return (
      <Card src={val.imgUrl} title={val.title} cat='posters' id={val._id} key={i} />
  );
};


const ImgBox = (props) => {
  return (
    <div className="  imgBox ">
    <Link to={`/${props.catSlug}/subcat/bestsellers`}>
      <img className="  m-0" id="imgBoxImage" src={props.src} alt="poster" />
    </Link>
    <Link to={`/${props.catSlug}/subcat/bestsellers`} style={{textDecorationLine: "none"}}>
    <p className=" mt-sm-1 mt-0 mb-0 " id="imgBoxTitle">
        {props.title}
      </p>
    </Link>
      
    </div>
  );
};

const CategoryPage = (props) => {
  const {catSlug} = useParams();
  const [categories,setCategories] = useState([{subCategory: []}]);
  const [bestSeller, setBestSeller] = useState([]);
  const [shopBySubCategoryCards,setShopBySubCategoryCards] = useState([]);
  const [categoryId,setCategoryId] = useState("");
  let catName = catSlug.replace("-"," ");

  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    if(loading){
        MySwal.fire({
            html: <div className="d-flex justify-content-around  align-items-center py-3">
                      <div className=" ">
                          <Spinner type="spinningBubbles" color="#2D9CDB" />  
                      </div>
                      <div style={{
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "#000000",
                      }}>Loading... Please wait.</div>
                  </div>
            ,
            showConfirmButton: false,
            padding: "10px 0px 5px 0px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            position: "center",
            scrollbarPadding: false,
            allowOutsideClick: false,
            showClass: {
              popup: 'animate__animated animate__zoomIn  animate__faster',
              backdrop: 'animate__animated animate__fadeIn animate__faster'
            },
            hideClass: {
              popup: 'animate__animated animate__zoomOut  animate__faster',
              backdrop: 'animate__animated animate__fadeOut animate__faster'
            }
    })
    }else{
        MySwal.close()
    }
},[loading]);

  useEffect(() => {
      setLoading(true);
         Axios.get(`${API}category/getCategoryById`,{params: {cat_slug: catSlug}}).then((res)=>{
          setShopBySubCategoryCards(res.data.data[0].sub_category);
          setLoading(false);
        }).catch((err)=> {
            console.log(err);
        });
     

        Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: catSlug, bestseller: 1}}).then((res)=>{
          setBestSeller(res.data.data.postersExists);
         //console.log("bestseller",res);
         setLoading(false);
        }).catch((err)=> {
          console.log(err);
        });
      
      
       },[catSlug]);
    
  const shopByLanguageCards = [
    {src: Hindi, title: "Hindi" },
    {src: English, title: "English"},
    { src: Bilingual, title: "BiLingual-Hindi-and-English" },
  ];

  //For Bestsellers
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
  $(document).ready(()=>{
    $(".carousel").carousel({
      interval: false
    });
    $('#nextBtn').click(()=>{
      $('#myCarousel').carousel('next');
    });
  
    $('#prevBtn').click(()=>{
      $('#myCarousel').carousel('prev');
    });
  });
  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1000, itemsToShow: 5, itemsToScroll: 4  }
  ];
  const breakPointsBestseller = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 1, itemsToScroll: 1 }
  ];
  const posterCatCarousel = useRef();
  const posterCat2Carousel = useRef();
  const bestseller = useRef();
  return (
    <>
        <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
          <div className="pt-2 pb-lg-2">
              <Link to="/" className="text-dark">Home </Link>/<span className="font-weight-bold text-capitalize" > {catName}</span>
          </div>
          <div className="d-flex mt-lg-2">
            <h1 className="mt-2 catHead text-capitalize" >
            {catName}
            </h1>
            <img src={Upto50} className="ml-auto d-none d-sm-block" style={{width: "640px",height: "96px"}} alt="banner" />
          </div>
        </div>
        <div  className="margin-9  ">
          <h2 className="shopByHead d-inline-block " >Shop by Category</h2>
          {
            (shopBySubCategoryCards && shopBySubCategoryCards.length > 5)?(
              <div className=" carouselArrow ">
              <ArrowBackIosRoundedIcon onClick={() => posterCatCarousel.current.slidePrev()} role="button" className=" mt-auto mb-auto mr-4 " id="prevBtn" />
              <ArrowForwardIosRoundedIcon onClick={() => posterCatCarousel.current.slideNext()} role="button" className="mt-auto mb-auto " id="nextBtn" />
              </div>
            ): ""
          }
         
               
            <Carousel className=" shopByCategoryCarousel   p-0 " outerSpacing={0}  itemPosition={consts.START}  breakPoints={breakPoints}  pagination={false} showArrows={false} ref={posterCatCarousel} style={{opacity: "1!important"}} showEmptySlots>
                {shopBySubCategoryCards && shopBySubCategoryCards.map((val,i) => {
                    
                              return (
                                  <Card src={val.imgUrl} title={val.title} cat={catSlug}  sub_cat_slug={val.sub_cat_slug} key={i} />
                              );
                            })}
            </Carousel>                
          
        </div>
        

      {
        (catName === "posters") ? (
          <>
          <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "50px 0 20px 0"
      }}></div>
          <div  className="margin-9 ">
          <h2 className="shopByHead   d-inline-block" >Shop by Language</h2>
          <div className="carouselArrow d-block d-sm-none">
          <ArrowBackIosRoundedIcon onClick={() => posterCat2Carousel.current.slidePrev()} role="button" className=" mt-auto mb-auto mr-4  " id="prevBtn" />
          <ArrowForwardIosRoundedIcon onClick={() => posterCat2Carousel.current.slideNext()} role="button" className=" mt-auto mb-auto " id="prevBtn"  />
         
          </div>       
            <Carousel className="d-flex  shopByCategoryCarousel px-0 mx-0" itemPosition={consts.START} breakPoints={breakPoints}  pagination={false} showArrows={false} ref={posterCat2Carousel} style={{opacity: "1!important"}} showEmptySlots>
                {shopByLanguageCards && shopByLanguageCards.map((val,i) => {
                    
                    return (
                        <Card src={val.imgUrl} title={val.title} cat={catSlug}  sub_cat_slug={val.title.toLowerCase()} key={i} />
                    );
                  })}
            </Carousel>                
        </div>
          </>
        ): ""
      }
      <div className="bestSellerCarouselItem" style={{background: "#F6F6F6"}}>
          <h2 className="promiseHeading1  d-inline-block">Bestsellers</h2>
          <div className="carouselArrow mt-4">
            <ArrowBackIosRoundedIcon id="prevBtn1"  role="button" className="mr-4 " onClick={() => bestseller.current.slidePrev()} />
            <ArrowForwardIosRoundedIcon id="prevBtn1" role="button" onClick={() => bestseller.current.slideNext()}  />
          </div>
          <Carousel className="px-2 px-sm-0" pagination={false}  breakPoints={breakPointsBestseller}  showArrows={false} ref={bestseller} style={{opacity: "1!important"}} 
          >
              <div className="active"  id="carouselItem2">
                {bestSeller && bestSeller.slice(0,4).map((val,i) => {
                                          return (
                                              <ImgBox src={val.imgUrl[0]} title={val.name} catSlug={catSlug} key={i} />
                                          );
                                        })}
              </div>
              
              <div id="carouselItem2" className="">
                { bestSeller && bestSeller.slice(4,8).map((val,i) => {
                                          return (
                                              <ImgBox src={val.imgUrl[0]} title={val.name} catSlug={catSlug} key={i} />
                                          );
                                        })}
              </div>
              
          </Carousel>
          <Link to={`/${catSlug}/subcat/bestsellers`}><p role="button" className="seemore">View All</p></Link>
      </div>          
      <img src={Upto50} className="mx-auto d-block  bottomBanner50" alt="banner" /> 
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
export default connect(mapStateToProps)(CategoryPage);
