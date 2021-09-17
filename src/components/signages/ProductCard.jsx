import React,{ useState, useEffect,useReducer} from "react";
import StarIcon from '@material-ui/icons/Star';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Material1 from "../../images/Fold.svg";
import Material2 from "../../images/Hand.svg";
import dummyImg from "../../images/noImg.png";
import dimension1 from "../../images/Dimension1.svg"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Axios from "axios";
import {API} from "../../backend";
const MySwal = withReactContent(Swal);


const reducer = (state,action)=> {
    if(action.type === "inc"){
        return state+1;
    }
    if(action.type === "dec" && state>1){
        return state-1;
    }
    return state;
}

const FinalPopup = (props) => {
    const [state,dispatch] = useReducer(reducer,1);
    const [authUser,setAuthUser] = useState("");
    const [finalMatDim,setFinalMatDim] = useState(props.finalMatDim);
    const [amount,setAmount] = useState(props.price);
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("userDetails123")))
    setAuthUser(
      JSON.parse(localStorage.getItem("userDetails123")).emailid ||
        JSON.parse(localStorage.getItem("userDetails123")).phonenumber
    );
    },[]);
    let price=0;
    useEffect(()=>{
        let flag = true;
        props.product && props.product.materialDimension.map((val,i)=> {
            if(props.dim === val.dimension_title && props.mat === val.material_title){
                setAmount(val.price * state);
                setFinalMatDim(val._id);
                price=val.price;
               // console.log(val.price)
                flag= false;
            }
        });
        if(flag)
       {    price=NaN;
           setAmount(NaN);}

    },[state])

   
    const addToCartConfirmPopup = ()=>{
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
                        <img src={props.product.imgUrl[0]} alt="productImage" className="toastImg " />
                        <div className="ml-2 ">
                        <p className="toastAddedText">Added to Cart</p>
                        <p className="qtyPopupText text-left font-weight-normal mb-1" >{props.product.name}</p>
                        <p className="qtyPopupText text-left mb-0" style={{fontWeight: "600"}}>Quantity: {state}</p>
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
        
        MySwal.clickConfirm();

        if(authUser){
            Axios.post(`${API}auth/update_user_cart`,{
                poster_obj_id: props.productId,
                material_obj_id: props.finalMatDim,
                quantity: 1,
            },
            {   
                headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
                params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
            })
            .then((res)=>{
                //console.log(res);
               addToCartConfirmPopup();
                    window.location.reload(false);
                   
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            let ehsCart = [];
            let mat={
                material_title: props.mat,
                dimension_title: props.dim,
                price: price
            }
            let finalProduct={
                productId: props.productId,
                poster_details: props.product,
                materialDimension: mat,
                quantity: state,
                total: amount
            }
                let flag=false;
                if(localStorage.getItem("ehsCart")){
                    ehsCart=JSON.parse(localStorage.getItem("ehsCart"));
                    const i = ehsCart.findIndex(product=> product.productId===finalProduct.productId) 
                    if(i>=0){
                        ehsCart[i]=finalProduct;
                        flag=true;
                        addToCartConfirmPopup();
                        setTimeout(()=>{
                            window.location.reload(false);
                        },1000);
                    }
                }
                if(flag === false){
                    ehsCart.push(finalProduct)
                    addToCartConfirmPopup();
                    setTimeout(()=>{
                        window.location.reload(false);
                    },1000);
                }
                localStorage.setItem("ehsCart",JSON.stringify(ehsCart));
            
        }
    }

    return(
        <div className="mt-3">
            <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                color: "#000"
            }} />
            <img src={props.product.imgUrl[0]} alt="productImage" className="popupImg" />
            <p className=" mt-2 popupTitle">{props.product.name}
            </p>
            
            <div className=" mt-2 ">
                <p className="popupHead   mb-3">Select Quantity</p>
                <ButtonGroup
                    size="small"
                    className="justify-content-center "
                    aria-label="small outlined button group"
                    style={{ width: "20px", height: "30px" }}
                  >
                    <Button
                      onClick={()=> dispatch({type: "dec"})}
                      className="shadow-none"
                      style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                    >
                      <RemoveIcon style={{ color: "grey", width: "20px" }} />
                    </Button>
                    <Button
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#000000",
                        paddingLeft: "14px",
                        paddingRight: "14px", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
                      }}
                    >
                      {state}
                    </Button>
                    <Button onClick={()=> dispatch({type: "inc"})} className="p-0" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} >
                      <AddIcon style={{ color: "grey", width: "20px" }} />
                    </Button>
                  </ButtonGroup>
                  <p className="qtyPopupText  mb-1 mt-2">Material: <span style={{fontWeight: "600"}}>{props.mat}</span></p>
                  <p className="qtyPopupText mb-2">Dimension: <span style={{fontWeight: "600"}}>{props.dim}</span></p>
                  <p className="qtyPopupText" style={{fontWeight: "normal"}}>Price: <span className="popupPrice ml-1"> ₹ {props.price * state}</span><span className="ml-2 ml-sm-3 popupPriceTag">(Inclusive of all Taxes)</span></p>
                  <div className="mx-auto popupBtn" role="button" onClick={addToCart}>Add to Cart</div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>                  
            </div>
        </div>
    )
}


