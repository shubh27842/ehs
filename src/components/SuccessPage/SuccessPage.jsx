import React,{useRef,useEffect,useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import vector from "../../images/confetti.png";
import ProductCard from "../signages/ProductCard";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import {API} from "../../backend";
import Axios from "axios";


const SuccessPage = () => {
    const [wishlist,setWishlist] = useState([]);
    
  const [authUser, setAuthUser] = React.useState("");

    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("userDetails123"))){
            setAuthUser(
              JSON.parse(localStorage.getItem("userDetails123")).emailid ||
                JSON.parse(localStorage.getItem("userDetails123")).phonenumber
            );
           
            }
        if(authUser){
            Axios.get(`${API}auth/get_user_details_by_id`,{   
              headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
              params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
            }).then((res)=>{
            //  console.log(res);
              setWishlist(res.data.data[0].wishList);
             // console.log(res.data.data[0].wishlist);
             // console.log(res.data.data[0].cart)
            }).catch((err)=>{ 
              console.log(err);
            })
           }
           
    },[])

    
    const breakPoints = [
        { width: 1, itemsToShow: 2, itemsToScroll: 2 },
        { width: 780, itemsToShow: 4 }
      ];


    const wishlistCarousel = useRef();
    return(
        <div>
            <div className="container-fluid padding-10" style={{ background: "#F6F6F6" }}>
                <div className="pt-2 pb-lg-2">
                    <Link to="/" className="text-dark "><ArrowBackIosRoundedIcon  style={{width: "12px",marginBottom: "2px" }} /> Back to Home </Link>
                </div>  
            </div>
            <div className="d-flex flex-column " style={{
                marginTop: "57px",

            }}>
                <img src={vector} alt="img" className="mx-auto" />
                <p className="successText  mb-0 mx-auto">Your order has been successfully placed!</p>
                <p className="mt-0 " style={{
                    fontWeight: "normal",
                    fontSize: "24px",
                    lineHeight: "34px",
                    textAlign: "center",
                    letterSpacing: "0.2px",
                    color: "#000000",

                }}>
    Thank you for buying from EHSPrints
                </p>
                <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center mx-auto  successPageBtnBox" >
                    <Link to="/dashboard">
                    <button className="successPageBtn my-4" style={{
                        color: "#F2994A",
                        background: "#fff"
                    }}>View Order Details</button>
                    </Link>
                    <Link to="/">
                    <button className="successPageBtn" style={{
                        background: "#F2994A",
                        color: "#fff"
                    }}>Continue Shopping</button>
                    </Link>
                    
                </div>
            </div>
        
            <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "50px 0 50px 0"
        }}></div>


              <div className="padding-10 wishlistCarouselMargin">
                    <h2 className=" d-inline-block otherCarouselHead" >My Wishlist</h2>
                    
                     
                    <Link role="button" to="/dashboard" className=" d-inline-block float-right viewAll" >View All</Link>
       

                   {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */} 
                <div className=" d-sm-flex d-none" style={{opacity: "1"}}>
                    <ArrowBackIosRoundedIcon onClick={() => wishlistCarousel.current.slidePrev()} role="button" id="prevBtn1" className="border my-auto d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={wishlistCarousel} style={{opacity: "1!important"}}>
                    {wishlist.map((ncard,i)=>{
                           return(
                            <ProductCard 
                            product={ncard}
                                    src={ncard.imgUrl[0]} 
                                    name={ncard.name} 
                                    slug={ncard.slug} 
                                    startPrice={ncard.originalPrice} 
                                    rating={ncard.average_rating} 
                                    itemBought={ncard.bought} 

                                    catId= {ncard.category[0]._id} 
                                    subCatId={ncard.subCategory[0]._id}
                                    catSlug = {ncard.category[0].cat_slug}
                                    subCatSlug = {ncard.subCategory[0].sub_cat_slug}
                                    id={ncard._id} 
                                    key={i} 
                                />
                           )
                        })}
                        
                    </Carousel>  
                    <ArrowForwardIosRoundedIcon onClick={() => wishlistCarousel.current.slideNext()} role="button" id="prevBtn1" className="border my-auto  d-none d-sm-block"  />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {wishlist.slice(0,4).map((ncard,i)=>{
                           return(
                            <ProductCard 
                            product={ncard}
                                    src={ncard.imgUrl[0]} 
                                    name={ncard.name} 
                                    slug={ncard.slug} 
                                    startPrice={ncard.originalPrice} 
                                    rating={ncard.average_rating} 
                                    itemBought={ncard.bought} 
                                    
                                    catId= {ncard.category[0]._id} 
                                    subCatId={ncard.subCategory[0]._id}
                                    catSlug = {ncard.category[0].cat_slug}
                                    subCatSlug = {ncard.subCategory[0].sub_cat_slug}
                                    id={ncard._id} 
                                    key={i} 
                                />
                           )
                        })}
                </div>
            </div>            
        </div>
    )
}


export default SuccessPage;