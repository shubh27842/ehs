import React,{useEffect,useState} from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo2.png";
import { Link } from "react-router-dom";

import AccountBoxIcon from '@material-ui/icons/AccountBox';


const Signup = () => {
    return (
        <div className="main_container">
            <div className="Image_container">

             {/* ------------------- Icons--------------------- */}
                <AccountBoxIcon id="accountIcon" />
                <img className="logo" src={EhsLogo} alt="Ehs Logo" />
            </div>

             {/* -------------------Form for users registration--------------------- */}
             <form className="from_container">
                <div className="input_fields container">
                    <div className="input_fields">
                        <input 
                         type="text" 
                         placeholder="Name" 
                         name="name"
                        />
                    </div>
                    <div className="input_fields">
                        <input
                            type="text" 
                            placeholder="Email or Phone Number"
                            name="emailid"
                        />
                        <span>Send otp</span>
                    </div>


                {/* ------------for OTP----------------- */}
                <div className="input_fields">
                    <input
                        type="number"
                        placeholder="OTP"
                        name="otp"/>
                        <span>Verify OTP</span>
                    </div>


                <div className="input_fields">
                    <input
                        type="password"
                        minLength="8"
                        placeholder="Password"
                        name="password"
                    />
                </div>

                 <p className="note ">The password should be at least 8 characters long. Add numbers and symbols to make it stronger. </p>

                 <input 
                  type="checkbox"
                  name="agreeTermsAndConditions"
                 />
                <span className="ml-1">I agree all <Link to="/termsandconditions" style={{textDecorationLine: "underline"}}>Terms and Conditions</Link></span>


                <button
                    type="submit"
                >
                    Register
                </button>

                <Link className="resgistrationDesigner" to="/login" >
              To register as a Distributor or Designer, click here.
              </Link>

                </div>

               </form>


                <hr/><h3>OR</h3><hr/>


                {/* ----------- login buttons------------- */}
                <div className="social_login container">

                {/* -----------Google login------------- */}
                <div className="Google_login">
                <button className="button_login">
                        <img src ="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"/>
                        <div className="button_text">
                            Continue with Google
                        </div>
                    </button>
                </div>

                {/* -----------Facebook login button------------- */}
                <div className="Facebook_login">
                    <button className="button_login">
                        <img src ="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
                        <div className="button_text">
                            Continue with Facebook
                        </div>
                    </button>
                </div>

                {/* -----------Facebook login button------------- */}
                <Link to ="/login">
                <div className="email_login">
                    <button className="button_login">
                        <img src ="https://w7.pngwing.com/pngs/1023/729/png-transparent-email-address-electronic-mailing-list-logo-internet-email-miscellaneous-angle-triangle.png"/>
                        <div className="button_text">
                            Login 
                        </div>
                    </button>
                </div>
                </Link>



                </div>
            
        </div>
    )
}

export default Signup
