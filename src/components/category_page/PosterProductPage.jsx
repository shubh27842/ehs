import Rating from "@material-ui/lab/Rating";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import dimension1 from "../../images/Dimension1.svg"
import "bootstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import $ from "jquery";
import { LinearProgress, CircularProgress, Box, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import ProductCard from "../signages/ProductCard";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import Material1 from "../../images/Fold.svg";
import Material2 from "../../images/Hand.svg";
import designerProfile from "../../images/designerProfile.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Axios from "axios";
import { API } from "../../backend";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Spinner from "react-loading";
import CartContext from "../../helper/cartContext";
import { ControlCamera } from "@material-ui/icons";
const MySwal = withReactContent(Swal);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F2994A"
        }
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                borderRadius: 4,
            },
            bar1Determinate: {
                borderRadius: 4
            },
            colorPrimary: {
                backgroundColor: "#D2D2D2"
            }
        },
        MuiCircularProgress: {
            root: {
                borderRadius: 4
            },
            circleDeterminate: {
                borderRadius: 4
            }
        }
    }
});

const ReviewCard = (props) => {

    /*Axios.get(`${API}auth/get_user_details_by_id`,{   
        headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
        params: {userId: props.userId}
    }).then((res)=>{
        console.log(res.data.data[0].name)
    }).catch((err)=>{
        console.log(err);
    
})*/

    return (
        <div className="border p-2  mr-2" style={{
            width: "200px",
            height: "113px",
            position: "relative"
        }}>
            <div className="row ">
                <p className="col-6 " style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    lineHeight: "18px"
                }}>User Name</p>
                <div className="col-2"></div>
                <span className="  mr-0 col-4 float-right " style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "11px",
                    lineHeight: "18px",
                    color: "#757575",

                }}>{props.rating} <StarIcon style={{ width: "13px", color: "#F2C94C" }} /></span>
            </div>

            <p className="" style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "10px",
                lineHeight: "15px",


            }}>{props.feedback}</p>

        </div>
    );
};

$(document).ready(() => {

    $(".carousel").carousel({
        interval: false
    });


    $('#nextBtn').click(() => {
        $('#myCarousel').carousel('next');
    });

    $('#prevBtn').click(() => {
        $('#myCarousel').carousel('prev');
    });
});

