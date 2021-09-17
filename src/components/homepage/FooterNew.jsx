import React from "react";
import "./footer.css";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import fb from "../../images/fbIcon.png";
import insta from "../../images/instaIcon.png";
import linkedIn from "../../images/linkedIcon.png";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import EhsLogo from "../../images/EhsLogo.svg";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = (props) => {
    const [authUser, setAuthUser] = React.useState("");
  React.useEffect(() => {
     if (JSON.parse(localStorage.getItem("userDetails123")))
       setAuthUser(
         JSON.parse(localStorage.getItem("userDetails123")).emailid ||
           JSON.parse(localStorage.getItem("userDetails123")).phonenumber
       );
   }, [props.loginResponse]);
    return (
        <div className="padding-10 pt-5 pb-2 pb-lg-4 " style={{ background: "#003459" , position: "relative", bottom: "0",right:"0",left: "0"}}>
            <div className="d-flex flex-lg-row flex-column align-items-lg-end">
                <img src={EhsLogo} alt="logo" className="footerLogo mr-4" />
                <div className="footerSearchBar d-flex  mt-2 ">
                    <input type="text" placeholder="search" className="footerInput" />
                    <SearchIcon className="footerSearchIcon" id="footerSearchIcon" role="button" />
                </div>
            </div>
            <div className="my-4 d-flex justify-content-between">
                <div className="footerContact d-none d-lg-block">
                    <p className="footerHeadN">Contact Us</p>
                    <p className="footerText mb-0">
                    Timings (Mon-Sat: 09:00 - 17:00)<br/>45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001<br/>Mobile No : +91 9632418602<br/>Email ID : hello@ehsposters.com
                    </p>
                    <div className="d-flex w-100 mt-4">
                        <FacebookIcon className="footerIcon" />
                        <InstagramIcon className="footerIcon mx-5" />
                        <TwitterIcon className="footerIcon mr-5" />
                        <LinkedInIcon className="footerIcon" />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <p className="footerHeadN">Products</p>
                    <Link to="/cat/posters" className="footerText">Posters</Link>
                    <Link to="/cat/signages" className="footerText">Signages</Link>
                    <Link to="/" className="footerText">Campaigns</Link>
                    <Link to="/cat/floor-graphics" className="footerText">Floor Graphics</Link>
                    <Link to="/cat/asset-markings" className="footerText">Asset Markings</Link>
                    <Link to="/" className="footerText">Create Your Own</Link>
                </div>
                <div className="d-flex flex-column">
                    <p className="footerHeadN">My Account</p>
                    <Link to="/" className="footerText">Profile</Link>
                    <Link to="/" className="footerText">Order History</Link>
                    <Link to="/" className="footerText">Order Tracking</Link>
                    <Link to="/register" className="footerText">Create an Account</Link>
                    <Link to="/" className="footerText">New User Guide</Link>
                </div>
                <div className="d-flex flex-column">
                    <p className="footerHeadN">About</p>
                    <Link to="/privacy-policy" className="footerText">Privacy Policy</Link>
                    <Link to="/" className="footerText">Support</Link>
                    <Link to="/" className="footerText">Join Us(Affiliate)</Link>
                    <Link to="/faq" className="footerText">FAQs</Link>
                </div>
            </div>
           

            <div className="footerContact d-block d-lg-none">
                    <p className="footerHeadN ">Contact Us</p>
                    <p className="footerText mb-0">
                    Timings (Mon-Sat: 09:00 - 17:00)<br/>45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001<br/>Mobile No : +91 9632418602<br/>Email ID : hello@ehsposters.com
                    </p>
                    <div className="d-flex w-100 mt-2">
                        <FacebookIcon className="footerIcon" />
                        <InstagramIcon className="footerIcon mx-2" />
                        <TwitterIcon className="footerIcon mr-2" />
                        <LinkedInIcon className="footerIcon" />
                    </div>
            </div>
            <div className="copyrightTxt w-100 mt-2">
            © 2021 Copyright. All Rights Reserved | EHSPrints.com
            </div>
        </div>
    );
};

export default Footer;