const ProductCard = (props) =>{


    // console.log("propp",props.product);
    const [authUser, setAuthUser] = React.useState("");
    const [material,setMaterial] = useState("");
    const [dimension,setDimension] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [render,setRender] = useState(false);
    const [amount,setAmount] = useState();
    const [finalMatDim,setFinalMatDim] = useState("");
    const [matDim,setMatDim] = useState([]);
    const [matNew,setMatNew] = useState([]);
    const [dimNew,setDimNew] = useState([]);

    const [state,dispatch] = useReducer(reducer,1);
    let price=0;
    let mat="";
    let dim="";
    let finalMatId="";
   useEffect(()=>{

    if(props.product.materialDimension){
        setMatDim(props.product.materialDimension);
        filterMatDim(props.product.materialDimension);
    }
    if (JSON.parse(localStorage.getItem("userDetails123")))
    setAuthUser(
      JSON.parse(localStorage.getItem("userDetails123")).emailid ||
        JSON.parse(localStorage.getItem("userDetails123")).phonenumber
    );
       // calculateAmount();
       
   },[material,dimension,props.product]);

   const filterMatDim = (md)=>{
      // console.log(md)
    matNew.length=0;
    dimNew.length=0;
    const s = md ? md.forEach(val => {
        const foundM= matNew ? matNew.find(title => val.material_title===title.material_title ): "";
        const foundD= dimNew ? dimNew.find(title => val.dimension_title===title.dimension_title ): "";
        // console.log(foundM);
        if(!foundM){
            matNew.push({material_title: val.material_title,material_img: val.material_imgUrl});
        }
        if(!foundD){
            dimNew.push({dimension_title: val.dimension_title,dimension_img: val.dimension_imgUrl});
        }
        
    }):"";

    // console.log(matNew);
    // console.log(dimNew);
}

//    const calculateAmount = () => {
//     let flag = true;
    
//     props.product && props.product.materialDimension.map((val,i)=> {
//         if(dim === val.dimension_title && mat === val.material_title){
//             setAmount(val.price * quantity);
//             setFinalMatDim(val._id);
//             price=val.price;
//             flag= false;
//         }
//     });
//     if(flag)
//     setAmount(NaN);
// }

const MaterialSelectNew = (e)=> {
    setMaterial(e.target.innerText);
    // const m = document.getElementsByClassName("mat");
    // for(let i=0;i<m.length;i++){
    //     // console.log(m[i])
    //     m[i].classList.remove("selected")
    // }
    mat=e.target.innerText;
    e.target.classList.add("popupSelect");
    setTimeout(()=>{
        MySwal.clickConfirm();
        selectDimensionPopup(mat);
    },500);
}
const dimensionSelectNew = (e,mat) => {
    e.target.classList.add('popupSelect');
    dim = e.target.innerText;
    setDimension(e.target.innerText);

    let flag = true;
        props.product && props.product.materialDimension.map((val,i)=> {
            if(dim === val.dimension_title && mat === val.material_title){
                setAmount(val.price * quantity);
                setFinalMatDim(val._id);
                finalMatId=val._id
                price=val.price;
                flag= false;
            }
        });
        if(flag)
        setAmount(NaN);
    
        setTimeout(()=>{
            MySwal.clickConfirm();
            selectQuantityPopup(mat,dim);
        },500);
}

   const MaterialSelect =  (e) => {           
    e.target.classList.add('popupSelect');
   // console.log(e.target.id);
   
    if(e.target.id === "m1")
    {
        setMaterial("125 Micron (non-tearable)");
        mat="125 Micron (non-tearable)";
    }else if(e.target.id === "m2"){
        setMaterial("Self-adhesive (premium)");
        mat="Self-adhesive (premium)";
    }else{
        setMaterial("Self-adhesive 3mm sunboard (premium)");
        mat="Self-adhesive 3mm sunboard (premium)"
    }
    setTimeout(()=>{
        MySwal.clickConfirm();
        selectDimensionPopup(mat);
    },500);

   
    }


    const dimensionSelect = (e,mat) => {
        e.target.classList.add('popupSelect');
       
        if(e.target.id === "m1")
        {
            setDimension("16” x 24”");
            dim="16” x 24”";
        }else if(e.target.id === "m2"){
            setDimension("19” x 27”");
            dim="19” x 27”";
        }else{
            setDimension("24” x 36”");
            dim="24” x 36”";
        }

        
        let flag = true;
        props.product && props.product.materialDimension.map((val,i)=> {
            if(dim === val.dimension_title && mat === val.material_title){
                setAmount(val.price * quantity);
                setFinalMatDim(val._id);
                finalMatId=val._id
                price=val.price;
                flag= false;
            }
        });
        if(flag)
        setAmount(NaN);
    
        setTimeout(()=>{
            MySwal.clickConfirm();
            selectQuantityPopup(mat,dim);
        },500);


    }
    const addToCart = () => {
        
        MySwal.clickConfirm();
    }
   const selectMaterialPopup = () =>{
       MySwal.fire({
                    html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}</p>
                    <div className=" mt-2  ">
                        <p className="popupHead  mb-3">Select Material</p>
                        {/* <div className="d-flex justify-content-between ">
                            <div className="popupMaterialDimension selected z-index-2" id="m1" role="button"   onClick={(e)=>MaterialSelect(e)} >
                                <img src={Material2} className="popupMaterialImg1 " alt="material" ></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-2">125 Micron (non-tearable)</p>
                            </div>
                            <div className="popupMaterialDimension " id="m2" role="button"    onClick={(e)=>MaterialSelect(e)} >
                                <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive (premium)</p>
                            </div>
                            <div className="popupMaterialDimension" id="m3" role="button"   onClick={(e)=>MaterialSelect(e)}  >
                                <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive 3mm sunboard (premium)</p>
                            </div>
                        </div> */}
                        <div className="d-flex justify-content-between ">
                        {
                            matNew ? matNew.map((val,i)=>{
                                return(
                                    <div className="popupMaterialDimension mat" role="button"    onClick={(e)=>MaterialSelectNew(e)} >
                                        <img src={val.material_img? val.material_img: ""} className="popupMaterialImg2 " alt="material"></img>
                                        <p className="text-center popupMaterialText">{val.material_title? val.material_title: ""}</p>
                                    </div>
                                )
                            }): ""
                        }</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'animate__animated animate__fadeIn  animate__faster'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: ''
                },
       })
   };
   const selectDimensionPopup = (mat) => {
       MySwal.fire({
                    html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}</p>
                    <div className=" mt-2 ">
                        <p className="popupHead  mb-3">Select Dimension</p>
                        <div className="d-flex justify-content-between ">
                            {/* <div className="popupMaterialDimension selected" id="m1" role="button"  onClick={(e)=>dimensionSelect(e,mat)}  >
                                <img src={dimension1} className="popupDimensionImg1 mt-3 mb-sm-3 " alt="material" ></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-4">16in by 24in</p>
                            </div>
                            <div className="popupMaterialDimension " id="m2" role="button"  onClick={(e)=>dimensionSelect(e,mat)}  >
                                <img src={dimension1} className="popupDimensionImg2 mt-3 mb-1 mb-sm-0" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-2">19in by 27in</p>
                            </div>
                            <div className="popupMaterialDimension" id="m3" role="button"   onClick={(e)=>dimensionSelect(e,mat)} >
                                <img src={dimension1} className="popupDimensionImg3 mt-2" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-1">24in by 36in</p>
                            </div> */}
                            {
                                dimNew ? dimNew.map((val,i)=> {
                                    return(
                                        <div className="popupMaterialDimension " id="m2" role="button"  onClick={(e)=>dimensionSelectNew(e,mat)}  >
                                            <img src={val.dimension_img? val.dimension_img: ""} className="popupDimensionImg2" alt="dim"></img>
                                            <p className="text-center popupMaterialText">{val.dimension_title? val.dimension_title: ""}</p>
                                        </div>
                                    )
                                }): ""
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                        
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'swal2-noanimation'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: ''
                }
       })
   }
   const selectQuantityPopup = (mat,dim) => {

        

       MySwal.fire( {
        html: <FinalPopup mat={mat} dim={dim} price={price} product={props.product} finalMatDim={finalMatId} productId={props.product._id} />,
        didRender: true,
        padding: "10px",
        backdrop: "rgba(0, 0, 0, 0.6)",
        showConfirmButton: false,
        scrollbarPadding: false,
        showClass: {
        popup: 'animate__animated animate__zoomIn  animate__faster',
        backdrop: 'swal2-noanimation'
        },
        hideClass: {
        popup: 'swal2-noanimation',
        backdrop: 'animate__animated animate__fadeOut  animate__faster'
        }
    })
   }

    const addToCartPopUp = () => {
        
        
        MySwal.mixin(
            {
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,    
            }
        ).queue([
            {  
                html: <div className="mt-3">
                <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                    position: "absolute",
                    top: "2px",
                    right: "2px",
                    color: "#000"
                }} />
                <img src={props.src} alt="productImage" className="popupImg" />
                <p className=" mt-2 popupTitle">{props.name}</p>
                <div className=" mt-2  ">
                    <p className="popupHead  mb-3">Select Material</p>
                    <div className="d-flex justify-content-between ">
                        <div className="popupMaterialDimension selected z-index-2" id="m1" role="button"   onClick={(e)=>MaterialSelect(e)} >
                            <img src={Material2} className="popupMaterialImg1 " alt="material" ></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">125 Micron (non-tearable)</p>
                        </div>
                        <div className="popupMaterialDimension " id="m2" role="button"    onClick={(e)=>MaterialSelect(e)} >
                            <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive (premium)</p>
                        </div>
                        <div className="popupMaterialDimension" id="m3" role="button"   onClick={(e)=>MaterialSelect(e)}  >
                            <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive 3mm sunboard (premium)</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                </div>
            </div>,
            padding: "10px",
            backdrop: "rgba(0, 0, 0, 0.6)",
            showConfirmButton: false,
            scrollbarPadding: false,
            showClass: {
            popup: 'animate__animated animate__zoomIn  animate__faster',
            backdrop: 'animate__animated animate__fadeIn  animate__faster'
            },
            hideClass: {
            popup: 'swal2-noanimation',
            backdrop: ''
            },
            

            },
            {
                html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}</p>
                    <div className=" mt-2 ">
                        <p className="popupHead  mb-3">Select Dimension</p>
                        <div className="d-flex justify-content-between ">
                            <div className="popupMaterialDimension selected" id="m1" role="button"  onClick={(e)=>dimensionSelect(e)}  >
                                <img src={dimension1} className="popupDimensionImg1 mt-3 mb-sm-3 " alt="material" ></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-4">16in by 24in</p>
                            </div>
                            <div className="popupMaterialDimension " id="m2" role="button"  onClick={(e)=>dimensionSelect(e)}  >
                                <img src={dimension1} className="popupDimensionImg2 mt-3 mb-1 mb-sm-0" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-2">19in by 27in</p>
                            </div>
                            <div className="popupMaterialDimension" id="m3" role="button"   onClick={(e)=>dimensionSelect(e)} >
                                <img src={dimension1} className="popupDimensionImg3 mt-2" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-1">24in by 36in</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                        
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'swal2-noanimation'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: ''
                }
            },
            {
                html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}
                    </p>
                    
                    <div className=" mt-2 ">

                        <p className="popupHead   mb-3">Select Quantity</p>
                        <ButtonGroup
                            size="small"
                            className="justify-content-center "
                            aria-label="small outlined button group"
                            style={{ width: "20px", height: "30px" }}
                          >
                            <Button
                                onClick={()=> setQuantity(quantity => quantity-1)}
                              className="shadow-none "
                              style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                            >
                              <RemoveIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                            <Button
                              style={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                lineHeight: "18px",
                                color: "#000000",
                                paddingLeft: "14px",
                                paddingRight: "14px",maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
                              }}
                            >
                              {quantity}
                            </Button>
                            <Button onClick={()=> setQuantity(quantity => quantity+1)} className="p-0" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} >
                              <AddIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                          </ButtonGroup>
                          <p className="qtyPopupText  mb-1 mt-2">Material: <span style={{fontWeight: "600"}}>{material}</span></p>
                          <p className="qtyPopupText mb-2">Dimension: <span style={{fontWeight: "600"}}>{dimension}</span></p>
                          <p className="qtyPopupText" style={{fontWeight: "normal"}}>Price: <span className="popupPrice ml-1"> ₹219.00</span><span className="ml-2 ml-sm-3 popupPriceTag">(Inclusive of all Taxes)</span></p>
                          <div className="mx-auto popupBtn" role="button" onClick={addToCart}>Add to Cart</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>                  
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'swal2-noanimation'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: 'animate__animated animate__fadeOut  animate__faster'
                }
            }
        ]).then((result)=>{
            const answers = JSON.stringify(result.value)
            if(answers){
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
                                <img src={props.src} alt="productImage" className="toastImg " />
                                <div className="ml-2 ">
                                <p className="toastAddedText">Added to Cart</p>
                                <p className="qtyPopupText text-left font-weight-normal mb-1" >{props.name}</p>
                                <p className="qtyPopupText text-left mb-0" style={{fontWeight: "600"}}>Quantity: {quantity}</p>
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
                    }
                )
            }
        })
    };

    const removeFromWishlist = ()=>{
        if(authUser){
            Axios.post(`${API}auth/add_user_details`,{
                poster_obj_id: props.product._id,
            },{   
                headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
                params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
            }).then((res)=>{
               // console.log(res);
               
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            // history.push("/login");
        }
    }

    return(
    <div className="productCardBox">
        <Link  to={`/${props.catSlug}/${props.subCatSlug}/product/id=${props.id}`}  >
            <img src={props.product.imgUrl[0] ? props.product.imgUrl[0]:"https://dummyimage.com/400x400/003459/fff.png&text=No+Image+Available" } className="" alt="productImage" className="productCardImg"/>
        </Link>
        <div className=" p-0">
            <div className=" productCardTitle"><Link className=" productCardTitle " to={`/${props.catSlug}/${props.subCatSlug}/product/id=${props.id}`} >{props.name}</Link></div>
            <p className="mb-0 mb-sm-2 mt-1 productCardDetail  ">Starts from Rs. {props.startPrice}<span className="float-right d-flex" style={{color: "#757575" , height: "12px"}}>{props.rating}<StarIcon className="d-none d-sm-inline-block " style={{width: "16px",height: "18px", color: "#F2C94C"}}  /><StarIcon className="d-inline-block d-sm-none mt-0 " style={{width: "12px",height: "12px", color: "#F2C94C"}}  /></span></p>
            <div className="d-inline-block productCardAddToCart  " role="button" onClick={selectMaterialPopup}>Add to Cart</div>
            {/* <span className="productCardDetail2  d-inline-block  mt-2 mt-sm-0">{props.itemBought} bought this</span> */}
            {
                props.wishlist?
                <span onClick={removeFromWishlist} role="button" className="productCardDetail2  d-inline-block  mt-2 mt-sm-0">Remove from Wishlist</span>:
                <span className="productCardDetail2  d-inline-block  mt-2 mt-sm-0">{props.itemBought} bought this</span>
            }
        </div>
    </div>
    );
};

export default ProductCard;