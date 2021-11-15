import React,{useState, useEffect} from 'react';
import "./bestsellersNew.css"
import imgDummy from "../../../images/BeforeStart.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Axios from "axios";
import {API} from "../../../backend";
import {Link} from "react-router-dom"
import './bestsellersNew.css'

const Card = (props) => {
    return(
        <div className="br-22 bestsellerCard d-flex flex-column justify-content-start">
            <img src={props.imgUrl} className="br-22 bestsellerImg"  />
            <p className="bestsellerText  mb-0 px-2">{props.title}</p>
        </div>
    )
};

const  BestsellersNew = (props) =>  {

    const [category,setCategory] = useState('posters');
  const [postersBestselller,setPostersBestseller] = useState([]);
  const [signagesBestselller,setSignagesBestseller] = useState([]);
  const [floorgraphicsBestselller,setFloorgraphicsBestseller] = useState([]);
  const [assetmarkingsBestselller,setAssetmarkingsBestseller] = useState([]);

    useEffect(()=>{
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "posters", bestseller: 1}}).then((res)=>{
        setPostersBestseller(res.data.data.postersExists);
    //    console.log("bestseller",res);
      }).catch((err)=> {
        console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "signages", bestseller: 1}}).then((res)=>{
       setSignagesBestseller(res.data.data.postersExists);
    //   console.log("bestseller",res);
      }).catch((err)=> {
        console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "floor-graphics", bestseller: 1}}).then((res)=>{
        setFloorgraphicsBestseller(res.data.data.postersExists);
    //    console.log("bestseller",res);
      }).catch((err)=> {
        console.log(err);
      });
      Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: "asset-markings", bestseller: 1}}).then((res)=>{
        setAssetmarkingsBestseller(res.data.data.postersExists);
    //   console.log("bestseller",res);
      }).catch((err)=> {
       console.log(err);
      });
    },[]);

    return (
        <div className="padding-10">
            <p className="bestsellerTitle">Our Bestsellers</p> 
            <div className="my-3">
                <p className="bestsellerSubHead">Posters</p>
                <div className="bestsellerContainer">
                    
                    {
                        postersBestselller.length>0 &&  postersBestselller.slice(0,4).map((val,i)=>{
                            return(
                                <Link to ={`/${val.category[0].cat_slug}/${val.subCategory[0].sub_cat_slug}/product/id=${val._id}`}> <Card title={val.name ? val.name : "-"} imgUrl={val.imgUrl.length>0 ? val.imgUrl[0] : ""} ></Card></Link>
                             )
                        })
                    }
                </div> 
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Signages</p>
                <div className="bestsellerContainer">
                    
                    {
                        signagesBestselller.length>0  && signagesBestselller.slice(0,4).map((val,i)=>{
                            return(
                                <Link to ={`/${val.category[0].cat_slug}/${val.subCategory[0].sub_cat_slug}/product/id=${val._id}`}> <Card title={val.name ? val.name : "-"} imgUrl={val.imgUrl.length>0 ? val.imgUrl[0] : ""} /></Link>
                            )
                        }) 
                    }
                </div>
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Floor Graphics</p>
                <div className="bestsellerContainer">
                    
                    {
                        floorgraphicsBestselller && floorgraphicsBestselller.slice(0,4).map((val,i)=>{
                            return(
                              <Link  to="">  <Card title={val.name ? val.name : "-"} imgUrl={val.imgUrl.length>0 ? val.imgUrl[0] : ""} /></Link>
                            )
                        })
                    }
                </div> 
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Asset Markings</p>
                <div className="bestsellerContainer">
                    
                    {
                        assetmarkingsBestselller && assetmarkingsBestselller.slice(0,4).map((val,i)=>{
                            return(
                               <Link  to=""> <Card title={val.name ? val.name : "-"} imgUrl={val.imgUrl.length>0 ? val.imgUrl[0] : ""} /></Link>
                            )
                        })
                    }
                </div> 
            </div>
        </div>
    )
}

export default BestsellersNew;