import React,{useEffect,useState} from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo2.png";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {API} from "../../backend"
import Otp from "./Otp";
import $ from "jquery"
import { setLoginResponse } from "../../redux/actions/index.js";
import { connect } from "react-redux";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useForm } from "react-hook-form";
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

const Signup = (props) => {
  const [token, setToken] = React.useState("");
  const [isToken, setIsToken] = React.useState(false);
  const [loginBody, setLoginBody] = React.useState({
    name: "",
    emailid: "",
    phonenumber: "",
    password: "",
    isAccountActive: false,
  });

  const { register,handleSubmit,formState: { errors },getValues , setValue } = useForm({
    mode: "onTouched"
  });
 
  const onSubmit = (data) => {
    let phonenumber;
    if(!(data.emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
      phonenumber = data.emailid;
      data.emailid= "";
    }

   /*setLoginBody({
      ...loginBody,
      name: data.name,
      emailid: data.emailid,
      phonenumber: phonenumber,
      password: data.password
    });
    console.log("loginbodyhook",loginBody);*/
    const loginbody = {
      userName: data.name,
      email: data.emailid,
      phone: phonenumber,
      password: data.password,
    };
    axios.post(`${API}auth/signup`,loginbody).then(res => {
      //console.log(res.data.message);
      window.location.replace("http://" + window.location.host + "/login");
    }).catch(err=>{
      console.log(err);
    });
    
  };

  const sendOtp = () =>{
    let emailid = getValues('emailid');
    let phonenumber="";
    if(!(emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
      phonenumber = emailid;
      emailid= "";
    };
    if(emailid || phonenumber){
      axios.post(`${API}auth/getOtp`,{email: emailid,phone: phonenumber})
    .then(res => {
      document.getElementById("sendOtpBtn").innerHTML = "Resend OTP";
      document.getElementById("otpNote").innerHTML= "OTP sent successfully!!!";
      document.getElementById("otpNote").style.color= "green";
      document.getElementById("verifyOtp").innerHTML= "Verify OTP";
    }).catch(err=> {
      console.log(err)
    })
    }
  };  

  function verifyOtp() {
    const otp = getValues('otp');
    let emailid = getValues('emailid');
    let phonenumber="";
    if(!(emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
      phonenumber = emailid;
      emailid= "";
    };
    if(otp && (emailid || phonenumber)){
      axios.post(`${API}auth/verifyOtp`,{email: emailid,phone: phonenumber,otp})
      .then((res)=>{
        document.getElementById("verifyOtp").innerHTML= "Verified!!!";
      }).catch((err)=> {
        console.log(err);
      })
    }
  };

  return (
    <>
        <div className="loginPage p-2 mx-auto m-4 text-center">
        
        {/* Logo */}
        <div className="justify-content-center align-items-center">
          <AccountBoxIcon id="accountIcon" />
          <img
            className=" d-inline-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>

        <div className="social_login my-4 text-center">

          {/* -----------Google login------------- */}
          <div className="Google_login text-center my-2">
            <button style={{backgroundColor:"white", }} className="p-1 widthControl">
              <img src ="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" className="image-fluid inline align-middle px-1" width="44" height="auto"/>
              <p style={{marginBottom:"0",}} className="inline align-middle px-2 h6">Signup with Google</p>
            </button>
          </div>

          {/* -----------Facebook login button------------- */}
            <div className="Google_login text-center my-3">
              <button style={{backgroundColor:"#3b5998", borderColor:"#3b5998",}} className="p-2 widthControl">
                <img src ="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className="image-fluid inline align-middle px-1" width="35" height="auto"/>
                <p style={{marginBottom:"0", color:"white"}} className="inline align-middle px-2 h6">Signup with Facebook</p>
              </button>
            </div>

        </div>

        {/* OR */}
        <div className="text-center my-2" style={{position:"relative", zIndex:"+1"}}>
          <p className="inline px-4 h4" style={{ backgroundColor:"white", color:"grey"}}>OR</p>
        </div>
        <hr className="divhr"/>

        <p className="text-center h4" style={{marginTop: "-20px", fontWeight:"600"}}>Create an account</p>
        {/* Input form */}
        <form onSubmit={handleSubmit(onSubmit)} >
            <input 
            id="loginUserEmail" 
            type="text" 
            placeholder="Name" 
            name="name"
            {...register('name',{
              required: "**this field is required"
            })}
            />
             {errors.name && (<span className="text-danger ml-4 d-block errorMsg">{errors.name.message}</span>)}
            
            <div className="my-3" style={{position: "relative"}}>
              <input 
                className="mx-auto inlineTemp width mx-2" 
                id="loginUserEmail"  
                type="text" 
                placeholder="Email / Phone Number"
                name="emailid"
                {...register('emailid',{
                  required: "**this field is required",
                  pattern: {
                    value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                    message: "please enter valid email / phone"
                  }
                })}
              />
              
              <span className="resendOTP otpBox otpBoxHide btn mx-2" id="sendOtpBtn"
              onClick={sendOtp}
              >Send OTP</span>

          {errors.emailid && (<span className="text-danger ml-4 d-block errorMsg">{errors.emailid.message}</span>)}
            </div>

            <p id="otpNote" className="note">We will send you a verification link at your Email address or Mobile Number. Kindly click to verify your account. </p>
            
            <div className=" mt-3" style={{position: "relative"}}>
               <input
                className="mx-auto inlineTemp width mx-2 "
                id="loginUserEmail"
                type="number"
                placeholder="OTP"
                name="otp"
                {...register('otp',{
                required: "**this field is required",
              })}
              />

             
              <span className="resendOTP otpBox btn mx-2" role="button" id="verifyOtp" 
              onClick={verifyOtp}
              >Verify OTP</span>

            {errors.otp && (<span className="text-danger ml-4 d-block  mt-0 errorMsg">{errors.otp.message}</span>)}
               </div>
            <input
              className="mx-auto d-block mt-3"
              id="loginUserPass"
              type="password"
              minLength="6"
              placeholder="Password"
              name="password"
              {...register('password',{
                required: "**this field is required",
              })}
            />
            {errors.password && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.password.message}</span>)}
            <p className="note my-1">The password should be at least 8 characters long. Add numbers and symbols to make it stronger. </p>
            
               <input 
                  type="checkbox"
                  className="text-center mt-4"
                  name="agreeTermsAndConditions"
                  {...register("agreeTermsAndConditions",{
                    required: "**Agree all terms and conditions"
                  })}
                    />
                <span className="ml-1">I agree all <Link to="/termsandconditions" style={{textDecorationLine: "underline"}}>Terms and Conditions</Link></span>
                {errors.agreeTermsAndConditions && (<span className="text-danger ml-4 d-block  mt-0 errorMsg">{errors.agreeTermsAndConditions.message}</span>)}

            <button
              id="loginBtn"
              className="mt-1 mx-auto d-block"
              type="submit"
            >
              Register
            </button>
              <Link className="d-block registerAs mt-2 mx-auto" to="/login" >
              To register as a Distributor or Designer, click here.
              </Link>
              <Link>
                <p className="mt-2 text-center" style={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  color: "#000000"
                }}>Already have an account?</p>
              </Link>
      
          </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