const PosterProductPage = (props) => {
    const [authUser, setAuthUser] = React.useState("");
    const { catSlug, subCatSlug, productId } = useParams();
    let subCatName = subCatSlug.replace("-", " ");
    let catName = catSlug.replace("-", " ");
    const [rating, setRating] = useState(0);
    const [ratingTotal, setRatingTotal] = useState([]);
    const [totalNoOfRating, setTotalNoOfRating] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [material,setMaterial] = useState("125 Micron (non-tearable)");
    const [dim,setDim] = useState("16” x 24”");
    const [finalMatDim,setFinalMatDim] = useState("");
    const [dimension,setDimension] = useState([24,36]);
    const [matDim,setMatDim] = useState([]);
    const [matNew,setMatNew] = useState([]);
    const [dimNew,setDimNew] = useState([]);
    const [product,setProduct] = useState({
        imgUrl: [],name: "",description: "",category: [{title: ""}], subCategory: [{title: ""}],tags: [],sku: "",materialDimension: []
    });
    const [youMayLike, setYouMayLike] = useState([]);
    const [similarItems, setSimilarItems] = useState([]);
    const [initialAmount, setInitialAmount] = useState();
    const [amount, setAmount] = useState(initialAmount);
    const [price, setPrice] = useState(0);
    const [author, setAuthor] = useState(null);
    const [authorPosters, setAuthorPosters] = useState([]);
    const [otherLanguagePoster, setOtherLanguagePoster] = useState([]);
    const [cartCountN, setCartCountN] = useContext(CartContext);
    let history = useHistory();


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (loading) {
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
        } else {
            MySwal.close()
        }
    }, [loading]);

    useEffect(() => {
        setLoading(true);
        Axios.get(`${API}posters/getPosterById`, { params: { poster_obj_id: productId } }).then((res) => {
            setProduct(res.data.data.posterDetails[0]);
            //console.log(res);
            setAuthor(res.data.data.posterDetails[0].authors[0]);
            setOtherLanguagePoster(res.data.data.posterDetails[0].poster_language_connector)
            setRating(res.data.data.posterDetails[0].average_rating);
            setRatingTotal(res.data.data.ratingTotalWise);
            setTotalNoOfRating(res.data.data.totalNoOfRating);
            setMatDim(res.data.data.posterDetails[0].materialDimension);
            //console.log(res.data.data.posterDetails[0])
            filterMatDim(res.data.data.posterDetails[0].materialDimension);
            setYouMayLike(res.data.data.youMayAlsoLike);
            setSimilarItems(res.data.data.realtedPosters);
            setLoading(false);
        }).catch((err) => {
            console.log(err)
        });


        if (JSON.parse(localStorage.getItem("userDetails123")))
        setAuthUser(
          JSON.parse(localStorage.getItem("userDetails123")).emailid ||
            JSON.parse(localStorage.getItem("userDetails123")).phonenumber
        );
       // console.log(authUser,localStorage.getItem("userDetails123"),product);
    },[productId]);

    const filterMatDim = (md)=>{
        matNew.length=0;
        dimNew.length=0;
        const s = md ? md.forEach(val => {
            const foundM= matNew ? matNew.find(title => val.material_title===title.material_title ): "";
            const foundD= dimNew ? dimNew.find(title => val.dimension_title===title.dimension_title ): "";
            // console.log(foundM);
            if(!foundM){
                matNew.push({material_title: val.material_title,material_img: ""});
            }
            if(!foundD){
                dimNew.push({dimension_title: val.dimension_title,dimension_img: ""});
            }
        }):"";

        // console.log(matNew);
        // console.log(dimNew);
    }

    useEffect(()=>{
        setLoading(true);
        if (author) {
            Axios.get(`${API}posters/get_poster_by_author`, {
                params: {
                    author_slug: author.author_slug,
                    limit: 4
                }
            }).then((res) => {
                // console.log(res);
                setAuthorPosters(res.data.data.postersOfAuthor);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [author])

    useEffect(() => {
        calculateAmount();
    }, [material, dim, quantity]);

    const addToCartConfirmPopup = () => {
        MySwal.fire(
            {
                html: <div className="d-flex">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <CheckCircleIcon style={{
                        color: "#F2994A",
                        position: "absolute",
                        top: "18px",
                        left: "23px",
                        background: "#FFF",
                        borderRadius: "50%",
                        border: "none",
                    }} />
                    <img src={product.imgUrl[0]} alt="productImage" className="toastImg " />
                    <div className="ml-2 ">
                        <p className="toastAddedText">Added to Cart</p>
                        <p className="qtyPopupText text-left font-weight-normal mb-1" >{product.name}</p>
                        <p className="qtyPopupText text-left mb-0" style={{ fontWeight: "600" }}>Quantity: {quantity}</p>
                        <a href="/cart"><p className="mb-0" style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            lineHeight: "20px",
                            textDecorationLine: "underline",
                            color: "#F2994A",
                            textAlign: "right"
                        }}>View Cart</p></a>
                    </div>
                </div>,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                scrollbarPadding: false,
                timer: 3000,
                showClass: {
                    popup: 'animate__animated animate__fadeIn  animate__faster',
                    backdrop: 'swal2-noanimation'
                },
                hideClass: {
                    popup: 'animate__animated animate__slideOutRight  animate__faster',
                    backdrop: 'swal2-noanimation'
                },
                customClass: "toastStructure"
            })
    }

    const addToCart = () => {
        //console.log(localStorage.getItem("ehstoken12345678910"));
        if (authUser) {
            Axios.post(`${API}auth/update_user_cart`, {
                poster_obj_id: product._id,
                material_obj_id: finalMatDim,
                quantity: quantity,
            },
                {
                    headers: { "x-access-token": localStorage.getItem("ehstoken12345678910") },
                    params: { userId: JSON.parse(localStorage.getItem("userDetails123"))._id }
                })
                .then((res) => {
                    console.log(res);
                    addToCartConfirmPopup();
                    window.location.reload(false);
                    setCartCountN(res.data.data.cart.length);
                    Axios.get(`${API}posters/getPosterById`, { params: { poster_obj_id: productId } }).then((res) => {
                        setProduct(res.data.data.posterDetails[0]);
                        console.log(res);
                        setRating(res.data.data.posterDetails[0].average_rating);
                        setRatingTotal(res.data.data.ratingTotalWise);
                        setTotalNoOfRating(res.data.data.totalNoOfRating);
                        //console.log(res.data.data.posterDetails[0])
                        setYouMayLike(res.data.data.youMayAlsoLike);
                        setSimilarItems(res.data.data.realtedPosters);
                    }).catch((err) => {
                        console.log(err)
                    });
                }).catch((err) => {
                    console.log(err);
                })
        }
        else {
            let ehsCart = [];
            let mat = {
                material_title: material,
                dimension_title: dim,
                price: price
            }
            let finalProduct = {
                productId: product._id,
                poster_details: product,
                materialDimension: mat,
                quantity: quantity,
                total: amount
            }
            let flag = false;
            if (localStorage.getItem("ehsCart")) {
                ehsCart = JSON.parse(localStorage.getItem("ehsCart"));
                const i = ehsCart.findIndex(product => product.productId === finalProduct.productId)
                if (i >= 0) {
                    ehsCart[i] = finalProduct;
                    flag = true;
                    addToCartConfirmPopup();
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 1000);
                }
            }
            if (flag === false) {
                ehsCart.push(finalProduct)
                addToCartConfirmPopup();
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            }
            localStorage.setItem("ehsCart", JSON.stringify(ehsCart));

        }
    }

    const calculateAmount = () => {
        let flag = true;
        product.materialDimension.map((val, i) => {
            if (dim === val.dimension_title && material === val.material_title) {
                setAmount(val.price * quantity);
                setPrice(val.price);
                if (product.discountValue > 0) {
                    if (product.discount_type === 1) {
                        setAmount(amount => amount - parseInt(product.discountValue))
                    } else {
                        let dis = ((val.price * quantity) * (parseInt(product.discountValue))) / 100;
                        setAmount((val.price * quantity) - dis);
                    }
                }

                setFinalMatDim(val._id);
                flag = false;
            }
        });
        if (flag)
            setAmount(NaN);
    }


    const addToWishlist = () => {
        if (authUser) {
            Axios.post(`${API}auth/add_user_details`, {
                poster_obj_id: product._id,
                add: 1
            }, {
                headers: { "x-access-token": localStorage.getItem("ehstoken12345678910") },
                params: { userId: JSON.parse(localStorage.getItem("userDetails123"))._id }
            }).then((res) => {
                // console.log(res);
                MySwal.fire(
                    {
                        html: <div className="d-flex">
                            <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                                position: "absolute",
                                top: "2px",
                                right: "2px",
                                color: "#000"
                            }} />
                            <CheckCircleIcon style={{
                                color: "#F2994A",
                                position: "absolute",
                                top: "18px",
                                left: "23px",
                                background: "#FFF",
                                borderRadius: "50%",
                                border: "none",
                            }} />
                            <img src={product.imgUrl[0]} alt="productImage" className="toastImg " />
                            <div className="ml-2 ">
                                <p className="toastAddedText">Added to Wishlist</p>
                                <p className="qtyPopupText text-left font-weight-normal mb-1" >{product.name}</p>
                                <p className="qtyPopupText text-left mb-0" style={{ fontWeight: "600" }}>Quantity: {quantity}</p>
                                <a href="/dashboard"><p className="mb-0" style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    lineHeight: "20px",
                                    textDecorationLine: "underline",
                                    color: "#F2994A",
                                    textAlign: "right"
                                }}>View Wishlist</p></a>
                            </div>
                        </div>,
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        scrollbarPadding: false,
                        timer: 3000,
                        showClass: {
                            popup: 'animate__animated animate__fadeIn  animate__faster',
                            backdrop: 'swal2-noanimation'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__slideOutRight  animate__faster',
                            backdrop: 'swal2-noanimation'
                        },
                        customClass: "toastStructure"
                    })
            }).catch((err) => {
                console.log(err);
            })
        } else {
            history.push("/login");
        }
    }

