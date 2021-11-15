import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import EhsLogo from "../../images/EhsLogo2.png";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './LoginNew.css';
import { setLoginResponse } from "../../redux/actions/index.js";
import Axios from "axios";
import {API} from "../../backend"
import { login, verifyOtp } from "../../helper/apiPath";
import { connect } from "react-redux";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Spinner from "react-loading";
import withReactContent from 'sweetalert2-react-content';
import ErrorIcon from '@material-ui/icons/Error';
const MySwal = withReactContent(Swal);


const Login = (props) => {
    
  const [name, setName] = useState("Shubh");
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



  function session(r) {
    localStorage.setItem("userDetails123", JSON.stringify(r));
  }

  function responseFun(d) {
    if (d === "Successful") {
      window.location.replace("http://" + window.location.host + "/");
    } else {
      document.getElementById("loginErrorMsg").innerHTML ="**"+d;
     // $("#loginErrorMsg").text(d);
    }
  }

  function loginReq(loginbody) {
    Axios.post(`${API}auth/login`, loginbody)
      .then((res) => {
        session(res.data.data.user_details);
        props.setLoginResponse(res.data.data.session_token);
        localStorage.setItem("ehstoken12345678910", res.data.data.session_token);
        responseFun(res.data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`${err}`);
        setLoading(false);
        MySwal.fire({
          html: <div className="d-flex mt-2">
                  <ErrorIcon style={{color: "#003459"}} />
                  <p className="ml-2" style={{color: "#003459"}}>Invalid Credentials!!!</p>
              </div>,
          
          position: "top-end",
          showConfirmButton: false,
          showCloseButton: true,
          timer: 2000,
          width: "500px",
          height: "100px",
          backdrop: "rgba(0, 0, 0, 0.5)",
          scrollbarPadding: false,
          showClass: {
            popup: 'animate__animated animate__zoomIn  animate__faster',
            backdrop: 'swal2-noanimation'
          },
          hideClass: {
            popup: 'animate__animated animate__slideOutRight  animate__faster',
            backdrop: 'animate__animated animate__fadeOut  animate__faster'
          }
      })
      });
  }
  
  const { register, formState: {errors}, handleSubmit } = useForm({
    mode: "onTouched"
  })

  const onSubmit= (data) => {
    let phonenumber= "";
    if(!(data.emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
      phonenumber = data.emailid;
      data.emailid= "";
    }
    const loginbody = {
      email: data.emailid,
      phone: phonenumber,
      password: data.password
    }
    setLoading(true);
    loginReq(loginbody);
    //console.log(loginbody);
  }


    return (
            <div className="container mx-auto">
                <form className= "mx-auto text-center myBoxBorder my-5 py-5 col-md-7">
                    
                    {/*------------Logo info--------------*/}
                    <div style={{paddingBottom:"10%",}}>
                        <AccountBoxIcon id="accountIcon" />
                        <img src ={EhsLogo}/>
                    </div>
                     {/* -----------Google login------------- */}
                    <div className="Google_login text-center my-2">
                        <button style={{backgroundColor:"white", width:"80%", }} className="p-1">
                            <img src ="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" className="image-fluid inline align-middle px-2" width="50" height="auto"/>
                            <p style={{marginBottom:"0",}} className="inline align-middle px-2 h6">Continue with Google</p>
                        </button>
                    </div>

                    {/* -----------Facebook login button------------- */}
                    <div className="Google_login text-center my-3">
                        <button style={{backgroundColor:"#3b5998", width:"80%", }} className="p-2">
                            <img src ="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className="image-fluid inline align-middle px-2" width="42" height="auto"/>
                            <p style={{marginBottom:"0", color:"white"}} className="inline align-middle px-2 h6">Continue with Facebook</p>
                        </button>
                    </div>

                    <div className="text-center my-5">
                        <p className="inline px-4 h4" style={{ backgroundColor:"white", }}>OR</p>
                    </div>
                    <hr className="divhr"/>
                
                    <p className="h4" style={{ marginTop:"-20px", marginBottom:"20px"}}>Continue with E-mail Address</p>

                {/* -----------email Address ------------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_fields mx-auto">
                    <input className="my-3"
                     placeholder="Email Address / Mobile Number" 
                     name="emailid"
                     {...register("emailid",{
                        required: "**this field is required",
                        pattern: {
                              value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                              message: "please enter valid email / phone"
                            }
                      })}
                     />
                </div>
                {errors.emailid && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.emailid.message}</span>)}

                {/* -----------password------------- */}
                <div className="input_fields">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register("password",{
                        required: "**this field is required",
                        minLength: {
                          value: 8,
                          message: "Password must be atleast 8 characters long..."
                        }
                      })}
                    />
                </div>
                {errors.password && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.password.message}</span>)}

                <div className="keepSignedIn mt-3 w-100 text-center">
                       
                       {/* -----------keep me signed in------------- */}
                        <input className="align-middle inline mx-1"
                        type="checkbox"
                        name="SignedIn"
                         {...register("SignedIn")}                                     KEEP ME SIGNED IN
                        />
                        <span className="mr-3" style={{ fontSize:"1rem" }} >Keep me Signed-In</span>
                        
                        {/* -----------FORGOT PASSWORD------------- */}
                        <Link to="/forgotpassword" className="inline px-2">
                            <p className=" forgotPassword" style={{fontSize:"1rem"}}>Forgot Password?</p>
                        </Link>
                        <span className="text-danger d-block mb-2 ml-4 mt-0 errorMsg" id="loginErrorMsg"></span>
                    
                </div>

                {/* -------------LOGIN Button Submit---------------- */}
                <div className="my-2 mx-auto">
                    <button
                     id="loginBtn"
                     className="my-2"
                     type="submit"
                    >
                        Log In
                    </button>
                </div>
                </form>
                {/*-----------create an account------------*/}
                <div className="create_an_account">
                    <Link
                        className="mx-auto"
                        to="/signup"
                        >
                        <button id="signupBtn">Create an account</button>
                    </Link>
                </div>
            </form>

            </div>

            
        
    )
}

export default Login
