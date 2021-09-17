/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import EhsLogo from "../../../images/EhsLogo.svg";
import Vector from "../../../images/Vector.svg";
import ShopCart from "../../../images/Shop.svg";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";
import { Link } from "react-router-dom";
import {API} from "../../../backend";
import $ from "jquery";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Person, PersonOutline } from "@material-ui/icons";

const NavBar = (props) => {
  const [authUser, setAuthUser] = React.useState("");
  const [find, setFind] = React.useState("");
  const [categories,setCategories] = useState([{sub_category: [],title: ""},{sub_category: [],title: ""},{sub_category: [],title: ""},{sub_category: [],title: ""}]);
  const [cart,setCart] = useState([])

  useEffect(() => {
    Axios.get(`${API}category/getCategoryById`).then((res)=>{
      setCategories(res.data.data);
      //console.log(res)
      //console.log(res.data.data)
    }).catch((err)=> {
        console.log(err);


        
    },[]);
    
    console.log('categories',categories)

    if (JSON.parse(localStorage.getItem("userDetails123"))){
          Axios.get(`${API}auth/get_user_details_by_id`,
          {   
            headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
            params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id,onlyCart: 1}
          }).then((res)=>{
            //console.log(res);
            setCart(res.data.data[0].cart)
          }).catch((err)=>{
            console.log(err);
          })

        setAuthUser(
          JSON.parse(localStorage.getItem("userDetails123")).emailid ||
            JSON.parse(localStorage.getItem("userDetails123")).phonenumber
        );
    }else{
      
        if(localStorage.getItem("ehsCart")){
          setCart(JSON.parse(localStorage.getItem("ehsCart")))
        }
      
    }
      
  }, [props.loginResponse]);

  
  const [searchCat, setCat] = useState("All Categories");

  const searchCatogoriesOnClick = (event) => {
    setCat(event.target.text);
    $("#searchDropCatId").removeClass("slideSearchBox")
    // window.location.replace(
    //   "http://" + window.location.host + "/" + event.target.text.toLowerCase()
    // );
  };
  const search_catogories = [
    "All Categories",
    "Posters",
    "Signages",
    "Floor Graphics",
    "Asset Marking",
  ];
  const hamburger = (e) => {
    if(window.innerWidth <= 480){
      if( $("#searchBoxMobile").hasClass('slideSearchBox')){
        $("#searchBoxMobile").removeClass('slideSearchBox');
        $("#searchDropCatId").removeClass("slideSearchBox");
        $("#navbarNav").addClass('animate__slideInLeft');
        $("#navbarNav").removeClass('animate__slideOutLeft');
      }else if($("#navbarNav").hasClass('animate__slideInLeft')){
        $("#navbarNav").addClass('animate__slideOutLeft');
        $('.overlay').addClass(' animate__fadeOut');
        $('.overlay').removeClass('menuBackBlur animate__fadeIn');
        $("#navbarNav").removeClass('animate__slideInLeft');
      }else{
        $("#navbarNav").addClass('animate__slideInLeft');
        $('.overlay').addClass('menuBackBlur animate__fadeIn');
        $('.overlay').removeClass(' animate__fadeOut');
        $("#navbarNav").removeClass('animate__slideOutLeft');
      }
    }else{
      // let url = e.target.href.split('/');
      // let cat = url[url.length-1];
      //if(cat === "posters" || cat === "signages" || cat === "floor-graphics" || cat === "asset-markings")
           //window.location.replace(`/cat/${cat}`)
    }
  };
  const searchIcon = () => {
    if($("#navbarNav").hasClass('animate__slideInLeft')){
      $("#navbarNav").addClass('animate__slideOutLeft');
      $("#navbarNav").removeClass('animate__slideInLeft');
      $("#searchBoxMobile").addClass('slideSearchBox');
    }else if( $("#searchBoxMobile").hasClass('slideSearchBox')){
      $("#searchBoxMobile").removeClass('slideSearchBox');
      $("#searchDropCatId").removeClass("slideSearchBox");
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
    }else{
      $("#searchBoxMobile").addClass('slideSearchBox');
      $('.overlay').addClass('menuBackBlur animate__fadeIn');
      $('.overlay').removeClass('animate__fadeOut');
    }
  };
  const posterDropdownArrow = () => {
    if($(".posterDropdown").hasClass("animate__slideInLeft")){
      $(".posterDropdown").removeClass('animate__slideInLeft');
      $(".posterDropdown").addClass('animate__slideOutLeft');
    }else{
      $(".posterDropdown").addClass('animate__slideInLeft');
      $(".posterDropdown").removeClass('animate__slideOutLeft');
    }
  };
  const posterDropdown = () => {
    if($(".posterDropdown").hasClass("animate__slideInLeft")){
      $(".posterDropdown").removeClass('animate__slideInLeft');
      $(".posterDropdown").addClass('animate__slideOutLeft');
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }
  };
  const signageDropdownArrow = () => {
    if($(".signageDropdown").hasClass("animate__slideInLeft")){
      $(".signageDropdown").removeClass('animate__slideInLeft');
      $(".signageDropdown").addClass('animate__slideOutLeft');
    }else{
      $(".signageDropdown").addClass('animate__slideInLeft');
      $(".signageDropdown").removeClass('animate__slideOutLeft');
    }
  };
  const signageDropdown = () => {
    if($(".signageDropdown").hasClass("animate__slideInLeft")){
      $(".signageDropdown").removeClass('animate__slideInLeft');
      $(".signageDropdown").addClass('animate__slideOutLeft');
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }
  };
  const floorDropdownArrow = () => {
    if($(".floorDropdown").hasClass("animate__slideInLeft")){
      $(".floorDropdown").removeClass('animate__slideInLeft');
      $(".floorDropdown").addClass('animate__slideOutLeft');
    }else{
      $(".floorDropdown").addClass('animate__slideInLeft');
      $(".floorDropdown").removeClass('animate__slideOutLeft');
    }
  };
  const floorDropdown = () => {
    if($(".floorDropdown").hasClass("animate__slideInLeft")){
      $(".floorDropdown").removeClass('animate__slideInLeft');
      $(".floorDropdown").addClass('animate__slideOutLeft');
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }
  };
  const assetDropdownArrow = () => {
    if($(".assetDropdown").hasClass("animate__slideInLeft")){
      $(".assetDropdown").removeClass('animate__slideInLeft');
      $(".assetDropdown").addClass('animate__slideOutLeft');
    }else{
      $(".assetDropdown").addClass('animate__slideInLeft');
      $(".assetDropdown").removeClass('animate__slideOutLeft');
    }
  };
  const assetDropdown = () => {
    if($(".assetDropdown").hasClass("animate__slideInLeft")){
      $(".assetDropdown").removeClass('animate__slideInLeft');
      $(".assetDropdown").addClass('animate__slideOutLeft');
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }
  }
  const campaignDropdownArrow = () => {
    if($(".campaignDropdown").hasClass("animate__slideInLeft")){
      $(".campaignDropdown").removeClass('animate__slideInLeft');
      $(".campaignDropdown").addClass('animate__slideOutLeft');
    }else{
      $(".campaignDropdown").addClass('animate__slideInLeft');
      $(".campaignDropdown").removeClass('animate__slideOutLeft');
    }
  };
  const campaignDropdown = () => {
    if($(".campaignDropdown").hasClass("animate__slideInLeft")){
      $(".campaignDropdown").removeClass('animate__slideInLeft');
      $(".campaignDropdown").addClass('animate__slideOutLeft');
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }
  };
  const overlayFun = () => {
    if($("#navbarNav").hasClass('animate__slideInLeft')){
      $("#navbarNav").addClass('animate__slideOutLeft');
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
      $("#navbarNav").removeClass('animate__slideInLeft');
    }else if( $("#searchBoxMobile").hasClass('slideSearchBox')){
      $("#searchBoxMobile").removeClass('slideSearchBox');
      $("#searchDropCatId").removeClass("slideSearchBox");
      $('.overlay').addClass(' animate__fadeOut');
      $('.overlay').removeClass('menuBackBlur animate__fadeIn');
    }
  };
  const searchCatDropdown = () => {
    if($("#searchDropCatId").hasClass("slideSearchBox"))
    {
      $("#searchDropCatId").removeClass("slideSearchBox");
    }else{
      $("#searchDropCatId").addClass("slideSearchBox");
    } 

   
      
  };
  return (
    <div >
        <div className="d-sm-none d-block" style={{width: "100%", height: "58px"}}></div>
        <nav className="container-fluid  navbar navbar-expand-sm navbar-dark d-flex "  id="navBarTop"> 
          <div className="d-block d-sm-none p-0 border-none hamburger " onClick={hamburger} >
            <MenuIcon className=" ml-1 mr-1" style={{color: "white",transform: "scale(1.5,1.9)"}} />
          </div>  
        <Link className="navbar-brand ehsLogoImg" to="/">
          <img src={EhsLogo} alt="Ehs Logo" />
        </Link>
        <SearchIcon
                className="d-block d-sm-none ml-auto searchIcon"
                aria-hidden="true"
                style={{ color: "white", border: "0px", width: "10%",height: "8%" }}
                onClick={searchIcon}
              />
           
        <li className="nav-item mb-0 mr-0 mt-1 d-block  d-sm-none" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="ml-1" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                    
                  }}
                >
                  {
                    (cart)?(
                      cart.length
                    ):(
                      "0"
                    )
                  }
                </span>
              </Link>
            </li>
        <div className="d-flex flex-column  flex-sm-row  mt-1 mt-sm-0  align-items-center" id="searchBoxMobile" style={{width: "100%"}}>
          <div className="form-inline input-group  mx-auto  p-0 searchBar" >
            <div  className="input-group-prepend   dropdown ">
              <button className="btn btn-secondary bg-white textColorAndWeight shadow-none searchDropBtn"
                type="button"
                id="dropdownMenuButton" onClick={searchCatDropdown}
              >
                <img src={Vector} className="mr-sm-2 mr-1 "  alt="" />
                {searchCat}
              </button>
              <div
                className="px-sm-2 pb-sm-2 pt-sm-1 dropdown-item dropdown-content animate__animated animate__faster"
                id="searchDropCatId" 
                >
                {search_catogories && search_catogories.map((v, i) =>
                  v === "All Categories" ? (
                    <>
                      <Link
                        key={i}
                        to="/"
                        onClick={searchCatogoriesOnClick}
                        className="searchCategory dropdown-item px-sm-3  searchCatMobile"
                        style={{color: "#757575"}}
                        
                      ><img src={Vector} className="mr-sm-3 mr-1 "  alt="" />
                        {v}
                      </Link>
                    </>
                  ) : (
                    <Link
                      key={i}
                      to={"/cat/" + v.toLowerCase()}
                      onClick={searchCatogoriesOnClick}
                      className="searchCategory  dropdown-item  btnCat  searchCatMobile"
                      style={{color: "#757575"}}
                      
                    >
                      {v}
                    </Link>
                  )
                )}
              </div>
            </div>
              <SearchIcon
                className="pl-3 bg-white d-none d-sm-block"
                aria-hidden="true"
                style={{ color: "grey", height: "35px",width: "40px", borderTop: "1px solid #757575",borderBottom: "1px solid #757575" }}
              />
            

            <input
              type="text"
              className="form-control bg-white shadow-none searchBarInput"
              placeholder="Search for posters, signages and more"
              onChange={(e) => setFind(e.target.value)}
            />
         
          </div>
          <button className="d-block d-sm-none float-right ml-auto mt-2" style={{
              width: "100px",
              height: "35px",
              border: "1px solid #F2994A",
              boxSizing: "border-box",
              borderRadius: "4px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "14px",
              textAlign: "center",
              letterSpacing: "0.2px",
              color: "#F2994A",
              background: "transparent",
            }}
            onClick={searchIcon}
             >Search</button>
         <div
              className="nav-item d-none d-lg-flex  mx-auto "
              style={{
                display: "flex",
                color: "#ffffff",
                alignItems:'center',
                
               
                
              }}
            >
              {authUser ? (
                <Link to="/dashboard" className=" textColorAndWeight text-decoration-none"><AccountCircleIcon className="" style={{transform: "scale(1.4,1.4)"}} /></Link>
                
              ) : (
                <>
                   <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none"
                    style={{
                      color: 'white',
                      padding: '2px',
                    }}
                  >
                    Login
                  </Link>{" "}
                  |{" "} 
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none"
                    style={{
                      display: 'flex',
                      alignItems:'center',
                      color: "#ffffff",
                      padding: '2px',
                    
                    }}
                  >
                  Register
                  </Link>
                </>
              )}
            </div>
          <div className="nav-item   d-none d-sm-block" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                  
                  }}
                >
                  {
                    (cart)?(
                      cart.length
                    ):(
                      "0"
                    )
                  }
                </span>
              </Link>
            </div>
       </div>
      </nav>


      <nav className="navbar navbar-expand-sm mt-0  pt-0 pb-0 pb-sm-2 " id="navbarContainer">
        <div className="collapse navbar-collapse animate__animated animate__faster  " id="navbarNav">
          <ul className="navbar-nav  d-flex justify-content-between " style={{width: "100%"}}>
            <li className="nav-item mb-0  mt-5 mt-sm-0">
              <div className="dropdown">
                <Link
                  to={`/cat/${categories[0].cat_slug}`}
                  className="nav-link text-white textColorAndWeight btn shadow-none drpbut menuRemove d-inline-block" 
                  onClick={hamburger}
                  style={{ backgroundColor: "#003459", border: "0px" }}
                >
                  Posters
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block posterDropdownArrow" onClick={posterDropdownArrow} style={{width: "15px", color: "white"}} />
                <div className="dropdown-content p-sm-3 p-0 posterDropdown animate__animated  animate__faster">
                <Link
                  className="dropdown-item d-block d-sm-none posterDropdownArrow backMenu mt-2  animate__animated  animate__faster" onClick={posterDropdownArrow}
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  {categories && (categories[0].sub_category).map((val,i)=>{
                    return(
                      <Link
                         className="searchCategory dropdown-item posterDropdownArrow menuRemove text-capitalize   " 
                         onClick={posterDropdown}
                          to={`/${categories[0].cat_slug}/subcat/${val.sub_cat_slug}`}
                          key={i}
                      >
                    {val.title}
                  </Link>
                    )
                  })}
                
                  
                </div>
              </div>
            </li>
            <li className="nav-item mb-0  ">
              <div className="dropdown">
                <Link
                  to={`/cat/${categories[1].cat_slug}`}
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove  d-inline-block" 
                  onClick={hamburger}
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  
                >
                  Signages
                </Link><ArrowForwardIosRoundedIcon className="mt-1 float-right d-sm-none d-inline-block signageDropdownArrow" onClick={signageDropdownArrow} style={{width: "15px", color: "white"}} />
                <div className="dropdown-content signageDropdown animate__animated  animate__faster  p-sm-3 p-0">
                  <Link
                  className="dropdown-item d-block d-sm-none signageDropdownArrow backMenu  mt-3" onClick={signageDropdownArrow}
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  {categories && (categories[1].sub_category).map((val,i)=>{
                    return(
                      <Link
                         className="searchCategory dropdown-item signageDropdownArrow menuRemove text-capitalize   " 
                         onClick={signageDropdown}
                          to={`/${categories[1].cat_slug}/subcat/${val.sub_cat_slug}`}
                          key={i}
                          >
                        {val.title}
                      </Link>
                    )
                  })}
                 </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <div className="dropdown">
                <Link
                  to={`/cat/${categories[2].cat_slug}`}
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove d-inline-block" onClick={hamburger}
                  style={{ backgroundColor: "#003459", border: "0px" }}
                >
                  Floor Graphics
                </Link>
                <ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block floorDropdownArrow" onClick={floorDropdownArrow} style={{width: "15px", color: "white"}} />
                <div className="dropdown-content  p-sm-3 p-0 floorDropdown animate__animated  animate__faster">
                <Link
                  className="dropdown-item floorDropdownArrow d-block d-sm-none backMenu  mt-3" onClick={floorDropdownArrow}
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  {categories && (categories[2].sub_category).map((val,i)=>{
                    return(
                      <Link
                         className="searchCategory dropdown-item floorDropdownArrow menuRemove text-capitalize   " 
                         onClick={floorDropdown}
                          to={`/${categories[2].cat_slug}/subcat/${val.sub_cat_slug}`}
                          key={i}
                      >
                    {val.title}
                  </Link>
                    )
                  })}
                  
                </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <div className="dropdown">
              <Link
                to={`/cat/${categories[3].cat_slug}`}
                className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove d-inline-block" onClick={hamburger}
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Asset Marking
              </Link>
              <ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block assetDropdownArrow" onClick={assetDropdownArrow} style={{width: "15px", color: "white"}} />
                <div className="dropdown-content  p-sm-3 p-0 assetDropdown animate__animated  animate__faster">
                <Link
                  className="dropdown-item assetDropdownArrow d-block d-sm-none backMenu  mt-3" onClick={assetDropdownArrow}
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  {categories && (categories[3].sub_category).map((val,i)=>{
                    return(
                      <Link
                         className="searchCategory dropdown-item assetDropdownArrow menuRemove text-capitalize   " 
                         onClick={assetDropdown}
                          to={`/${categories[3].cat_slug}/subcat/${val.sub_cat_slug}`}
                          key={i}
                      >
                    {val.title}
                  </Link>
                    )
                  })}
                  
                </div>
              </div>             
            </li>
            <li className="nav-item mb-0 ">
              <div className="dropdown">
                <Link
                  to="/campaigns"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove d-inline-block" onClick={hamburger}
                  style={{ backgroundColor: "#003459", border: "0px" }}
                >
                  Campaigns
                </Link><ArrowForwardIosRoundedIcon className="d-none float-right mt-1 d-sm-none  campaignDropdownArrow" onClick={campaignDropdownArrow} style={{width: "15px", color: "white"}} />
                <div className="dropdown-content d-none p-sm-3 p-0 campaignDropdown animate__animated  animate__faster">
                <Link
                  className="dropdown-item campaignDropdownArrow d-block d-sm-none  backMenu  mt-3"  onClick={campaignDropdownArrow} 
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block campaignDropdownArrow" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/FIT-INDIA"
                  >
                    Fit India
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/MONSOON-SAFETY"
                  >
                    Monsoon Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/WORK-RIGHT"
                  >
                    Work Right
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/HOME-ALONE"
                  >
                    Home Alone
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/LAB-AND-SCHOOL-SAFETY"
                  >
                    Lab And School Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove" onClick={campaignDropdown}
                    to="/campaigns/NATURE-AND-SAFETY"
                  >
                    Nature And Safety
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <Link className="nav-link text-white textColorAndWeight menuRemove" onClick={hamburger} to="/#">
                Create your own
              </Link>
            </li>
            <li className="nav-item mb-0 ">
              <Link className="nav-link text-white textColorAndWeight menuRemove" onClick={hamburger} to="/#">
                Resources
              </Link>
            </li>
            <div className='d-flex '>
            <li className="nav-item mb-0 mr-3">
              <Link
                to="/about"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0" onClick={hamburger}
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                About
              </Link>
              </li>
            <li className="nav-item mb-0 ">
              <Link
                to="/contact"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0" onClick={hamburger}
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Contact
              </Link>
              </li>
            </div>
           
            <div className="nav-item mt-auto d-block d-sm-none" >
            <li
              className="nav-item ml-4 mt-5 menuRemove"
              style={{
                marginTop: "2px",
                display: "inline-block",
                marginLeft: "6px",
                color: "#F2994A",
              }}
            >
              {authUser ? (
                <p
                  className="text-white textColorAndWeight text-decoration-none"
                  style={{ marginTop: "13px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none" onClick={hamburger}
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none" onClick={hamburger}
                  >
                    Register
                  </Link>
                </>
              )}
            </li>
            {authUser ? (
              <>
                <li className="nav-item ml-4">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                    style={{ backgroundColor: "#003459", border: "0px" }}
                  >
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ml-4">
                  <p>{"                   "}</p>
                </li>
              </>
            )}
              </div>
          </ul>
        </div>
        <div className="overlay animate__animated animate__faster" onClick={overlayFun}></div>
      </nav>
      
    </div>
  );
};

export default NavBar;
