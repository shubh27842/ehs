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
      <Grid className="ml-3 d-block" style={{ width: "600px" }}>
        <Grid.Row>
          <p className="choose">CHOOSE A SUPLIER</p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
          <p className="chooseUnder">
            You can choose a suitable distributor from the dropdown list
          </p>
        </Grid.Row>
        {props.add ? (
          <>
            <Grid.Row className="mt-3">
              <TextField
                label="Add Distributor"
                style={{ width: " 506px" }}
                variant="outlined"
                onChange={(e) => {
                  setDistributor(e.target.value);
                }}
              />
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                label="Add Details"
                style={{ width: " 506px" }}
                variant="outlined"
                onChange={(e) => {
                  setDet(e.target.value);
                }}
              />
            </Grid.Row>
            <Grid.Row className="mt-3 mb-3">
              <button id="loginBtn" onClick={addDistributors}>
                ADD
              </button>
            </Grid.Row>
          </>
        ) : (
          <>
            <Grid.Row className="mt-3">
              <TextField
                select
                label="Select Distributor"
                style={{ width: " 506px" }}
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
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                value={details}
                label="Seller Details"
                style={{ width: " 506px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-1 ml-5 pl-5">
              <p className="clickHere">
                Could not find your Distributor?{" "}
                <a href="#1" onClick={() => props.setAdd(true)}>
                  Click here to Add
                </a>
              </p>
            </Grid.Row>
          </>
        )}
      </Grid>
    </>
  );
};

const BuyersDetail = (props) => {
  return (
    <>
      <Grid className="ml-3" style={{ width: "600px" }}>
        <Grid.Row>
          <p className={props.buyer ? "choose" : "fill"}>
            FILL BUYER’S DETAILS
          </p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
          <p className="chooseUnder">
            Please check all details as would you want them to be in the
            performa invoice
          </p>
        </Grid.Row>
        {props.buyer ? (
          <>
            <form>
              <Grid.Row className="mt-3">
                <TextField
                  label="Company Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
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
              </Grid.Row>
              <Grid.Row className="mt-3">
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
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Address1"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Address2"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Country"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Mobile"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Email"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Billing Address"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
            </form>
          </>
        ) : null}
      </Grid>
    </>
  );
};

const Shipping = (props) => {
  return (
    <>
      <Grid className="ml-3" style={{ width: "600px" }}>
        <Grid.Row>
          <p className="fill">BILLING ADDRESS</p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
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
        </Grid.Row>
        {props.billing ? (
          <>
            <Grid.Row className="mt-3">
              <TextField
                label="Address1"
                style={{ width: " 506px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                label="Address2"
                style={{ width: " 506px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-3">
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
            </Grid.Row>
            <Grid.Row className="mt-3 mb-3">
              <TextField
                label="Country"
                style={{ width: " 250px", marginRight: "6px" }}
                variant="outlined"
              ></TextField>
              <TextField
                label="Pincode"
                style={{ width: " 250px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
          </>
        ) : null}
      </Grid>
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
    
        <div
            style={{
              width: "660px",
              height: "710px",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
        className="mx-auto mt-5 d-block "
        
      >
   
        <div className="quotation mb-5 p-3 pl-4 " >
          

          <div >
          <Grid.Row
            className="quotation1 mt-1 "
            style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "36px",
              color: "#003459",              
            }}
          >
            PROFORMO INVOICE
          
          </Grid.Row>
            
          </div>
          

          <Grid.Row columns="2" className="mt-4 " style={{height: "94%"}}>
            <Grid.Column style={{ width: "10%" }}>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label} style={{ height: "210px" }}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{ width: "80%", marginLeft: "20px", marginTop: "22px" }}
            >
              <Grid.Row>
                <Supplier
                  setActiveStep={setActiveStep}
                  setBuyer={setBuyer}
                  dist={dist}
                  add={add}
                  setAdd={setAdd}
                />
              </Grid.Row>
              <Grid.Row>
                <BuyersDetail buyer={buyer} />
              </Grid.Row>
              <Grid.Row className="mt-3">
                <Shipping billing={billing} setBilling={setBilling} />
              </Grid.Row>
            </Grid.Column>
            <Grid.Row
              style={
                buyer
                  ? { marginLeft: "69px" }
                  : { marginLeft: "69px", marginTop: "-105px" }
              }
            >
              <button id="loginBtn" className="my-3">PREVIEW PROFORMA</button>
            </Grid.Row>
            <Grid.Row className="mt-2 pl-5 pr-5">
              <p className="chooseUnder">
                Note: Creating performa invoice is a record of intent of the
                seller to supply goods in the cart. Supplies will be subject to
                issue of format purchase order as per terms of performa invoice.
              </p>
            </Grid.Row>
          </Grid.Row>
        </div>
        
      </div>
      <div>
          <Link to="/cart">
            <HighlightOffIcon
              style={{ color: "black", position: "absolute", right: "405px",top: "140px" }}
            />
          </Link>
          </div>
    </>
  );
};

export default Quotation;
