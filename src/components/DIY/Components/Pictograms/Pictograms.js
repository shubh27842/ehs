import React, { useEffect, useState } from "react";
import "./Pictograms.css";
import FireEquipment from "../../FakeData/FireEquipmentData";
import MandatoryData from "../../FakeData/MandatoryData";
import ProhibitiobData from "../../FakeData/ProhibitiobData";
import WarningData from "../../FakeData/WarningData";
import PictogramsTemplate from "./PictogramsTemplate";
// import PictogramsTemplate from "../Pictograms/PictogramsTemplate";

const Pictograms = ({ pictogramImgData }) => {
  const [mandatory, setMandatory] = useState(false);
  const [fireEquipment, setFireEquipment] = useState(false);
  const [prohibitiob, setProhibitiob] = useState(false);
  const [warning, setWarning] = useState(false);

  const [pictograms, setPictograms] = useState(MandatoryData);

  useEffect(() => {
    if (mandatory == true) {
      setPictograms(MandatoryData);
    }
    if (fireEquipment == true) {
      setPictograms(FireEquipment);
    }
    if (prohibitiob == true) {
      setPictograms(ProhibitiobData);
    }
    if (warning == true) {
      setPictograms(WarningData);
    }
  }, [mandatory, fireEquipment, prohibitiob, warning]);

  return (
    <div>
      <div className="mt-5">
        <h4 className="pictograms-h4">pictograms</h4>
        <div className="pictograms-button-group ">
          <div className="d-flex flex-row-reverse">
            <div className="pictograms-button-group-main mt-3">
              <div className="d-flex">
                <button
                  onClick={() => {
                    setMandatory(true);
                    setFireEquipment(false);
                    setProhibitiob(false);
                    setWarning(false);
                  }}
                  // onClick={(e)=>handleClick(e)}
                  type="button"
                  className=" btn-class btn-road-signs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.302"
                    height="24.827"
                    viewBox="0 0 35.302 24.827"
                  >
                    <path
                      id="road"
                      d="M20.929,14.353v-.078l-.466-6.207a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H16.2a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.437l-.466,6.207v.078a.445.445,0,0,0,.155.388.593.593,0,0,0,.407.155h4.733a.593.593,0,0,0,.407-.155.445.445,0,0,0,.155-.388Zm14.722,9.058q0,1.416-.892,1.416H21.1a.567.567,0,0,0,.427-.184.544.544,0,0,0,.155-.436L21.3,19.241a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H15.362a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.436l-.388,4.966a.549.549,0,0,0,.155.436.565.565,0,0,0,.427.184H1.241q-.892,0-.892-1.416a5.846,5.846,0,0,1,.5-2.25L8.942.912a1.583,1.583,0,0,1,.5-.64A1.188,1.188,0,0,1,10.183,0h6.575a.629.629,0,0,0-.446.184A.653.653,0,0,0,16.1.621l-.291,3.724a.546.546,0,0,0,.155.446.584.584,0,0,0,.427.175h3.22a.581.581,0,0,0,.427-.175.543.543,0,0,0,.155-.446L19.9.621a.653.653,0,0,0-.213-.436A.634.634,0,0,0,19.241,0h6.575a1.181,1.181,0,0,1,.737.272,1.592,1.592,0,0,1,.5.64l8.088,20.25a5.846,5.846,0,0,1,.5,2.25Z"
                      transform="translate(-0.349)"
                      fill="#fff"
                    />
                  </svg>
                  <p className="">Mandatory </p>
                </button>
                <button
                  onClick={() => {
                    setMandatory(false);
                    setFireEquipment(true);
                    setProhibitiob(false);
                    setWarning(false);
                  }}
                  name="Fire"
                  // onClick={(e)=>handleClick(e)}
                  type="button"
                  className="btn-class btn-flammable"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.331"
                    height="26.43"
                    viewBox="0 0 20.331 26.43"
                  >
                    <path
                      id="md-flame"
                      d="M25.634,14.432l-.013.66c-.051.743-.5,2.757-1.4,3.474a8.887,8.887,0,0,0,.648-5.253C23.621,7.121,18.914,4.491,12.911,3.5l-1.092-.14c2.509,3,3.564,5.19,3.157,7.419a7.6,7.6,0,0,1-.889,2.007,9.752,9.752,0,0,0,.127-1.823A3.37,3.37,0,0,0,13.071,8.45a4.177,4.177,0,0,1-.578,3.03c-1.569,2.68-5.425,3.671-5.742,8.625v.241a9.034,9.034,0,0,0,4.363,7.94,5.505,5.505,0,0,1-.362-3.824,7.342,7.342,0,0,0,1.582,3.29,4.445,4.445,0,0,0,2.1,1.582,8.381,8.381,0,0,0,3.043.457c3.544,0,5.806-1.15,7.565-3.208s2.039-4.319,2.039-6.758a9.473,9.473,0,0,0-1.448-5.393Z"
                      transform="translate(-6.751 -3.361)"
                      fill="#fff"
                    />
                  </svg>
                  <p>Fire </p>
                </button>
              </div>
              <div className="d-flex">
                <button
                  onClick={() => {
                    setMandatory(false);
                    setFireEquipment(false);
                    setProhibitiob(false);
                    setWarning(true);
                  }}
                  type="button"
                  className="btn-class btn-emergency"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.827"
                    height="24.827"
                    viewBox="0 0 24.827 24.827"
                  >
                    <path
                      id="emergency"
                      d="M21.738,24.826H3.118a2.992,2.992,0,0,1-2.194-.909,2.984,2.984,0,0,1-.908-2.194V3.1A2.992,2.992,0,0,1,.924.909,2.987,2.987,0,0,1,3.119,0h18.62a2.992,2.992,0,0,1,2.194.909A2.987,2.987,0,0,1,24.842,3.1v18.62a3.1,3.1,0,0,1-3.1,3.1Zm0-13.965A1.532,1.532,0,0,0,20.186,9.31H15.531V4.655A1.532,1.532,0,0,0,13.98,3.1h-3.1A1.532,1.532,0,0,0,9.324,4.655V9.309H4.67a1.51,1.51,0,0,0-1.091.449,1.48,1.48,0,0,0-.46,1.1v3.1a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449H9.324v4.655a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449h3.1a1.532,1.532,0,0,0,1.552-1.552V15.516h4.655a1.532,1.532,0,0,0,1.552-1.552v-3.1Z"
                      transform="translate(-0.015)"
                      fill="#fff"
                    />
                  </svg>
                  <p>Warning</p>
                </button>
                <button
                  onClick={() => {
                    setMandatory(false);
                    setFireEquipment(false);
                    setProhibitiob(true);
                    setWarning(false);
                  }}
                  type="button"
                  className="btn-class btn-radiation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.851"
                    height="24.827"
                    viewBox="0 0 24.851 24.827"
                  >
                    <path
                      id="radioactive"
                      d="M12.425,24.827A12.189,12.189,0,0,1,7.6,23.844,12.158,12.158,0,0,1,.983,17.231a12.326,12.326,0,0,1,0-9.647A12.189,12.189,0,0,1,7.6.983a12.355,12.355,0,0,1,9.659,0,12.189,12.189,0,0,1,6.613,6.6,12.326,12.326,0,0,1,0,9.647,12.158,12.158,0,0,1-6.613,6.613,12.221,12.221,0,0,1-4.829.983Zm0-3.106V15.508a2.97,2.97,0,0,1-1.529-.413A3.139,3.139,0,0,1,9.78,14l-5.339,3.2A9.233,9.233,0,0,0,7.8,20.495,9.08,9.08,0,0,0,12.425,21.72Zm0-18.638A9.019,9.019,0,0,0,7.8,4.32a9.327,9.327,0,0,0-3.361,3.3l5.339,3.2A3.076,3.076,0,0,1,10.9,9.708a2.977,2.977,0,0,1,1.529-.413Zm-.012,7.766a1.466,1.466,0,0,0-1.092.461,1.527,1.527,0,0,0-.449,1.1,1.532,1.532,0,0,0,1.541,1.541,1.532,1.532,0,0,0,1.1-.449,1.465,1.465,0,0,0,.461-1.092,1.574,1.574,0,0,0-1.566-1.566Zm8-3.228-5.339,3.2a2.953,2.953,0,0,1,.024,3.131l5.388,3.106a9.231,9.231,0,0,0-.073-9.441Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>Prohibitiob </p>
                </button>
              </div>
              <div className="d-flex">
                <button type="button" className="btn-class btn-flammable-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.331"
                    height="26.43"
                    viewBox="0 0 20.331 26.43"
                  >
                    <path
                      id="md-flame"
                      d="M25.634,14.432l-.013.66c-.051.743-.5,2.757-1.4,3.474a8.887,8.887,0,0,0,.648-5.253C23.621,7.121,18.914,4.491,12.911,3.5l-1.092-.14c2.509,3,3.564,5.19,3.157,7.419a7.6,7.6,0,0,1-.889,2.007,9.752,9.752,0,0,0,.127-1.823A3.37,3.37,0,0,0,13.071,8.45a4.177,4.177,0,0,1-.578,3.03c-1.569,2.68-5.425,3.671-5.742,8.625v.241a9.034,9.034,0,0,0,4.363,7.94,5.505,5.505,0,0,1-.362-3.824,7.342,7.342,0,0,0,1.582,3.29,4.445,4.445,0,0,0,2.1,1.582,8.381,8.381,0,0,0,3.043.457c3.544,0,5.806-1.15,7.565-3.208s2.039-4.319,2.039-6.758a9.473,9.473,0,0,0-1.448-5.393Z"
                      transform="translate(-6.751 -3.361)"
                      fill="#fff"
                    />
                  </svg>
                  <p>Flammable </p>
                </button>
                <button type="button" className=" btn-class btn-road-signs-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.302"
                    height="24.827"
                    viewBox="0 0 35.302 24.827"
                  >
                    <path
                      id="road"
                      d="M20.929,14.353v-.078l-.466-6.207a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H16.2a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.437l-.466,6.207v.078a.445.445,0,0,0,.155.388.593.593,0,0,0,.407.155h4.733a.593.593,0,0,0,.407-.155.445.445,0,0,0,.155-.388Zm14.722,9.058q0,1.416-.892,1.416H21.1a.567.567,0,0,0,.427-.184.544.544,0,0,0,.155-.436L21.3,19.241a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H15.362a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.436l-.388,4.966a.549.549,0,0,0,.155.436.565.565,0,0,0,.427.184H1.241q-.892,0-.892-1.416a5.846,5.846,0,0,1,.5-2.25L8.942.912a1.583,1.583,0,0,1,.5-.64A1.188,1.188,0,0,1,10.183,0h6.575a.629.629,0,0,0-.446.184A.653.653,0,0,0,16.1.621l-.291,3.724a.546.546,0,0,0,.155.446.584.584,0,0,0,.427.175h3.22a.581.581,0,0,0,.427-.175.543.543,0,0,0,.155-.446L19.9.621a.653.653,0,0,0-.213-.436A.634.634,0,0,0,19.241,0h6.575a1.181,1.181,0,0,1,.737.272,1.592,1.592,0,0,1,.5.64l8.088,20.25a5.846,5.846,0,0,1,.5,2.25Z"
                      transform="translate(-0.349)"
                      fill="#fff"
                    />
                  </svg>
                  <p className="">Road Signs</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pictograms-container-icon scrollbar">
          <div className="row">
            {pictograms.map((img) => (
              <PictogramsTemplate
                img={img}
                pictogramImgData={pictogramImgData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictograms;
