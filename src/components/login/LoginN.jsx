import React,{useState,useEffect} from "react";
import "./Login.css";
import ReactDOM from 'react-dom';
import EhsLogo from "../../images/EhsLogo2.png";
import { setLoginResponse } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from "../../backend"
import { login, verifyOtp } from "../../helper/apiPath";
import { connect } from "react-redux";
import swal from "sweetalert";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Spinner from "react-loading";
import withReactContent from 'sweetalert2-react-content';
import ErrorIcon from '@material-ui/icons/Error';
import { GoogleLogin } from 'react-google-login';
import { facebookProvider, googleProvider } from "../../firebase/authMethods";
import socialMediaAuth from "../../firebase/authService/auth";

// import {SocialIcon} from 'react-social-icons';



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
  const handleAuthOnClick = async (provider)=>{
    const res = await socialMediaAuth(provider);
    console.log(res)
    
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



  // -------------------------------------- social login with firebase-----------------------------------
  

  return (
    <>
      <div className="loginPage text-center mx-auto py-2 my-4">
        <div className="text-center align-items-center my-2">
          <AccountBoxIcon id="accountIcon" className="px-1"/>
          <img
            className=" d-inline-block px-2"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>
        <div className="social_login my-4 text-center">

          {/* -----------Google login------------- */}
          {/* <GoogleLogin
                    clientId="Your google client id"
                    buttonText="Login with google"
                    // onSuccess={responseGoogle}
                    // cookiePolicy={'single_host_origin'}
                    className="Google_login  widthControl "
                />
                
                <FacebookLogin
                appId="Your facebook app id"
                // autoLoad={false}
                // fields="name,email,picture"
                // callback={responseFacebook} 
                /> */}
          <div className="Google_login text-center my-2">
            <button style={{backgroundColor:"white", }} className="p-1 widthControl"  onClick={()=>handleAuthOnClick(googleProvider)} >
              <img src ="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" className="image-fluid inline align-middle px-1" width="44" height="auto"/>
              <p style={{marginBottom:"0",}} className="inline align-middle px-2 h6">Continue with Google</p>
            </button>
          </div>

          {/* -----------Facebook login button------------- */}
            <div className="Google_login text-center my-3">
              <button style={{backgroundColor:"#3b5998", borderColor:"#3b5998",}} className="p-2 widthControl"  onClick={()=>handleAuthOnClick(facebookProvider)} >
                <img src ="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className="image-fluid inline align-middle px-1" width="35" height="auto"/>
                <p style={{marginBottom:"0", color:"white"}} className="inline align-middle px-2 h6">Continue with Facebook</p>
              </button>
            </div>

        </div>

        {/* OR */}
        <div className="text-center my-2" style={{position:"relative", zIndex:"+1"}}>
          <p className="inline px-4 h4" style={{ backgroundColor:"white", color:"grey",}}>OR</p>
        </div>
        <hr className="divhr"/>


        {/* input form */}
        <form onSubmit={handleSubmit(onSubmit)} className="negMargin">
          <input 
            type="text"
            className="mx-auto my-1 inputForm" 
            id="loginUserEmail"  
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
            {errors.emailid && (<span className="text-danger d-block errorMsg">{errors.emailid.message}</span>)}
            <input
              className="mx-auto my-1 p-2 inputForm"
              id="loginUserPass"
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
            {errors.password && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.password.message}</span>)}
            
            {/* Keep me sign in */}
            <div className="text-center align-middle">
              <div className="keepSignedIn align-middle inline mx-2">
                <input 
                type="checkbox"
                className="align-middle"
                name="SignedIn"
                {...register("SignedIn")}
                  />
                <span className="ml-1">Keep me Signed In</span>
              </div>
                
              {/* Forgot password */}
              <Link to="/forgotpassword" className="inline mx-2 align-middle">
              <p className="forgotPassword align-middle">Forgot Password?</p>
              </Link>
              <span className="text-danger d-block mb-2 mt-0 errorMsg" id="loginErrorMsg"></span>
            </div>

            {/* Login */}
          <div className="mt-4 mb-2">
            <button id="loginBtn" type="submit" >
              Log In
            </button>
          </div>
        </form>

        <p className="or">or</p>

        <Link className="" to="/signup">
          <button id="signupBtn">Create an account</button>
        </Link>
      </div>

  
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginResponse: (payload) => dispatch(setLoginResponse(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
