import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import fb from "../../images/fbIcon.png";
import insta from "../../images/instaIcon.png";
import linkedIn from "../../images/linkedIcon.png";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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
        <div className="mt-3  pt-3 pt-sm-0" style={{ background: "#003459" , position: "relative", bottom: "0",right:"0",left: "0"}}>
          <div className="padding-10 pt-5 pb-4 d-none d-sm-block ">
              <div className="d-flex align-items-center ">
                  <h3 className="footerhead  my-0">Our Products: </h3>
                  <div className="d-flex ml-5 mr-auto r justify-content-between " style={{color: "#FFF", width: "60%"}}>
                  <Link to="/cat/posters" className="footertxt ">
                  Posters
                </Link>|
                <Link to="/cat/signages" className="footertxt">
                  Signages
                </Link>|
                <Link to="/cat/campaigns" className="footertxt">
                  Campaigns
                </Link>|
                <Link to="/cat/floor-graphics" className="footertxt">
                  Floor Graphics
                </Link>|
                <Link to="/cat/asset-markings" className="footertxt">
                  Asset Marking
                </Link>|
                <Link to="/" className="footertxt">
                  Create Your Own
                </Link>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                  <h3 className="footerhead  my-0">Our Policies: </h3>
                  <div className="d-flex ml-5 mr-auto justify-content-between" style={{color: "#FFF", width: "50%",paddingLeft: "12px"}}>
                  <Link to="/privacy-policy" className="footertxt">
                  Privacy Policy
                </Link>|
                <Link to="/termsandconditions" className="footertxt">
                  Terms and Conditions
                </Link>|
                <Link to="/termsandconditions" className="footertxt">
                  Shipping Policy
                </Link>|
                <Link to="/termsandconditions" className="footertxt">
                  Return Policy
                </Link>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-3 ">
                  <h3 className="footerhead  my-0">Know More: </h3>
                  <div className="d-flex ml-5 mr-auto justify-content-between " style={{color: "#FFF", width: "25%",paddingLeft: "19px"}}>
                  <Link to="/about" className="footertxt">
                  About Us
                </Link>|
                <Link to="/faq" className="footertxt">
                  FAQ
                </Link>|
                <Link to="/contact" className="footertxt">
                  Contact Us
                </Link>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-3 ">
                  <h3 className="footerhead  my-0">Office: </h3>
                  <div className="d-flex ml-5 mr-auto justify-content-between " style={{color: "#FFF", width: "70%",paddingLeft: "70px"}}>
                  <li className="footertxt">Timings (Mon-Sat: 09:00 - 17:00)</li>|
                    <li className="footertxt">
                      45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                    </li>
                  </div>
              </div>
          </div>
        
        <Grid className=" d-none padding-10  " style={{paddingTop: "42px" , paddingBottom: "21px"}}>
          <Grid.Row columns="4" className="d-flex justify-content-between border">
            <Grid.Column >          
                <h3 className="footerhead">Products</h3>
                <Link to="/cat/posters" className="footertxt">
                  Posters
                </Link>
                <Link to="/cat/signages" className="footertxt">
                  Signages
                </Link>
                <Link to="/cat/campaigns" className="footertxt">
                  Campaigns
                </Link>
                <Link to="/cat/floor-graphics" className="footertxt">
                  Floor Graphics
                </Link>
                <Link to="/cat/asset-marking" className="footertxt">
                  Asset Marking
                </Link>
                <Link to="/posters" className="footertxt">
                  Create Your Own
                </Link>            
            </Grid.Column>
            <Grid.Column >
                <Link to="/privacy-policy" className="footertxt">
                  Privacy Policy
                </Link>
                <Link to="/termsandconditions" className="footertxt">
                  Terms and Conditions
                </Link>
                <Link to="/termsandconditions" className="footertxt">
                  Shipping Policy
                </Link>
            </Grid.Column>
            <Grid.Column >
                <li className="footertxt">Timings (Mon-Sat: 09:00 - 17:00)</li>
                <li className="footertxt">
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li className="footertxt">Mobile No : +91 9632418602</li>
                <li className="footertxt">Email ID : hello@ehsposters.com</li>
              
            </Grid.Column>
            <Grid.Column >
                <Link to="/about" className="footertxt">
                  About Us
                </Link>
                <Link to="/faq" className="footertxt">
                  FAQ
                </Link>
                <Link to="/contact" className="footertxt">
                  Contact Us
                </Link>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="d-block d-sm-none  mx-3 ">
            <div className="text-center d-flex justify-content-around align-items-center mx-auto" style={{color: "#FFFFFF", width: "300px"}}>
                <Link to="/privacy-policy" style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  opacity: "1",
                  color: "#FFFFFF"
                  }}>
                  Privacy Policy
                </Link>|
                <Link to="/faq" style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>
                  FAQ
                </Link>|
                <Link to="/contact" style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>
                  Contact Us
                </Link>
                
              </div>
            </div>
        <div className="d-sm-none d-flex justify-content-between align-items-center mx-auto my-2 " style={{width: "200px", height: "48px"}}>
            <img src={fb} alt="facebook" style={{width: "32px", height: "32px"}} />
            <img src={insta} alt="instagram" style={{width: "32px", height: "32px"}} />
            <img src={linkedIn} alt="linkedin" style={{width: "32px", height: "32px"}} />
        </div>
        <div className="padding-10  d-flex align-items-center " style={{height: "48px" , background: "rgba(0, 0, 0, 0.2)"}}>
            <div className="d-none d-sm-inline-flex justify-content-between align-items-center " style={{width: "160px", height: "48px"}}>
              <img src={fb} alt="facebook" style={{width: "32px", height: "32px"}} />
              <img src={insta} alt="instagram" style={{width: "32px", height: "32px"}} />
              <img src={linkedIn} alt="linkedin" style={{width: "32px", height: "32px"}} />
            </div>
            <span className="copyrightText  mt-0" >
              © 2021 Copyright. All Rights Reserved | EHSPrints.com
            </span>
            <span className="copyrightText d-none d-sm-block  ml-auto float-right"><PhoneIcon style={{color: "#FFF"}} />: +91 9632418602</span>
            <span className="copyrightText d-none d-sm-block ml-3 float-right"><MailIcon style={{color: "#FFF"}} />: hello@ehsposters.com</span>
        </div>
      </div>
    );
};

export default Footer;