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
        <div className="loginPage p-1 pt-5 pb-5 p-sm-3 mx-auto mt-5 mt-sm-4 mb-5 mb-sm-4 d-block">
        <div className="d-flex justify-content-center align-items-center">
          <AccountBoxIcon id="accountIcon" />
          <img
            className=" d-inline-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input 
            className="mx-auto d-block mt-3 " 
            id="loginUserEmail" 
            type="text" 
            placeholder="Name" 
            name="name"
            {...register('name',{
              required: "**this field is required"
            })}
            />
             {errors.name && (<span className="text-danger ml-4 d-block errorMsg">{errors.name.message}</span>)}
            <div className="mt-3" style={{position: "relative"}}>
              <input 
                className="mx-auto d-block " 
                id="loginUserEmail"  
                type="text" 
                placeholder="Email or Phone Number"
                name="emailid"
                {...register('emailid',{
                  required: "**this field is required",
                  pattern: {
                    value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                    message: "please enter valid email / phone"
                  }
                })}
              />
              {errors.emailid && (<span className="text-danger ml-4 d-block  mt-0 errorMsg">{errors.emailid.message}</span>)}
              <span className="resendOTP otpBox otpBoxHide " role="button" id="sendOtpBtn"  style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#40CEFC",
              }}
              onClick={sendOtp}
              >Send OTP</span>
            </div>
            <p id="otpNote" className="note ">We will send you a verification link at your Email address or Mobile Number. Kindly click to verify your account. </p>
            <div className=" mt-3" style={{position: "relative"}}>
               <input
                className=" mx-auto d-block  "
                id="loginUserEmail"
                type="number"
                placeholder="OTP"
                name="otp"
                {...register('otp',{
                required: "**this field is required",
              })}
              />
              {errors.otp && (<span className="text-danger ml-4 d-block  mt-0 errorMsg">{errors.otp.message}</span>)}
              <span className="resendOTP otpBox  " role="button" id="verifyOtp" style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#40CEFC",
              }}
              onClick={verifyOtp}
              >Verify OTP</span>
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
            <p className="note ">The password should be at least 8 characters long. Add numbers and symbols to make it stronger. </p>
            
               <input 
                  type="checkbox"
                  className="ml-3"
                  name="agreeTermsAndConditions"
                  {...register("agreeTermsAndConditions",{
                    required: "**Agree all terms and conditions"
                  })}
                    />
                <span className="ml-1">I agree all <Link to="/termsandconditions" style={{textDecorationLine: "underline"}}>Terms and Conditions</Link></span>
                {errors.agreeTermsAndConditions && (<span className="text-danger ml-4 d-block  mt-0 errorMsg">{errors.agreeTermsAndConditions.message}</span>)}

            <button
              id="loginBtn"
              className="mt-4 mx-auto d-block"
              type="submit"
            >
              Register
            </button>
              <Link className="d-block registerAs mt-2 mx-auto" to="/login" >
              To register as a Distributor or Designer, click here.
              </Link>
              <p className="mt-4" style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                textAlign: "center",
                color: "#000000"
              }}>Already have an account?</p>


              <div className="social_login">

              {/* ----------google Login-------------------- */}

        <GoogleLogin
        buttonText="Continue with Google"
        />
         {/* ----------facebook Login-------------------- */}

        <FacebookLogin
         buttonText="Continue with Facebook"/>

        </div>
            <Link
              className="d-block mt-3 mx-auto "
              to="/login"
              style={{textDecorationLine: "none"}}
            >
              <button id="signupBtn" className="mx-auto d-block" >Log In</button>
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
