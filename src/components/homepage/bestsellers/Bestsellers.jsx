import React, { useState , useRef, useEffect} from "react";
import "./bestsellers.css";
import "bootstrap";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from "../../../backend";


const ImgBox = (props) => {
  return (
    <div className="  imgBox ">
      <img className="  m-0" id="imgBoxImage" src={props.src} alt="poster" />
      <p className=" mt-sm-1 mt-0 mb-0 " id="imgBoxTitle">
        {props.title}
      </p>
    </div>
  );
};

  

const Bestsellers = () => {

  const [category,setCategory] = useState('posters');
  const [postersBestselller,setPostersBestseller] = useState([]);
  const [signagesBestselller,setSignagesBestseller] = useState([]);
  const [floorgraphicsBestselller,setFloorgraphicsBestseller] = useState([]);
  const [assetmarkingsBestselller,setAssetmarkingsBestseller] = useState([]);

    useEffect(()=>{
      
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "posters", bestseller: 1}}).then((res)=>{
        setPostersBestseller(res.data.data.postersExists);
       //console.log("bestseller",res);
      }).catch((err)=> {
        console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "signages", bestseller: 1}}).then((res)=>{
       setSignagesBestseller(res.data.data.postersExists);
      // console.log("bestseller",res);
      }).catch((err)=> {
        console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "floor-graphics", bestseller: 1}}).then((res)=>{
        setFloorgraphicsBestseller(res.data.data.postersExists);
       //console.log("bestseller",res);
      }).catch((err)=> {
        //console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "asset-markings", bestseller: 1}}).then((res)=>{
        setAssetmarkingsBestseller(res.data.data.postersExists);
      // console.log("bestseller",res);
      }).catch((err)=> {
       // console.log(err);
      });
    },[])


      const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 780, itemsToShow: 1}
      ];

      const bestseller = useRef();

      const pagination = ({ pages, activePage, onClick }) => {
        
        return (
        <div className="  bestsellerPagination "  >  
             
        {pages.map((page,i) => {
            const isActivePage = activePage === page
            return (
              <>
                <div  role="button" id="sellerH"  key={page} onClick={(e) => {onClick(page)
                  setCategory(e.target.innerHTML.toLowerCase());
                }} active={isActivePage}  className={isActivePage ? "active sellerHead" : " "} >
                {
                  (page===0)? <span className="sellerHead "  role="button" >Posters </span>
                   : ((page===1) ? <span className="sellerHead "  role="button" >Signages</span> : 
                   ((page===2) ? <span className="sellerHead "  role="button" >Floor Graphics </span> : 
                                 <span className="sellerHead "  role="button" >Asset Markings </span>))
                }
                </div>
              </>
              )
            })}
        </div>
        );
    };

    return(
      <>
        <div className="sellerContainer ">
                <h2 className="promiseHeading mb-sm-5 mb-3">Our Bestsellers</h2>
                <div className="d-flex justify-content-between  mx-sm-5 mx-2 mb-4">
                  <ArrowBackIosRoundedIcon id="prevBtn"  role="button" onClick={() => bestseller.current.slidePrev()} />
                  <ArrowForwardIosRoundedIcon id="nextBtn" role="button" onClick={() => bestseller.current.slideNext()}  />
                </div>
                <div className="" style={{background: "#F6F6F6"}}>
                <Carousel className=" w-100  "  breakPoints={breakPoints}  showArrows={false} ref={bestseller} style={{opacity: "1!important"}} 
                renderPagination={pagination}>
                    <div className="  active   "  id="carouselItem">
                      {postersBestselller && postersBestselller.slice(0,4).map((val,i) => {
                            return (
                                <ImgBox src={val.imgUrl[0]} title={val.name} key={i} />
                            );
                        })}
                    </div>
                    <div id="carouselItem" className="">
                      {signagesBestselller && signagesBestselller.slice(0,4).map((val,i) => {
                            return (
                                <ImgBox src={val.imgUrl[0]} title={val.name} key={i} />
                            );
                        })}
                      
                    </div>
                    <div id="carouselItem" className="">
                      {floorgraphicsBestselller && floorgraphicsBestselller.slice(0,4).map((val,i) => {
                            return (
                                <ImgBox src={val.imgUrl[0]} title={val.name} key={i} />
                            );
                        })}
                    </div>
                    <div id="carouselItem" className="">
                      {assetmarkingsBestselller && assetmarkingsBestselller.slice(0,4).map((val,i) => {
                            return (
                                <ImgBox src={val.imgUrl[0]} title={val.name} key={i} />
                            );
                        })}
                    </div>
                </Carousel>
                <Link to={`${category}/subcat/bestsellers`}><p role="button" className="seemore" >See More</p></Link>
            
          </div>          
        </div>
      </>
    );
};

export default Bestsellers;