// const changeMaterialTo1 = () =>{
//     setMaterial(matNew? matNew[0].material_title: "")
//         $("#m1").addClass("selected");
//         $("#m2").removeClass("selected");
//         $("#m3").removeClass("selected");
//         calculateAmount();
// };
// const changeMaterialTo2 = () =>{
//     setMaterial(matNew? matNew[1].material_title: "");
//     $("#m1").removeClass("selected");
//     $("#m2").addClass("selected");
//     $("#m3").removeClass("selected");
//     calculateAmount();
// };
// const changeMaterialTo3 = () =>{
//     setMaterial(matNew? matNew[2].material_title: "");
//     $("#m1").removeClass("selected");
//     $("#m2").removeClass("selected");
//     $("#m3").addClass("selected");
//     calculateAmount();
// };
// const changeDimensionToS = () =>{
//     const d = [16,24];
//     setDimension(dimNew? dimNew[0].dimension_title: "");
//     setDim(dimNew? dimNew[0].dimension_title: "");
//     $("#d1").addClass("selected");
//     $("#d2").removeClass("selected");
//     $("#d3").removeClass("selected");
//     calculateAmount();
// };
// const changeDimensionToM = () =>{
//     const d = [19,27];
//     setDimension(dimNew? dimNew[1].dimension_title: "");
//     setDim(dimNew? dimNew[1].dimension_title: "");
//     $("#d1").removeClass("selected");
//     $("#d2").addClass("selected");
//     $("#d3").removeClass("selected");
//     calculateAmount();
// };
// const changeDimensionToL = () =>{
//     const d = [24,36];
//     setDimension(dimNew? dimNew[2].dimension_title: "");
//     setDim(dimNew? dimNew[2].dimension_title: "");
//     $("#d1").removeClass("selected");
//     $("#d2").removeClass("selected");
//     $("#d3").addClass("selected");
//     calculateAmount();
// };

const changeMaterial = (e)=> {
    setMaterial(e.target.innerText);
    const m = document.getElementsByClassName("mat");
    for(let i=0;i<m.length;i++){
        // console.log(m[i])
        m[i].classList.remove("selected")
    }
    e.target.classList.add("selected");
    calculateAmount();
}

