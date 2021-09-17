/*jshint esversion: 6 */
import React from "react";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import {Link} from "react-router-dom";

const PrivacyPolicy = (props) => {
  return (
    <>
       <div className=" my-sm-2 my-1 padding-10" >
                <Link to="/" className="text-dark "><ArrowBackIosRoundedIcon  style={{width: "12px",marginBottom: "2px" }} /> Back to Home </Link>
          </div>
          <div className=" padding-10 py-sm-4 py-2" style={{ background: "#F6F6F6" }}>
            <h1 className=" catHead text-capitalize text-left" >
                Privacy Policy
            </h1>
          </div>
        <div className="padding-10">
            <p className="privacyText my-5 ">
            This Privacy Policy describes how www.EHSprints.com collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
            </p>
            <div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Collecting Personal Information:</li>
                <p className="privacyText1 mb-0">When you visit the site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.</p>
              </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Device information:</li>
                <p className="privacyText1 mb-0">Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.<br /> Purpose of collection: To load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.<br/> Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</p>
              </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Order information:</li>
                <p className="privacyText1 mb-0">Examples of Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.<br/> Purpose of collection: To provide products or services to you to fulfil our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.<br/> Source of collection: Collected from you.<br/> Customer support information.<br/> Purpose of collection: To provide customer support.<br/> Source of collection: Collected from you.</p>
              </div>
              <div className="privacyTextBox">
              <li className="privacySubhead ">Minors:</li>
              <p className="privacyText1 mb-0">The Site is not intended for individuals under the age of 16. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address below to request deletion.</p>
            </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Behavioural Advertising:</li>
                <p className="privacyText1 mb-0">As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:<br/> We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: https://policies.google.com/privacy?hl=en. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.<br/> We share information about your use of the Site, your purchases, and your interaction with our ads on other websites with our advertising partners. We collect and share some of this information directly with our advertising partners, and in some cases through the use of cookies or other similar technologies (which you may consent to, depending on your location).<br/> For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work. You can opt out of targeted advertising by:<br/> FACEBOOK - https://www.facebook.com/settings/?tab=ads <br/>GOOGLE - https://www.google.com/settings/ads/anonymous <br/>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.</p>
              </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Using Personal Information:</li>
                <p className="privacyText1 mb-0"> We use your personal Information to provide our services to you, which includes: Offering products for sale, processing payments, shipping and fulfilment of your order, and keeping you up to date on new products, services, and offers.</p>
              </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Retention:</li>
                <p className="privacyText1 mb-0"> When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information.</p>
              </div>
              <div className="privacyTextBox">
                <li className="privacySubhead ">Changes:</li>
                <p className="privacyText1 mb-0"> We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
              </div>
              <div className="privacyTextBox">
                  <li className="privacySubhead ">Contact:</li>
                  <p className="privacyText1 mb-0">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@ehsprints.com.<br/> If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority, or our supervisory authority.</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
