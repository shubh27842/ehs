import React,{useState} from "react";
import "./Login.css";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from "react-hook-form";
import Axios from "axios";
import {API} from "../../backend";

const MySwal = withReactContent(Swal);

const ForgotPass = () => {
    const { register, formState: {errors}, handleSubmit , getValues} = useForm({
        mode: "onTouched"
    });

    const sendOtp= () => {
        let emailid = getValues("emailid");
        let phonenumber = "";
        if(!(emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
          phonenumber = emailid;
          emailid= "";
        };
        console.log(emailid,phonenumber)
        if(emailid || phonenumber){
            Axios.post(`${API}auth/getOtp`,{email: emailid,phone: phonenumber,forgot: true})
            .then((res)=> {
                console.log(res);
                document.getElementById("sendOtpBtn").innerHTML = "Resend OTP";
                document.getElementById("otpNote").innerHTML= "OTP sent successfully!!!";
                document.getElementById("otpNote").style.color= "green";
                document.getElementById("verifyOtp").innerHTML= "Verify OTP";
                document.getElementById("OTP").style.display = "block";
            }).catch((err)=>{
                console.log(err);
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
          Axios.post(`${API}auth/verifyOtp`,{email: emailid,phone: phonenumber,otp})
          .then((res)=>{
            console.log(res);
            document.getElementById("verifyOtp").innerHTML= "Verified!!!";
            document.getElementById("PASSWORD").style.display = "block";
            document.getElementById("C_PASSWORD").style.display = "block";
            document.getElementById("SUBMITBTN").style.display = "block";
          }).catch((err)=> {
            console.log(err);
          })
        }
      };

    const onSubmit = (data) => {
        //console.log(data);
        let emailid = data.emailid;
        let phonenumber = "";
        let password = data.password;
        if(!(emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
          phonenumber = emailid;
          emailid= "";
        };
        Axios.post(`${API}auth/resetPassword`,{emailid,phonenumber,password})
        .then((res)=>{
            console.log(res);
            MySwal.fire({
                html: <div className="d-flex mt-2">
                            <CheckCircleIcon style={{color: "#0C9B86"}} />
                            <div className="text-left">
                            <p className="ml-3 " style={{color: "#0C9B86"}}>Password Reset Complete!</p>
                            <p className="ml-3" style={{
                                fontFamily: "Source Sans Pro",
                                fontWeight: "normal",
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "18px",
                                color: "#757575",
                                textAlign: "left"
                            }}>Kindly login again to access EHS Prints.</p>
                            </div>
                    </div>,
                scrollbarPadding: false,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false,
                showCloseButton: true,
                width: "500px",
                backdrop: "rgba(0, 0, 0, 0.5)",
                
            });
        }).catch((err)=>{
            console.log(err);
        });      
    };
 
    return(
        <div className="forgotBox mx-auto">
            <p className="forgotHead ">Password Reset</p>
            <div className="forgotNote">
            Forgotten your password? Enter your e-mail address/ mobile number below, and we'll send you an OTP.
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2 mt-sm-3 mb-2 mb-sm-3" style={{position: "relative"}}>
                <input 
                className="forgotInput mb-0" 
                type="text" 
                placeholder="Email Address / Mobile" 
                name="emailid"
                {...register("emailid",{
                required: "**this field is required",
                pattern: {
                        value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                        message: "please enter valid email / phone"
                    }
                })}
                />
                 <span className="resendOTP otpBox otpBoxHide  " role="button" id="sendOtpBtn" onClick={sendOtp} style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#40CEFC",
                }}>Send OTP</span>
                {errors.emailid && (<span className="text-danger ml-3 d-block mt-0  errorMsg">{errors.emailid.message}</span>)}
                <p id="otpNote" className="note "> </p>
                </div>
                <div className="mt-2 mt-sm-3 mb-2 mb-sm-3" id="OTP" style={{position: "relative"}}>
                    <input 
                    className="forgotInput mb-0" 
                    type="number" 
                    placeholder="OTP" 
                    name="otp"
                    {...register("otp",{
                        required: "**this field is required"
                    })}
                    />
                    <span className="resendOTP otpBox otpBoxHide  " role="button" id="verifyOtp" onClick={verifyOtp} style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#40CEFC",
                    }}>Verify OTP</span>
                    {errors.otp && (<span className="text-danger ml-3 d-block mt-0  errorMsg">{errors.otp.message}</span>)}
                </div>
                <input 
                className="forgotInput  mb-0" 
                id="PASSWORD"
                type="password" 
                placeholder="New Password" 
                name="password"
                {...register("password",{
                    required: "**this field is required",
                    minLength: {
                        value: 8,
                        message: "Password must be atleast 8 characters long..."
                    }
                })}
                />
                {errors.password && (<span className="text-danger ml-3 d-block mt-0  errorMsg ">{errors.password.message}</span>)}

                <div style={{position: "relative"}} id="C_PASSWORD">
                <input 
                className="forgotInput mt-2 mt-sm-3 mb-0" 
                type="password" 
                placeholder="Confirm Password"
                name="confirm_password"
                {...register("confirm_password",{
                    required: "**this field is required",
                    validate: value => value === getValues("password") || "password doesn't match"
                })}
                />
                 {errors.confirm_password && (<span className="text-danger ml-3 d-block mt-0  errorMsg ">{errors.confirm_password.message}</span>)}
                </div>

                <button type="submit" id="SUBMITBTN" className="resetBtn  mx-auto mx-sm-0 mt-3 mt-sm-4">Reset Password</button>  
            </form>      
        </div>
    );
};

export default ForgotPass;