const changeDimension = (e) => {
    setDim(e.target.innerText);
    const m = document.getElementsByClassName("dim");
    for(let i=0;i<m.length;i++){
        // console.log(m[i])
        m[i].classList.remove("selected")
    }
    e.target.classList.add("selected");
    calculateAmount();
}


    const increaseQty = () => {
        setQuantity(quantity + 1);
        setAmount(amount + initialAmount);
    }
    const decreaseQty = () => {
        if (quantity !== 1) {
            setQuantity(quantity - 1);
            if (quantity !== 0)
                setAmount(amount - initialAmount);
        }
    }

    const breakPoints = [
        { width: 1, itemsToShow: 2, itemsToScroll: 2 },
        { width: 780, itemsToShow: 4 }
    ];

    let name = product.name ? product.name.split("|") : "";
    let desc = product.description ? product.description.split("|") : "";
    const likecarousel = useRef(null);
    const similarCarousel = useRef(null);
    const carousel = useRef(null);
    let star1 = 0, star2 = 0, star3 = 0, star4 = 0, star5 = 0;
    return (
        <div>
            <div className="container-fluid pt-3 pb-3 padding-10 d-none d-sm-block " style={{ background: "#F6F6F6", color: "#333333" }}>
                <Link to="/" style={{ color: "#333333" }}>Home </Link>/
                <Link style={{ color: "#333333" }} className="text-capitalize" to={`/cat/${catSlug}`}> {catName}</Link> /
                <Link style={{ color: "#333333" }} className="text-capitalize" to={`/${catSlug}/subcat/${subCatSlug}`}> {subCatName}</Link> /
                <span className="font-weight-bold" > {product.name}</span>
            </div>
            <div className="row  padding-10 mt-4 " >
                <div className="col-lg-5 pl-auto pr-auto ">
                    <div className="d-block d-sm-none mb-4">
                        <h2 style={{
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "22px",
                            lineHeight: "27px",
                            color: "#000000",
                        }}>{product.name}</h2>
                        <div className="d-flex align-items-center ">
                            <span className="font-weight-bold ">{product.average_rating}</span>
                            <Rating name="product-rating " value={rating} precision={0.1} size="small" readOnly style={{ zIndex: "-1" }} />
                            <span className="font-weight-normal ">({totalNoOfRating})</span>
                            {product.stocks ? (<span className=" ml-auto" style={{ color: "#27AE60", }}>In Stock</span>) :
                                (<span className=" ml-auto text-danger" style={{}}>Out of Stock</span>)
                            }
                        </div>
                    </div>

                    <Carousel className=" " showArrows={false} renderPagination={({ pages, activePage, onClick }) => {
                        return (
                            <div className="d-flex justify-content-around mt-4 " >
                                {pages.map(page => {
                                    const isActivePage = activePage === page
                                    return (
                                        <div role="button" key={page} onClick={() => onClick(page)} active={isActivePage} className={isActivePage ? "paginationActive productIndicators" : "paginationInactive productIndicators"} >
                                            <div className="d-sm-none" style={{ width: "10px", height: "10px", background: "gray", borderRadius: "50%" }}></div>
                                            {(page === 0) ? (<img className="d-none d-sm-block" src={product.imgUrl[0]} alt="preprinted sign" style={{ width: "50px", height: "50px" }} />
                                            )
                                                : (page === 1) ? (<img className="d-none d-sm-block" src={product.imgUrl[1]} alt="preprinted sign" style={{ width: "50px", height: "50px" }} />)
                                                    : (page === 2) ? (<img className="d-none d-sm-block" src={product.imgUrl[2]} alt="preprinted sign" style={{ width: "50px", height: "50px" }} />)
                                                        : (<img className="d-none d-sm-block" src={product.imgUrl[3]} alt="preprinted sign" style={{ width: "50px", height: "50px" }} />)
                                            }

                                        </div>
                                    )
                                })}
                            </div>
                        );
                    }}>
                        <img src={product.imgUrl[0]} alt="preprinted sign" className="productCarouselImg " />
                        <img src={product.imgUrl[1]} alt="preprinted sign" className="productCarouselImg " />
                        <img src={product.imgUrl[2]} alt="preprinted sign" className="productCarouselImg " />
                        <img src={product.imgUrl[3]} alt="preprinted sign" className="productCarouselImg " />
                    </Carousel>

                    {
                        parseInt(product.discountValue) > 0 && product.discount_type === 1 ?
                            <div className="d-flex d-sm-none mx-auto justify-content-center align-items-center" style={{
                                marginTop: "25px",
                                width: "222px",
                                height: "30px",
                                background: "rgba(247, 204, 127, 0.7)",
                                border: "2px dashed #FEA100",
                                boxSizing: "border-box",
                                fontFamily: "Source Sans Pro",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                lineHeight: "21px",
                                textAlign: "center",
                                letterSpacing: "0.2px",
                                color: "#003459",
                            }}>
                                Limited time offer: Flat Rs {product.discountValue} off
                            </div> : ""}
                    {parseInt(product.discountValue) > 0 && product.discount_type === 2 ?
                        <div className="d-flex d-sm-none mx-auto justify-content-center align-items-center" style={{
                            marginTop: "25px",
                            width: "222px",
                            height: "30px",
                            background: "rgba(247, 204, 127, 0.7)",
                            border: "2px dashed #FEA100",
                            boxSizing: "border-box",
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "21px",
                            textAlign: "center",
                            letterSpacing: "0.2px",
                            color: "#003459",
                        }}>
                            Limited time offer: {product.discountValue}% Off
                        </div> : ""
                    }
                    <hr className="mt-5 mb-4 d-none d-sm-block " style={{ borderTop: "1px solid rgba(130, 130, 130, 0.5)" }} />
                    {
                        author ?
                            <div className="d-none d-sm-block ">
                                <img src={author.auth_image ? author.auth_image : designerProfile} alt="profile" />
                                <span style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    lineHeight: "23px",
                                    color: "#000000",
                                    marginLeft: "20px"
                                }}>By {author.author_name ? author.author_name : "EHS Prints"}</span>
                                <div className="d-flex mt-3 mb-2  justify-content-between align-items-center">
                                    <p className=" my-auto" style={{
                                        fontWeight: "normal",
                                        fontSize: "14px",
                                        color: "#000000",
                                    }}>Other Designs by the Designer</p>
                                    <span><Link to={`/author/${author.author_slug}/products`}>More items...</Link></span>
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                    {
                                        authorPosters && authorPosters.length > 0 && authorPosters.map((val, i) => {
                                            return (
                                                <img
                                                    key={i}
                                                    src={val.imgUrl[0] ? val.imgUrl[0] : ""}
                                                    alt="More_designs"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        background: "#D2D2D2",
                                                    }} />
                                            )
                                        })
                                    }


                                </div>
                            </div> : ""
                    }
                </div>
                <div className="col-lg-3  ">
                    <div className="d-none d-sm-block " style={{
                        marginBottom: "49px"
                    }} >
                        <h2 style={{
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "28px",
                            lineHeight: "35px",
                            color: "#000000",
                        }}>{name[0]}</h2>
                        <div className="d-flex align-items-center " style={{ marginTop: "5px" }}>
                            <span className=" " style={{
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "20px",
                                color: "#000"
                            }}>{product.average_rating}</span>
                            <Rating name="product-rating" value={rating} precision={0.1} size="small" readOnly />
                            <span className="" style={{
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "18px",
                                color: "#000",
                            }}>({totalNoOfRating})</span>
                            {(product.stocks) ? (
                                <span className=" ml-4" style={{
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                    color: "#27AE60",
                                }}>In Stock</span>

                            ) : (
                                <span className="text-danger ml-4" style={{
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                }}>Out of Stock</span>

                            )}
                        </div>
                        <p className="" style={{
                            marginTop: "7px",
                            marginBottom: "0px",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#757575"
                        }}>
                            {product.bought} bought this
                        </p>
                    </div>

                    <div className="mb-4 mt-5 mt-sm-0 d-flex flex-sm-column flex-row justify-content-between ">
                        <p className="mt-sm-0 mb-2  align-self-sm-start align-self-center selectHead  ">Select Material</p>
                        {/* product.materialDimension ? (
                            <div className="d-flex justify-content-between mr-0  ">
                            <div className="posterMaterialDimension selected" id="m1" role="button" onClick={changeMaterialTo1} >
                                <img src={matNew[0].material_img? matNew[0].material_img: ""} className="materialImg1Dimension " alt="material" ></img>
                                <p className="text-center materialTextDimension">{matNew ? matNew[0].material_title: "No Material"}</p>
                            </div>
                            <div className="posterMaterialDimension " id="m2" role="button" onClick={changeMaterialTo2} >
                                <img src={matNew[1].material_img? matNew[1].material_img: ""} className="materialImg2Dimension  " alt="material"></img>
                                <p className="text-center materialTextDimension">{matNew[1].material_title ? matNew[1].material_title: "No Material"}</p>
                            </div>
                            <div className="posterMaterialDimension" id="m3" role="button" onClick={changeMaterialTo3} >
                                <img src={matNew[2].material_img? matNew[2].material_img: ""} className="materialImg2Dimension" alt="material"></img>
                                <p className="text-center materialTextDimension ">{matNew[2].material_title ? matNew[2].material_title: "No Material"}</p>
                            </div>
                        </div>
                        ) : "" */}
                        <div className="d-flex justify-content-between mr-0  ">
                        {
                            matNew ? matNew.map((val,i)=>{
                                return(
                                    <div className="posterMaterialDimension mat"  role="button" onClick={(e)=>changeMaterial(e)} >
                                        <img src={val.material_img? val.material_img: ""} className="materialImg2Dimension  " alt="material"></img>
                                        <p className="text-center materialTextDimension">{ val.material_title ? val.material_title: "No Material"}</p>
                                    </div>
                                )
                            }): ""
                        }
                        </div>
                    </div>
                    <div className=" d-flex flex-sm-column flex-row justify-content-between" style={{
                        marginTop: "56px",
                        marginBottom: "77px"
                    }}>
                        <p className=" align-self-sm-start align-self-center selectHead">Select Dimensions</p>
                        <div className="d-flex justify-content-between">
                            {/* <div className=" ml-sm-0 posterMaterialDimension selected" id="d1" role="button" onClick={changeDimensionToS} >
                                <img src={dimNew? dimNew[0].dimension_img: ""} className="posterDimension1 mt-2" alt="dimension" ></img>
                                <p className="text-center posterDimensionText ">{dimNew? dimNew[0].dimension_title: "No Dimension"}</p>
                            </div>
                            <div className=" posterMaterialDimension" role="button" id="d2" onClick={changeDimensionToM} >
                                <img src={dimNew? dimNew[1].dimension_img: ""} className="posterDimension2 mt-2 " alt="dimension"></img>
                                <p className="text-center posterDimensionText  ">{dimNew? dimNew[1].dimension_title: "No Dimension"}</p>
                            </div>
                            <div className=" posterMaterialDimension" role="button" id="d3" onClick={changeDimensionToL} >
                                <img src={dimNew? dimNew[2].dimension_img: ""} className="posterDimension3 mt-2 " alt="dimension"></img>
                                <p className="text-center posterDimensionText">{dimNew? dimNew[2].dimension_title: "No Dimension"}</p>
                            </div> */}
                            {
                                dimNew ? dimNew.map((val,i)=>{
                                    return(
                                        <div className="posterMaterialDimension dim" role="button" id="d2" onClick={(e)=>changeDimension(e)} >
                                            <img src={val.dimension_img? val.dimension_img: ""} className="posterDimension2 mt-2 " alt="dimension"></img>
                                            <p className="text-center posterDimensionText  ">{val.dimension_title ? val.dimension_title: "No Dimension"}</p>
                                        </div>
                                    )
                                }): ""
                            }
                        </div>

                    </div>
                    <div className="d-flex flex-row flex-sm-column  align-items-sm-start align-items-center ">
                        <p className=" mr-5  mr-sm-0 d-inline-block d-sm-block my-auto mb-sm-2" style={{ fontWeight: "500" }}>Quantity</p>
                        <ButtonGroup
                            size="small"
                            className="ml-5 ml-sm-0 "
                            aria-label="small outlined button group"
                            style={{ width: "30px", height: "30px", }}
                        >
                            <Button
                                onClick={decreaseQty}
                                className="shadow-none  qtyBTN"
                            >
                                <RemoveIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                            <Button className="qtyBTN"
                                style={{
                                    fontFamily: "Lato",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: "16px",
                                    lineHeight: "18px",
                                    color: "#000000",
                                    paddingLeft: "14px",
                                    paddingRight: "14px",
                                }}
                            >
                                {quantity}
                            </Button>
                            <Button onClick={increaseQty} className="p-0 qtyBTN"  >
                                <AddIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="mt-2 d-block d-sm-none float-right ">
                        <p className="d-inline-block mt-4" style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "29px",
                            color: "#003459",
                        }}>&#8377;{amount}</p>
                        <span className="ml-2" style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "12px",
                            color: "#757575",
                            lineHeight: "15px"
                        }}>(Inclusive of All Taxes)</span>
                    </div>
                    <button
                        onClick={addToCart}
                        className="d-block d-sm-none w-100 p-2 mt-4" style={{
                            border: "none",
                            background: "#003459",
                            borderRadius: "6px",
                            color: "white",
                        }}>Add To Cart</button>
                    <div className="mt-4 pl-3 pl-sm-0">
                        <Link onClick={addToWishlist} className="text-dark " style={{ textDecoration: "underline", fontSize: "0.9rem" }}>Add to Wishlist<FavoriteBorderIcon className="ml-1" style={{ transform: "scale(0.8)" }} /></Link>
                        <Link className="text-dark ml-5" style={{ textDecoration: "underline", fontSize: "0.9rem" }}>Share<ShareOutlinedIcon className="ml-1" style={{ transform: "scale(0.7)" }} /></Link>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="d-none " style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "600",
                        color: "#000000",
                        marginBottom: "5px",
                        marginTop: "145px"
                    }}>
                        <p className=" " style={{ fontSize: "16px", lineHeight: "19px" }}>Product Details</p>
                        <p className=" my-2" style={{ fontSize: "12px", lineHeight: "12px" }}>Material: <span style={{ fontWeight: "500" }}>{material}</span></p>
                        <p className=" my-2" style={{ fontSize: "12px", lineHeight: "12px" }}>Dimension: <span style={{ fontWeight: "500" }}>{dimension[0]}inches by {dimension[1]}inches</span></p>
                        <p className="mb-0 " style={{ fontSize: "12px", lineHeight: "10px" }}>Weight: <span style={{ fontWeight: "500" }}>100g</span></p>
                    </div>
                    <div className=" offerBox">
                        <div className=" mt-3 mt-sm-0 d-flex align-items-center">
                            {
                                otherLanguagePoster.length > 0 && otherLanguagePoster.map((val, i) => {
                                    return (
                                        <>
                                            <p className=" d-inline-block my-auto " style={{
                                                fontFamily: "Source Sans Pro",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "18px",
                                                color: "#4F4F4F",
                                            }}>Also available in:</p>

                                            {val.language === 1 ? <Link to={`/${catSlug}/${subCatSlug}/product/id=${val.poster_obj_id}`} className="langLink"><div className="languageBtn mx-3">English</div></Link>
                                                : ""}
                                            {val.language === 2 ? <Link to={`/${catSlug}/${subCatSlug}/product/id=${val.poster_obj_id}`} className="langLink"><div className="languageBtn mx-3">Hindi</div></Link> : ""}
                                            {val.language === 3 ? <Link to={`/${catSlug}/${subCatSlug}/product/id=${val.poster_obj_id}`} className="langLink"><div className="languageBtn mx-3">Bilingual</div></Link> : ""}

                                        </>
                                    )
                                })
                            }

                        </div>
                        {
                            parseInt(product.discountValue) > 0 && product.discount_type === 1 ?
                                <div className="d-none d-sm-flex justify-content-center align-items-center" style={{
                                    marginTop: "30px",
                                    width: "222px",
                                    height: "30px",
                                    background: "rgba(247, 204, 127, 0.7)",
                                    border: "2px dashed #FEA100",
                                    boxSizing: "border-box",
                                    fontFamily: "Source Sans Pro",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: "14px",
                                    lineHeight: "21px",
                                    textAlign: "center",
                                    letterSpacing: "0.2px",
                                    color: "#003459",
                                }}>
                                    Limited time offer: Flat Rs {product.discountValue} off
                                </div> : ""}

                        {parseInt(product.discountValue) > 0 && product.discount_type === 2 ? <div className="d-none d-sm-flex justify-content-center align-items-center" style={{
                            marginTop: "30px",
                            width: "222px",
                            height: "30px",
                            background: "rgba(247, 204, 127, 0.7)",
                            border: "2px dashed #FEA100",
                            boxSizing: "border-box",
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "21px",
                            textAlign: "center",
                            letterSpacing: "0.2px",
                            color: "#003459",
                        }}>
                            Limited time offer: {product.discountValue}% Off
                        </div> : ""
                        }

                    </div>
                    <div className="productInfo " >
                        <p className=" d-none d-sm-block" style={{
                            fontSize: "16px", lineHeight: "19px", fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "600",
                            color: "#000000",
                        }}>Product Details</p>
                        {
                            desc ? desc.map((val, i) => {
                                return (
                                    <li key={i}>{val}</li>
                                )
                            }) : ""
                        }
                    </div>
                    <div className=" pt-4 pt-sm-0   catTagSKU ">
                        <p><span style={{ fontWeight: "600" }}>Category: </span>{product.category[0].title}, {product.subCategory[0].title}</p>
                        <p><span style={{ fontWeight: "600" }}>Tags: </span>{
                            product.tags.map((val, i) => {
                                return (
                                    <span key={i}>{val}...</span>
                                )
                            })
                        }</p>
                        <p><span style={{ fontWeight: "600" }}>SKU: </span>{product.sku}</p>
                    </div>
                    <div className=" d-none d-sm-block">
                        {
                            (isNaN(amount)) ? (
                                <p className="mt-4 text-danger" style={{
                                    fontFamily: "Source Sans Pro",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: "16px",
                                    lineHeight: "45px",
                                    color: "#003459",
                                }}>
                                    Please select Material & Dimension.....
                                </p>
                            ) : (
                                <>

                                    <p className="d-inline-block mt-4" style={{
                                        fontFamily: "Source Sans Pro",
                                        fontStyle: "normal",
                                        fontWeight: "bold",
                                        fontSize: "36px",
                                        lineHeight: "45px",
                                        color: "#003459",
                                    }}>
                                        &#8377;{amount}
                                    </p>
                                    <span className="ml-3" style={{
                                        fontFamily: "Source Sans Pro",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        color: "#757575",
                                        lineHeight: "15px"
                                    }}>(Inclusive of All Taxes)</span>
                                </>
                            )
                        }

                    </div>
                    <button
                        onClick={addToCart}
                        className=" d-none d-sm-block w-100 p-2 mt-2"
                        style={{
                            border: "none",
                            background: "#003459",
                            borderRadius: "6px",
                            color: "white",
                        }}>Add To Cart</button>

                    {
                        author ?
                            <div className="d-block d-sm-none mt-4">
                                <img src={author.auth_image ? author.auth_image : designerProfile} alt="profile" />
                                <span style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                    color: "#000000",
                                    marginLeft: "20px"
                                }}>By {author.author_name ? author.author_name : "EHS Prints"}</span>
                                <p className="mt-4" style={{
                                    fontWeight: "normal",
                                    fontSize: "11px",
                                    lineHeight: "14px",
                                    color: "#000000",
                                }}>Other Designs by the Designer</p>
                                <div className="d-flex justify-content-between">
                                    {
                                        authorPosters && authorPosters.length > 0 && authorPosters.map((val, i) => {
                                            return (
                                                <img
                                                    key={i}
                                                    src={val.imgUrl[0] ? val.imgUrl[0] : ""}
                                                    alt="More_designs"
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        background: "#D2D2D2",
                                                    }} />
                                            )
                                        })
                                    }
                                </div>
                            </div> : ""
                    }
                </div>
            </div>

            {
                product.average_rating > 0 ?

                    <>
                        <div className="separator"></div>
                        <div className="row padding-10 ">
                            <div className="col-4  d-none d-sm-block">
                                <h2 style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                }}>Ratings</h2>
                                <div className="row">
                                    <div className="col-3 mt-auto mb-0">
                                        <Box position="relative" display="inline-flex">
                                            <CircularProgress size="50px" variant="determinate" value={87} style={{ color: "green" }} />
                                            <Box
                                                top={0}
                                                left={0}
                                                bottom={0}
                                                right={0}
                                                position="absolute"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Typography variant="caption" component="div" color="black">{product.average_rating}</Typography>
                                            </Box>
                                        </Box>
                                        <p className="mb-0" style={{
                                            fontSize: "14px"
                                        }}>{totalNoOfRating} ratings</p>
                                    </div>
                                    <div className="col-9" style={{ fontSize: "14px", fontWeight: "normal" }}>
                                        <ThemeProvider theme={theme}>
                                            {
                                                ratingTotal.map((val, i) => {
                                                    if (val.rating === 1) {
                                                        star1 = val.count * 10;
                                                    } else if (val.rating === 2) {
                                                        star2 = val.count * 10;
                                                    } else if (val.rating === 3) {
                                                        star3 = val.count * 10;
                                                    } else if (val.rating === 4) {
                                                        star4 = val.count * 10;
                                                    } else if (val.rating === 5) {
                                                        star5 = val.count * 10;
                                                    }

                                                })
                                            }
                                            <div className="d-inline-block ">1 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={star1} /></Box>
                                            <div className="d-inline-block ">2 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={star2} /></Box>
                                            <div className="d-inline-block ">3 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={star3} /></Box>
                                            <div className="d-inline-block ">4 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={star4} /></Box>
                                            <div className="d-inline-block ">5 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={star5} /></Box>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 d-none d-sm-block ">
                                <h2 className="d-inline-block" style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                }}>Reviews</h2>

                                <p className="d-none float-right viewAll" >View All</p>

                                <div className="d-flex  col-12 pl-0 pr-0">
                                    {
                                        (product.rating && product.rating.length > 0) ? (
                                            <>
                                                {
                                                    product.rating.map((val, i) => {
                                                        return (
                                                            <ReviewCard feedback={val.feedback} rating={val.rating} userId={val.userId} />
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <div>No Reviews</div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="d-block d-sm-none  col-12">
                                <h2 className="d-inline-block otherCarouselHead" >Reviews</h2>
                                <p className="d-inline-block float-right  viewAll" >View All</p>
                                <div className="d-flex justify-content-between  ">
                                    <div className=" d-block d-sm-none mt-auto">
                                        <Box position="relative" display="inline-flex">
                                            <CircularProgress size="50px" variant="determinate" value={rating * 20} style={{ color: "green" }} />
                                            <Box
                                                top={0}
                                                left={0}
                                                bottom={0}
                                                right={0}
                                                position="absolute"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Typography variant="caption" component="div" color="black">{product.average_rating}</Typography>
                                            </Box>
                                        </Box>
                                        <p className="mb-0 mt-3 " style={{
                                            fontWeight: "600",
                                            fontSize: "14px",
                                            width: "70px"
                                        }}>{totalNoOfRating} ratings</p>
                                    </div>
                                    {
                                        (product.rating) ? (
                                            <>
                                                {
                                                    product.rating.slice(0, 1).map((val, i) => {
                                                        return (
                                                            <ReviewCard feedback={val.feedback} rating={val.rating} userId={val.userId} />
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <div>No Reviews</div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>

                    </> : ""
            }


            <div className="separator"></div>
            <div className="padding-10 similarCarouselMargin1">
                <h2 className=" d-inline-block otherCarouselHead " >Similar items</h2>

                <Link to={`/${catSlug}/subcat/${subCatSlug}`}> <p role="button" className=" d-inline-block float-right viewAll "  >View All</p></Link>


                {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */}
                <div className=" d-sm-flex d-none " style={{ opacity: "1" }}>
                    <ArrowBackIosRoundedIcon onClick={() => similarCarousel.current.slidePrev()} role="button" id="prevBtn" className="my-auto d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={similarCarousel} style={{opacity: "1!important"}}>
                        {similarItems.map((ncard,i)=>{
                            return(
                            <ProductCard 
                                    product={ncard}
                                    src={ncard.imgUrl[0]} 
                                    name={ncard.name} 
                                    slug={ncard.slug} 
                                    startPrice={ncard.originalPrice} 
                                    rating={ncard.average_rating} 
                                    itemBought={ncard.bought} 
                                    catName={catName} 
                                    subCatName={subCatName} 
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
                    <ArrowForwardIosRoundedIcon onClick={() => similarCarousel.current.slideNext()} role="button" id="prevBtn" className="my-auto d-none d-sm-block" />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {similarItems.slice(0, 4).map((ncard, i) => {

                        return (
                            <ProductCard
                                product={ncard}
                                src={ncard.imgUrl[0]}
                                name={ncard.name}
                                slug={ncard.slug}
                                startPrice={ncard.originalPrice}
                                rating={ncard.average_rating}
                                itemBought={ncard.bought}
                                catName={catName}
                                catId={ncard.category[0] ? ncard.category[0]._id : ""}
                                subCatId={ncard.subCategory[0] ? ncard.subCategory[0]._id : ""}
                                catSlug={ncard.category[0] ? ncard.category[0].cat_slug : ""}
                                subCatSlug={ncard.subCategory[0] ? ncard.subCategory[0].sub_cat_slug : ""}
                                subCatName={subCatName}
                                id={ncard._id}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="padding-10 similarCarouselMargin" >
                <h2 className=" d-inline-block  otherCarouselHead">You may also like</h2>

                <Link to="/posters/subcat/PPE"> <p role="button" className="viewAll d-inline-block float-right"  >View All</p></Link>


                {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */}
                <div className=" d-sm-flex d-none" style={{ opacity: "1" }}>
                    <ArrowBackIosRoundedIcon onClick={() => likecarousel.current.slidePrev()} role="button" id="prevBtn" className="my-auto d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints} pagination={false} showArrows={false} ref={likecarousel} style={{ opacity: "1!important" }}>
                        {youMayLike.map((ncard, i) => {
                            return (
                                <ProductCard
                                    product={ncard}
                                    src={ncard.imgUrl[0]}
                                    name={ncard.name}
                                    slug={ncard.slug}
                                    startPrice={ncard.originalPrice}
                                    rating={ncard.average_rating}
                                    itemBought={ncard.bought}
                                    catName={catName}
                                    subCatName={subCatName}
                                    catId={ncard.category[0]._id}
                                    subCatId={ncard.subCategory[0]._id}
                                    catSlug={ncard.category[0].cat_slug}
                                    subCatSlug={ncard.subCategory[0].sub_cat_slug}
                                    id={ncard._id}
                                    key={i}
                                />
                            )
                        })}
                    </Carousel>
                    <ArrowForwardIosRoundedIcon onClick={() => likecarousel.current.slideNext()} role="button" id="prevBtn" className="my-auto d-none d-sm-block" />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {youMayLike.slice(0, 4).map((ncard, i) => {
                        return (
                            <ProductCard
                                product={ncard}
                                src={ncard.imgUrl[0]}
                                name={ncard.name}
                                slug={ncard.slug}
                                startPrice={ncard.originalPrice}
                                rating={ncard.average_rating}
                                itemBought={ncard.bought}
                                catName={catName}
                                subCatName={subCatName}
                                catId={ncard.category[0]._id}
                                subCatId={ncard.subCategory[0]._id}
                                catSlug={ncard.category[0].cat_slug}
                                subCatSlug={ncard.subCategory[0].sub_cat_slug}
                                id={ncard._id}
                                key={i}
                            />
                        )
                    })}
                </div>

            </div>


            {/*<div className="d-flex justify-content-around">{similarProductInfo.slice(0,visible).map(ncard)}</div>
            <div className="d-flex justify-content-around">{similarProductInfo2.slice(0,visible).map(ncard)}</div>*/}





            <div className="didNotFindBottomBanner mx-auto">
                <p className="text1 d-inline-block ">Did not find what you were looking for?</p>
                <div className="d-inline-block float-none float-sm-right">
                    <p className="text2 ">Contact us and get the perfect print made for you</p>
                    <p className="text3 ">Share your design or slogan with us, and our designers will create one for you!</p>
                </div>
            </div>

        </div>
    );
};

export default PosterProductPage;