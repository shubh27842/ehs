import React, {useState, useEffect} from "react";
import { useParams ,Link} from "react-router-dom";
import Axios from "axios";
import {API} from "../../backend";
import designerProfile from "../../images/designerProfile.png";
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Upto50 from "../../images/Upto50Offer.svg";
import ProductCard from "../signages/ProductCard";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#003459',
      }
    }
  });

const ProductsByAuthor = () =>{
    const {authorSlug} = useParams();
    //let authorName = authorSlug.repalce("-"," ");
    const [author,setAuthor] = useState({});
    const [posterData, setPosterData] = useState([]);
    const [skip,setSkip] = useState(0)
    const [limit,setLimit] = useState(16);
    const [noOfPage,setNoOfPage] = useState(1);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        Axios.get(`${API}posters/get_poster_by_author`,{params: {author_slug: authorSlug}}).then((res)=>{
            console.log(res);
            setPosterData(res.data.data.postersOfAuthor);
            setNoOfPage(Math.ceil(res.data.data.count/limit));
            setAuthor(res.data.data.authorDetails);
        }).catch((err)=>{
            console.log(err);
        });
    },[authorSlug])

    return(
        <>
             <div className="container-fluid pt-3 pb-sm-5 pb-4 mb-4 mb-sm-5 padding-10" style={{ background: "#F6F6F6", color: "#333333" }}>
              <div className="">
                <Link to="/" style={{color: "#333333"}}>Home </Link>/ 
                <Link style={{color: "#333333"}} className="text-capitalize" to={`/cat/posters`}> Posters</Link> / 
                <span style={{color: "#333333"}} className="text-capitalize"> {author.author_name ? author.author_name : "Author"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <div className="mr-sm-5 mt-sm-3 ">
                    <p className=" catHead text-capitalize text-left  my-0 ">
                        {author.author_name ? author.author_name : "Author"}
                    </p>
                    <div className=" mt-0 designation text-capitalize">{author.author_designation ? author.author_designation : ""}</div>
                    <p className="authorInfo d-none d-sm-block">
                    {author.author_description ? author.author_description: ""}
                    </p>
                </div>
                <div className=" ">
                    <img  className="authorProfile" src={author.auth_image ? author.auth_image : designerProfile} alt="profile" />
                </div>
              </div>
              <p className="authorInfo d-sm-none d-block mt-3">
              {author.author_description ? author.author_description: ""}
                    </p>
            </div>

            <div className="padding-10  ">
        <div className="productListing ">
        
       {
        posterData && posterData.map((ncard,i) =>{
          //console.log(ncard,"Posss");
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
                id={ncard._id} 
                key={i} 
              />
            )
          })
       }
        </div>
      </div>
      {noOfPage>1?(
        <ThemeProvider theme={theme}>
        <div className="d-flex  paginationMargin ">
          <Pagination 
            count={noOfPage} 
            page={page}
            onChange={(e,val)=>{
              setPage(val);
              setSkip((val-1)*limit);
              }}
            color="primary"  
            className="mx-auto"  />
        </div>
      </ThemeProvider>
      ):""}
      
      
     
            <div className="didNotFindBottomBanner mx-auto mb-5 d-none d-sm-block">
                <p className="text1 d-inline-block ">Did not find what you were looking for?</p>
                <div className="d-inline-block float-none float-sm-right">
                    <p className="text2 ">Contact us and get the perfect print made for you</p>
                    <p className="text3 ">Share your design or slogan with us, and our designers will create one for you!</p>
                </div>
            </div>       
            

            
      
            <img src={Upto50} className="mx-auto d-block d-sm-none bottomBanner50 " alt="footerBanner" /> 

        </>
    )
}

export default ProductsByAuthor;