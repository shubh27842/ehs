/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TextField, MenuItem } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Axios from "axios";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { getDistributors, addDistributor } from "../../helper/apiPath";
import swal from "sweetalert";
import "./Quotation.css";

const Supplier = (props) => {
  const [details, setDetails] = React.useState("");
  const [distributor, setDistributor] = React.useState("");
  const [det, setDet] = React.useState("");

  function addDistributors() {
    if (distributor && det) {
      Axios.post(addDistributor, { distributor: distributor, details: det })
        .then((res) => {
          swal("", res.data.message, "success");
          props.setAdd(false);
        })
        .catch((err) => console.log(err));
    } else {
      swal("Please Provide Proper Details", "", "warning");
    }
  }

  return (
    <>
      <div className="mx-auto px-2">
          <div className="hideOnSmall inline">
            <span className="numbering">1</span>
          </div>
          
          <div className="inline ml-2 widthChanger marginChanger">
          
          <p className="choose text-left">CHOOSE A SUPLIER</p>
        <div className="text-left">
          <p className="chooseUnder text-left">
            You can choose a suitable distributor from the dropdown list
          </p>
        </div>
        {props.add ? (
          <>
            <div className="mt-3">
              <TextField
                label="Add Distributor"
                style={{ width: " 100%" }}
                variant="outlined"
                onChange={(e) => {
                  setDistributor(e.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <TextField
                label="Add Details"
                style={{ width: " 100%" }}
                variant="outlined"
                onChange={(e) => {
                  setDet(e.target.value);
                }}
              />
            </div>
            <div className="mt-3 mb-3">
              <button id="loginBtn" onClick={addDistributors}>
                ADD
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3">
              <TextField
                select
                label="Select Distributor"
                style={{ width: " 100%" }}
                variant="outlined"
                onChange={(e) => {
                  props.setBuyer(true);
                  props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
                  setDetails(e.target.value);
                }}
              >
                {props.dist.map((v, i) => (
                  <MenuItem key={i} value={v.details} name={v._id}>
                    {v.distributor}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="mt-3">
              <TextField
                value={details}
                label="Seller Details"
                style={{ width: " 100%" }}
                variant="outlined"
              ></TextField>
            </div>
            <div className="mt-1 text-center">
              <p className="clickHere mb-4">
                Could not find your Distributor?{" "}
                <a href="#1" onClick={() => props.setAdd(true)}>
                  Click here to Add
                </a>
              </p>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

const BuyersDetail = (props) => {
  return (
    <>
      <div className="leftCenter pl-2">
        <div className="inline hideOnSmall">
          <span className="numbering" style={{backgroundColor:"grey"}}>2</span>
        </div>
        <div className="inline ml-2 widthChanger">
          <div className="marginChanger">
            <p className={props.buyer ? "choose leftCenter" : "fill leftCenter"} >
              FILL BUYER’S DETAILS
            </p>
          </div>
        <div>
          <p className="chooseUnder leftCenter">
            Please check all details as would you want them to be in the
            performa invoice
          </p>
        </div>
        {props.buyer ? (
          <>
            <form>
              <div className="mt-3">
                <TextField
                  label="Company Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="GST no"
                  style={{ width: " 250px", marginRight: "6px" }}
                  variant="outlined"
                ></TextField>
                <TextField
                  label="Pincode"
                  style={{ width: " 250px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="State"
                  style={{ width: " 250px", marginRight: "6px" }}
                  variant="outlined"
                ></TextField>
                <TextField
                  label="City"
                  style={{ width: " 250px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Address1"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Address2"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Country"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Contact Person Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Contact Person Mobile"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Contact Person Email"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
              <div className="mt-3">
                <TextField
                  label="Billing Address"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </div>
            </form>
          </>
        ) : null}
        </div>
      </div>
    </>
  );
};

const Shipping = (props) => {
  return (
    <>
      <div className="mx-auto" style={{ width: "110%" }}>
        <div>
          <p className="fill">BILLING ADDRESS</p>
        </div>
        <div className="text-center">
          <input
            type="checkbox"
            id="shippingAdd"
            style={{
              margin: "4px 4px 4px 0px",
            }}
            onChange={() => props.setBilling((p) => !p)}
          />
          <label htmlFor="shippingAdd" className="chooseUnder">
            Shipping address different from Billing address?
          </label>
        </div>
        {props.billing ? (
          <>
            <div className="mt-3">
              <TextField
                label="Address1"
                style={{ width: " 100%" }}
                variant="outlined"
              ></TextField>
            </div>
            <div className="mt-3">
              <TextField
                label="Address2"
                style={{ width: " 100%" }}
                variant="outlined"
              ></TextField>
            </div>
            <div >
              <TextField
              className="mt-3"
                label="State"
                style={{ width: " 100%", marginRight: "6px" }}
                variant="outlined"
              ></TextField>
              <TextField
              className="mt-3"
                label="City"
                style={{ width: " 100%" }}
                variant="outlined"
              ></TextField>
            </div>
            <div className=" mb-3">
              <TextField
              className="mt-3"
                label="Country"
                style={{ width: " 100%", marginRight: "6px" }}
                variant="outlined"
              ></TextField>
              <TextField
              className="mt-3"
                label="Pincode"
                style={{ width: " 100%" }}
                variant="outlined"
              ></TextField>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

const Quotation = (props) => {
  const [buyer, setBuyer] = React.useState(false);
  const [billing, setBilling] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [dist, setDist] = React.useState([]);
  const [add, setAdd] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  function getSteps() {
    return ["", ""];
  }
  React.useEffect(() => {
    Axios.get(getDistributors)
      .then((res) => {
        setDist(res.data.distributors);
      })
      .catch((err) => console.log(err));
  }, [add]);

  const classes = useStyles();

  return (
    <>
    
        <div className="my-4 mainBody py-3 container">
          
          <div className="myQuotation mx-auto" >
            
            {/* Cross marks */}
            <div className="text-right cross_icon mx-auto">
              <Link to="/cart">
                <HighlightOffIcon
                  style={{ color: "black", }}
                />
              </Link>
            </div>

            <div className="quotation1 mt-2">
              PROFORMO INVOICE
            </div>


            {/* <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label} style={{ height: "210px" }}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper> */}
          <div className="mx-auto">
            <div
              style={{ width: "80%", marginLeft: "20px", marginTop: "22px" }}
            >
              <div>
                <Supplier
                  setActiveStep={setActiveStep}
                  setBuyer={setBuyer}
                  dist={dist}
                  add={add}
                  setAdd={setAdd}
                />
              </div>
              <div>
                <BuyersDetail buyer={buyer} />
              </div>
              <div className="mt-3">
                <Shipping billing={billing} setBilling={setBilling} />
              </div>
            </div>
            <div className="text-center mx-auto">
              <button id="loginBtn" className="my-3">PREVIEW PROFORMA</button>
            </div>
            <div className="my-2 px-5">
              <p className="chooseUnder">
                Note: Creating performa invoice is a record of intent of the
                seller to supply goods in the cart. Supplies will be subject to
                issue of format purchase order as per terms of performa invoice.
              </p><br/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Quotation;
