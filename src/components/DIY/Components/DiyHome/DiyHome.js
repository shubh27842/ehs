import React, { useEffect, useRef, useState } from "react";
import imgCaution from "../../Image/Caution_7x10_01.jpeg";
import Background from "../Background/Background";
import Logo from "../Logo/Logo";
import Pictograms from "../Pictograms/Pictograms";
import Templates from "../Templates/Templates";
import Text from "../Text/Text";
import Upload from "../Upload/Upload";
import FakeData from "../../FakeData/FakeData";
import PictogramsAllData from "../../FakeData/PictogramsAllData";
import img00101 from "../../Image/Mandatory/M0001.jpg";
import "./DiyHome.css";

import MainBody from "../MainBody/MainBody";
import Test from "../TestSector/Test";
import TestClass from "../TestSector/TestClass";
import html2canvas from "html2canvas";
// import html2canvas from "@nidi/html2canvas";
import { jsPDF } from "jspdf";
import GetAppIcon from "@material-ui/icons/GetApp";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Transliterate from "../TestSector/Transliterate";
import TextAreaHeight from "../TestSector/TextAreaHeight";
import Html2canvase from "../TestSector/Html2canvase";
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

// let useClickOutside = (handler) => {
//   let domNode = useRef();
//   console.log(domNode);
//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return domNode;
// };

const DiyHomeOne = () => {
  const [showToggleTemplates, setToggleTemplates] = useState(false);
  const [showPanel, togglePanel] = useState(false);
  const [showTextPanel, setTextPanel] = useState(false);
  const [showUploadPanel, setUploadPanel] = useState(false);
  const [showLogoPanel, setLogoPanel] = useState(false);
  const [showBackgroundPanel, setBackgroundPanel] = useState(false);
  const [selectedImg, setSelectedImg] = useState({
    id: "01",
    item: "01",
    img: imgCaution,
  });
  const [selectedPictogramsImg, setSelectedPictogramsImg] = useState({
    id: "00101",
    img: img00101,
  });
  const [imgState, setImgState] = useState({ file: null });

  //------------cancelPictogramsImg-------------
  const [cancelPictogramsImage, setCancelPictogramsImage] = useState(true);

  const CancelPictogramImageFan = () => {
    setCancelPictogramsImage(false);
  };
  //------------cancelLogoImg-------------
  const [cancelLogoImage, setCancelLogoImage] = useState(false);

  const CancelLogoImageFan = () => {
    // setCancelLogoImage(false);
    setImgState({
      file: null,
    });
  };

  const containerPictogramsLeft =
    showPanel ||
    showToggleTemplates ||
    showTextPanel ||
    showUploadPanel ||
    showLogoPanel ||
    showBackgroundPanel
      ? "0px"
      : "-540px";
  const containerPictogramsTransition =
    showPanel ||
    showToggleTemplates ||
    showTextPanel ||
    showUploadPanel ||
    showLogoPanel ||
    showBackgroundPanel
      ? "0.3s all cubic-bezier(0.22, 0.61, 0.36, 1)"
      : "0.3s all cubic-bezier(0.22, 0.61, 0.36, 1)";
  const containerMainTransition =
    showPanel ||
    showToggleTemplates ||
    showTextPanel ||
    showUploadPanel ||
    showLogoPanel ||
    showBackgroundPanel
      ? "0.3s all cubic-bezier(0.22, 0.61, 0.36, 1)"
      : "0.3s all cubic-bezier(0.22, 0.61, 0.36, 1)";
  const containerMain =
    showPanel ||
    showToggleTemplates ||
    showTextPanel ||
    showUploadPanel ||
    showLogoPanel ||
    showBackgroundPanel
      ? "145px"
      : "380px";

  // image

  const imgData = (imgId) => {
    var templateData = FakeData.find((data) => data.id == imgId);
    setSelectedImg(templateData);
  };
  const pictogramImgData = (imgId) => {
    var pictogramsData = PictogramsAllData.find((data) => data.id == imgId);
    setSelectedPictogramsImg(pictogramsData);
    setCancelPictogramsImage(true);
  };

  // logo Upload

  function handleLogAndImgChange(event) {
    setImgState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    // setCancelLogoImage(true);
  }

  // useEffect(() => {

  //   if (imgState != null) {
  //     setCancelLogoImage(true);
  //   }
  // }, [imgState]);

  // --------------text
  const [texts, setTexts] = useState({
    id: "unique-1",
    text: "Default Header Text ",
  });

  // let texts = { id: "unique-1", text: "" };
  let textsTwo = { id: "unique-2" };
  let textsThree = { id: "unique-3" };
  const textRef = React.useRef();
  function EditButton(props) {
    return (
      <button
        className="btn"
        key={props.cmd}
        onMouseDown={(evt) => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        {props.name}
      </button>
    );
  }

  // ----------------font text---------------------
  // const [fontName, setFontName] = useState("Open Sans");
  // const fontChange = (e) => {
  //   setFontName(e.target.value);
  // };
  // console.log(fontName);
  // ----------------font size text---------------------
  const [fontSizeName, setFontSizeName] = useState(18);
  const fontSizeChange = (e) => {
    setFontSizeName(e.target.value);
  };
  // ----------------format size text---------------------
  // const [currentRadioFormatValue, setCurrentRadioFormatValue] = useState("");

  // const handleRadioFormatChange = (e) => {
  //   setCurrentRadioFormatValue(e.target.value);
  // };

  // color bg
  const [color, setColor] = useState("#fff");

  // -------------------draguble click-------------------

  // const [isEditable, setIsEditable] = useState(true);

  // const handleOnDoubleDraggable = () => {
  //   setIsEditable(false);
  // };

  // let domNode = useClickOutside(() => {
  //   setIsEditable(true);

  // });

  // download pdf and png
  const inputRef = useRef(null);
  const printDocumentPDF = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 30, 25);
      pdf.save("download.pdf");
    });
  };
  const printDocumentPNG = () => {
    html2canvas(inputRef.current).then((canvas) => {
      var image = canvas.toDataURL("png");
      var a = document.createElement("a");
      a.setAttribute("download", "myImage.png");
      a.setAttribute("href", image);
      a.click();
    });
  };

  // text part-----------------------------------
  //text editable-----------------------
  const [editHeader, setEditHeader] = React.useState(false);
  const [editSubHeader, setEditSubHeader] = React.useState(false);
  const [editBody, setEditBody] = React.useState(false);

  // header components
  //font name
  const [fontName, setFontName] = useState("sans-serif");
  const fontChange = (e) => {
    setFontName(e.target.value);
  };

  // fontChange
  const [fontSizeValue, setFontSizeValue] = useState(28);
  const ChangeFontValue = (e) => {
    setFontSizeValue({
      ...fontSizeValue,
      fontSize: parseInt(e.target.value),
    });
  };
  //color change
  // const [colorValueBody, setColorValueBody] = useState("#000");
  // const onFontColorChangeBody = (e) => {
  //   setColorValue({
  //     ...colorValue,
  //     color: e.target.value,
  //   });
  // };
  const [currentRadioFormatValue, setCurrentRadioFormatValue] = useState("");

  const handleRadioFormatChange = (e) => {
    setCurrentRadioFormatValue(e.target.value);
  };

  // btn fun
  const [headerTextStyle, setHeaderTextStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    id: "unique-1",
    text: "Default Header Text ",
  });
  const [subHeaderTextStyle, setSubHeaderTextStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    id: "unique-2",
    text: "Default Sub Header Text ",
  });
  const [bodyTextStyle, setBodyTextStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    id: "unique-3",
    text: "Default Body Text ",
  });
  console.log("bodyTextStyle", bodyTextStyle);
  // const [headerItalic, setHeaderItalic] = useState("");
  // const [headerUnderline, setHeaderUnderline] = useState("");

  // const handleBoldFun = (e) => {
  //   // setHeaderBold(e.target.value);
  //   console.log("object");
  //   setHeaderBold({
  //     ...headerBold,
  //     fontWeight: headerBold === "Bold" ? "normal" : "bold",
  //   });
  // };
  // const handleItalicFun = (e) => {
  //   setHeaderItalic(e.target.value);
  // };
  // const headerUnderlineFun = (e) => {
  //   setHeaderUnderline(e.target.value);
  // };
  // console.log(headerTextStyle, headerItalic, headerUnderline);
  // color text

  const [textColor, setTextColor] = useState("#000");
  //sub header
  //font name
  const [fontNameSubHeader, setFontNameSubHeader] = useState("sans-serif");
  const fontChangeSubHeader = (e) => {
    setFontNameSubHeader(e.target.value);
  };
  const [fontSizeValueSubHeader, setFontSizeValueSubHeader] = useState(28);
  const ChangeFontValueSubHeader = (e) => {
    setFontSizeValueSubHeader({
      ...fontSizeValueSubHeader,
      fontSize: parseInt(e.target.value),
    });
  };
  const [
    currentRadioFormatValueSubHeader,
    setCurrentRadioFormatValueSubHeader,
  ] = useState("");

  const handleRadioFormatChangeSubHeader = (e) => {
    setCurrentRadioFormatValueSubHeader(e.target.value);
  };

  const [textColorSubHeader, setTextColorSubHeader] = useState("#000");
  //body text
  //font name
  const [fontNameBody, setFontNameBody] = useState("sans-serif");
  const fontChangeBody = (e) => {
    setFontNameBody(e.target.value);
  };
  const [fontSizeValueBody, setFontSizeValueBody] = useState(28);
  const ChangeFontValueBody = (e) => {
    setFontSizeValueBody({
      ...fontSizeValueBody,
      fontSize: parseInt(e.target.value),
    });
  };
  const [currentRadioFormatValueBody, setCurrentRadioFormatValueBody] =
    useState("");

  const handleRadioFormatChangeBody = (e) => {
    setCurrentRadioFormatValueBody(e.target.value);
  };
  const [textColorBody, setTextColorBody] = useState("#000");

  //-------------------- Headers text----------------
  const [headerText, setHeaderText] = useState(true);
  const enableHeaderText = () => {
    setHeaderText(true);
  };
  const disEnableHeaderText = () => {
    setHeaderText(false);
    setEditHeader(false);
  };
  // ------
  const [subHeaderText, setSubHeaderText] = useState(true);
  const enableSubHeaderText = () => {
    setSubHeaderText(true);
  };
  const disEnableSubHeaderText = () => {
    setSubHeaderText(false);
    setEditSubHeader(false);
  };
  // -------
  const [bodyText, setBodyText] = useState(true);
  const enableBodyText = () => {
    setBodyText(true);
  };
  const disEnableBodyText = () => {
    setBodyText(false);
    setEditBody(false);
  };
  const [headerLanguage, setHeaderLanguage] = useState("en");
  const handelLanguageChange = (e) => {
    setHeaderLanguage(e.target.value);
  };
  const [headerSubLanguage, setHeaderSubLanguage] = useState("en");
  const handelSubLanguageChange = (e) => {
    setHeaderSubLanguage(e.target.value);
  };
  const [bodyLanguage, setBodyLanguage] = useState("en");
  const bodyLanguageChange = (e) => {
    setBodyLanguage(e.target.value);
  };

  return (
    <div className="mx-auto text-center">
      <div className="inactiveOnMobile">
        <h1 className="mt-5">Please open this site on desktop to access this page</h1>
        <DesktopMacIcon fontSize="large"/>
      </div>
      <div className="diy-header">
        <h3 className="container diy-header-h3">DIY</h3>
      </div>
      <div className="d-flex pt-4">
        <div
          style={{
            left: `${containerPictogramsLeft}`,
            position: `relative`,
            transition: `${containerPictogramsTransition}`,
          }}
          className="diy-container-pictograms col"
        >
          <div style={{ marginLeft: "27%" }}>
            {showToggleTemplates && <Templates imgData={imgData} />}
            {showPanel && <Pictograms pictogramImgData={pictogramImgData} />}
            {showTextPanel && (
              <Text
                enableHeaderText={enableHeaderText}
                enableSubHeaderText={enableSubHeaderText}
                enableBodyText={enableBodyText}
                fontSizeChange={fontSizeChange}
                fontChange={fontChange}
                EditButton={EditButton}
                handleRadioFormatChange={handleRadioFormatChange}
                setTextColor={setTextColor}
                // texts={texts}
                textsTwo={textsTwo}
                textsThree={textsThree}
                // textRef={textRef}
                ChangeFontValue={ChangeFontValue}
                // onFontColorChange={onFontColorChange}
                ChangeFontValueSubHeader={ChangeFontValueSubHeader}
                fontChangeSubHeader={fontChangeSubHeader}
                handleRadioFormatChangeSubHeader={
                  handleRadioFormatChangeSubHeader
                }
                setTextColorSubHeader={setTextColorSubHeader}
                fontChangeBody={fontChangeBody}
                ChangeFontValueBody={ChangeFontValueBody}
                handleRadioFormatChangeBody={handleRadioFormatChangeBody}
                setTextColorBody={setTextColorBody}
                editHeader={editHeader}
                setEditHeader={setEditHeader}
                editSubHeader={editSubHeader}
                setEditSubHeader={setEditSubHeader}
                editBody={editBody}
                setEditBody={setEditBody}
                texts={texts}
                setTexts={setTexts}
                handelLanguageChange={handelLanguageChange}
                handelSubLanguageChange={handelSubLanguageChange}
                bodyLanguageChange={bodyLanguageChange}
                // handleBoldFun={handleBoldFun}
                // handleItalicFun={handleItalicFun}
                // headerUnderlineFun={headerUnderlineFun}
                headerTextStyle={headerTextStyle}
                setTextData={setHeaderTextStyle}
                subHeaderTextStyle={subHeaderTextStyle}
                setSubHeaderTextData={setSubHeaderTextStyle}
                bodyTextStyle={bodyTextStyle}
                setBodyTextStyle={setBodyTextStyle}
              />
            )}
            {showUploadPanel && (
              <Upload handleLogAndImgChange={handleLogAndImgChange} />
            )}
            {showLogoPanel && (
              <Logo handleLogAndImgChange={handleLogAndImgChange} />
            )}
            {showBackgroundPanel && (
              <Background
                setColor={setColor}
                handleLogAndImgChange={handleLogAndImgChange}
              />
            )}
          </div>
        </div>

        <div
          style={{
            right: `${containerMain}`,
            transition: `${containerMainTransition}`,
            position: "relative",
          }}
          className="diy-container col"
        >
          <div className="diy-body">
            <div>
              <MainBody
                imgState={imgState}
                selectedPictogramsImg={selectedPictogramsImg}
                CancelPictogramImageFan={CancelPictogramImageFan}
                cancelLogoImage={cancelLogoImage}
                CancelLogoImageFan={CancelLogoImageFan}
                cancelPictogramsImage={cancelPictogramsImage}
                selectedImg={selectedImg}
                color={color}
                fontName={fontName}
                fontSizeName={fontSizeName}
                currentRadioFormatValue={currentRadioFormatValue}
                textColor={textColor}
                // isEditable={isEditable}
                // handleOnDoubleDraggable={handleOnDoubleDraggable}
                headerText={headerText}
                disEnableHeaderText={disEnableHeaderText}
                subHeaderText={subHeaderText}
                disEnableSubHeaderText={disEnableSubHeaderText}
                bodyText={bodyText}
                disEnableBodyText={disEnableBodyText}
                inputRef={inputRef}
                // domNode={domNode}
                texts={headerTextStyle}
                textsTwo={subHeaderTextStyle}
                textsThree={bodyTextStyle}
                textRef={textRef}
                fontSizeValue={fontSizeValue}
                // colorValue={colorValue}
                fontSizeValueSubHeader={fontSizeValueSubHeader}
                fontNameSubHeader={fontNameSubHeader}
                currentRadioFormatValueSubHeader={
                  currentRadioFormatValueSubHeader
                }
                textColorSubHeader={textColorSubHeader}
                fontNameBody={fontNameBody}
                fontSizeValueBody={fontSizeValueBody}
                currentRadioFormatValueBody={currentRadioFormatValueBody}
                textColorBody={textColorBody}
                editHeader={editHeader}
                setEditHeader={setEditHeader}
                editSubHeader={editSubHeader}
                setEditSubHeader={setEditSubHeader}
                editBody={editBody}
                setEditBody={setEditBody}
                headerLanguage={headerLanguage}
                headerSubLanguage={headerSubLanguage}
                bodyLanguage={bodyLanguage}

                // headerTextStyle={headerTextStyle}
              />
              {/* <Test text="hello World" /> */}
              {/* <TestClass EditButton={EditButton} /> */}
              {/* <Transliterate /> */}
              {/* <TextAreaHeight /> */}
              {/* <Html2canvase /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="diy-sidebar">
          <div className="py-2 diy-sidebar-div">
            <div
              onClick={() => {
                setToggleTemplates(!showToggleTemplates);
                togglePanel(false);
                setTextPanel(false);
                setUploadPanel(false);
                setLogoPanel(false);
                setBackgroundPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showToggleTemplates ? "diy-icon active" : "diy-icon")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="64.14"
                viewBox="0 0 68 64.14"
              >
                <g
                  id="Group_220"
                  data-name="Group 220"
                  transform="translate(-28 -274.755)"
                >
                  <g
                    id="layout_29"
                    data-name="layout 29"
                    transform="translate(35 274.755)"
                  >
                    <path
                      id="Path_9548"
                      data-name="Path 9548"
                      d="M3,46.191V8.4A5.4,5.4,0,0,1,8.4,3h18.9V51.59H8.4A5.4,5.4,0,0,1,3,46.191Z"
                      transform="translate(-3 -3)"
                      fill="none"
                    />
                    <path
                      id="Path_9549"
                      data-name="Path 9549"
                      d="M12,3H30.9a5.4,5.4,0,0,1,5.4,5.4V46.191a5.4,5.4,0,0,1-5.4,5.4H12Z"
                      transform="translate(12.295 -3)"
                      fill="none"
                    />
                    <path
                      id="Path_9550"
                      data-name="Path 9550"
                      d="M2,7.611V33.795a5.611,5.611,0,0,0,5.611,5.611H33.795a5.611,5.611,0,0,0,5.611-5.611V7.611A5.611,5.611,0,0,0,33.795,2H7.611A5.611,5.611,0,0,0,2,7.611ZM35.665,18.832H22.573V5.741H33.795a1.87,1.87,0,0,1,1.87,1.87ZM22.573,35.665V22.573H35.665V33.795a1.87,1.87,0,0,1-1.87,1.87ZM5.741,7.611a1.87,1.87,0,0,1,1.87-1.87H18.832V35.665H7.611a1.87,1.87,0,0,1-1.87-1.87Z"
                      transform="translate(3.592 -0.21)"
                      fill={showToggleTemplates ? "#56CCF2" : "#fff"}
                    />
                  </g>
                  <text
                    id="Templates"
                    transform="translate(28 334.895)"
                    fill={showToggleTemplates ? "#56CCF2" : "#fff"}
                    font-size="13"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      Templates
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>

            <div
              onClick={() => {
                setToggleTemplates(false);
                togglePanel(!showPanel);
                setTextPanel(false);
                setUploadPanel(false);
                setLogoPanel(false);
                setBackgroundPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showPanel ? "diy-icon active" : "diy-icon ")
              }
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="65.471"
                  viewBox="0 0 73 65.471"
                >
                  <g
                    id="Group_219"
                    data-name="Group 219"
                    transform="translate(-30 -366.187)"
                  >
                    <text
                      id="Pictograms"
                      transform="translate(30 427.658)"
                      fill={showPanel ? "#56CCF2" : "#fff"}
                      font-size="13"
                      font-family="OpenSans-Bold, Open Sans"
                      font-weight="700"
                    >
                      <tspan x="0" y="0">
                        Pictograms
                      </tspan>
                    </text>
                    <g
                      id="Group_211"
                      data-name="Group 211"
                      transform="translate(37.764 366.032)"
                    >
                      <g
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        transform="translate(15.338 14.368)"
                        fill="none"
                        stroke={showPanel ? "#56CCF2" : "#fff"}
                        stroke-width="4"
                      >
                        <circle
                          cx="13.769"
                          cy="13.769"
                          r="13.769"
                          stroke="none"
                        />
                        <circle
                          cx="13.769"
                          cy="13.769"
                          r="11.769"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Polygon_9"
                        data-name="Polygon 9"
                        transform="translate(0.236 0.155)"
                        fill="#003459"
                      >
                        <path
                          d="M 27.62523078918457 29.97901153564453 L 10.57191944122314 29.97901153564453 C 9.113479614257812 29.97901153564453 7.812999725341797 29.22175216674805 7.093129634857178 27.9533519744873 C 6.373270034790039 26.68496131896973 6.389949798583984 25.18017196655273 7.137749671936035 23.92804145812988 L 15.66440010070801 9.65084171295166 C 16.39325904846191 8.430420875549316 17.67707061767578 7.70181131362915 19.09856986999512 7.70181131362915 C 20.52008056640625 7.70181131362915 21.80388069152832 8.430420875549316 22.53273963928223 9.65084171295166 L 31.05940055847168 23.92804145812988 C 31.80719947814941 25.18017196655273 31.82387924194336 26.68496131896973 31.1040096282959 27.95336151123047 C 30.38414001464844 29.22175216674805 29.08366012573242 29.97901153564453 27.62523078918457 29.97901153564453 Z"
                          stroke="none"
                        />
                        <path
                          d="M 19.09856986999512 9.701808929443359 C 18.75728988647461 9.701808929443359 17.90678024291992 9.796770095825195 17.38147926330566 10.67634010314941 L 8.854820251464844 24.95351982116699 C 8.315889358520508 25.85593032836914 8.659688949584961 26.66164970397949 8.83251953125 26.96617889404297 C 9.005350112915039 27.27070999145508 9.520820617675781 27.9790096282959 10.57190895080566 27.9790096282959 L 27.62522125244141 27.9790096282959 C 28.67631912231445 27.9790096282959 29.1917896270752 27.27070999145508 29.36462020874023 26.96617889404297 C 29.53744888305664 26.66164970397949 29.88124847412109 25.85593032836914 29.34231948852539 24.95352935791016 L 20.81566047668457 10.67632865905762 C 20.29035949707031 9.796770095825195 19.43984985351562 9.701808929443359 19.09856986999512 9.701808929443359 M 19.09857368469238 5.701808929443359 C 21.09219932556152 5.701808929443359 23.08582496643066 6.676328659057617 24.24983024597168 8.625370025634766 L 32.7764892578125 22.90255928039551 C 35.16497802734375 26.90189933776855 32.28351974487305 31.97900009155273 27.62522888183594 31.9790096282959 L 10.57190895080566 31.9790096282959 C 5.913631439208984 31.97900009155273 3.032161712646484 26.90189933776855 5.420650482177734 22.90255928039551 L 13.94730949401855 8.625370025634766 C 15.11132049560547 6.676328659057617 17.10494804382324 5.701808929443359 19.09857368469238 5.701808929443359 Z"
                          stroke="none"
                          fill={showPanel ? "#56CCF2" : "#fff"}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            <div
              onClick={() => {
                setTextPanel(!showTextPanel);
                setToggleTemplates(false);
                togglePanel(false);
                setUploadPanel(false);
                setLogoPanel(false);
                setBackgroundPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showTextPanel ? "diy-icon active" : "diy-icon")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36.049"
                height="59.77"
                viewBox="0 0 36.049 59.77"
              >
                <g
                  id="Group_218"
                  data-name="Group 218"
                  transform="translate(-43 -453.888)"
                >
                  <text
                    id="Text"
                    transform="translate(48 509.658)"
                    fill={showTextPanel ? "#56CCF2" : "#fff"}
                    font-size="13"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      Text
                    </tspan>
                  </text>
                  <g
                    id="Group_212"
                    data-name="Group 212"
                    transform="translate(42.969 454.015)"
                  >
                    <path
                      id="text-align-left"
                      d="M28.864,10.549H7.524a1.524,1.524,0,1,1,0-3.049h21.34a1.524,1.524,0,1,1,0,3.049Zm-6.1,6.1H7.524a1.524,1.524,0,0,1,0-3.049H22.767a1.524,1.524,0,0,1,0,3.049Zm6.1,6.1H7.524a1.524,1.524,0,1,1,0-3.049h21.34a1.524,1.524,0,1,1,0,3.049Zm-6.1,6.1H7.524a1.524,1.524,0,1,1,0-3.049H22.767a1.524,1.524,0,1,1,0,3.049Z"
                      transform="translate(0.103 -0.41)"
                      fill={showTextPanel ? "#56CCF2" : "#fff"}
                      fill-rule="evenodd"
                    />
                    <g
                      id="Path_9559"
                      data-name="Path 9559"
                      transform="translate(0.031 -0.127)"
                      fill="none"
                    >
                      <path
                        d="M7,0H29.049a7,7,0,0,1,7,7V29.049a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z"
                        stroke="none"
                      />
                      <path
                        d="M 7.000003814697266 3.000003814697266 C 4.794393539428711 3.000003814697266 3.000003814697266 4.794393539428711 3.000003814697266 7.000003814697266 L 3.000003814697266 29.04882431030273 C 3.000003814697266 31.25443458557129 4.794393539428711 33.04882431030273 7.000003814697266 33.04882431030273 L 29.04882431030273 33.04882431030273 C 31.25443458557129 33.04882431030273 33.04882431030273 31.25443458557129 33.04882431030273 29.04882431030273 L 33.04882431030273 7.000003814697266 C 33.04882431030273 4.794393539428711 31.25443458557129 3.000003814697266 29.04882431030273 3.000003814697266 L 7.000003814697266 3.000003814697266 M 7.000003814697266 3.814697265625e-06 L 29.04882431030273 3.814697265625e-06 C 32.91482543945312 3.814697265625e-06 36.04882431030273 3.134002685546875 36.04882431030273 7.000003814697266 L 36.04882431030273 29.04882431030273 C 36.04882431030273 32.91482543945312 32.91482543945312 36.04882431030273 29.04882431030273 36.04882431030273 L 7.000003814697266 36.04882431030273 C 3.134002685546875 36.04882431030273 3.814697265625e-06 32.91482543945312 3.814697265625e-06 29.04882431030273 L 3.814697265625e-06 7.000003814697266 C 3.814697265625e-06 3.134002685546875 3.134002685546875 3.814697265625e-06 7.000003814697266 3.814697265625e-06 Z"
                        stroke="none"
                        fill={showTextPanel ? "#56CCF2" : "#fff"}
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div
              onClick={() => {
                setUploadPanel(!showUploadPanel);
                setToggleTemplates(false);
                togglePanel(false);
                setTextPanel(false);
                setLogoPanel(false);
                setBackgroundPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showUploadPanel ? "diy-icon active" : "diy-icon")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="55.355"
                viewBox="0 0 48 55.355"
              >
                <g
                  id="Group_217"
                  data-name="Group 217"
                  transform="translate(-38 -539.889)"
                >
                  <text
                    id="Upload"
                    transform="translate(39 591.244)"
                    fill={showUploadPanel ? "#56CCF2" : "#fff"}
                    font-size="13"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      Upload
                    </tspan>
                  </text>
                  <g id="bx-cloud-upload" transform="translate(38 539.889)">
                    <path
                      id="Path_9556"
                      data-name="Path 9556"
                      d="M23.3,35.337V26.3h6.779L21.039,15,12,26.3h6.779v9.039Z"
                      transform="translate(1.558 -3.702)"
                      fill={showUploadPanel ? "#56CCF2" : "#fff"}
                    />
                    <path
                      id="Path_9557"
                      data-name="Path 9557"
                      d="M14.3,39.135h4.519v-3.5H14.3c-3.737,0-8.49-4.057-8.49-7.795,0-3.173,3.269-6.458,6.6-7.043H14.3V18.445A12.285,12.285,0,0,1,25.6,10.6c6.231,0,12.1,5.351,12.1,11.582v2.242h2.615c2.493,0,4.357,3.18,4.357,5.673s-3.017,5.535-5.51,5.535H32.375v3.5h6.779a9.04,9.04,0,0,0,2.133-17.824A15.838,15.838,0,0,0,25.6,7.5,15.229,15.229,0,0,0,11.49,16.877,11.854,11.854,0,0,0,3,27.837,11.31,11.31,0,0,0,14.3,39.135Z"
                      transform="translate(-3 -7.5)"
                      fill={showUploadPanel ? "#56CCF2" : "#fff"}
                    />
                  </g>
                </g>
              </svg>
            </div>
            {/* </li> */}
            {/* <li> */}
            <div
              onClick={() => {
                setLogoPanel(!showLogoPanel);
                setToggleTemplates(false);
                togglePanel(false);
                setTextPanel(false);
                setUploadPanel(false);
                setBackgroundPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showLogoPanel ? "diy-icon active" : "diy-icon")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36.455"
                height="60.355"
                viewBox="0 0 33.455 55.355"
              >
                <g
                  id="Group_216"
                  data-name="Group 216"
                  transform="translate(-46 -621.475)"
                >
                  <text
                    id="Logo"
                    transform="translate(48 672.83)"
                    fill={showLogoPanel ? "#56CCF2" : "#fff"}
                    font-size="13"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      Logo
                    </tspan>
                  </text>
                  <g
                    id="Group_213"
                    data-name="Group 213"
                    transform="translate(46 621.475)"
                  >
                    <path
                      id="night-alt-lightning"
                      d="M12.928,28.823h4.139l-2.519,7.954h.576l8.007-10.724a.242.242,0,0,0,.055-.261.239.239,0,0,0-.252-.135H18.705l4.426-8.079q.2-.414-.27-.414h-5.65a.5.5,0,0,0-.414.27S12.652,28.823,12.928,28.823Z"
                      transform="translate(-1.076 -11.502)"
                      fill={showLogoPanel ? "#56CCF2" : "#fff"}
                    />
                    <g
                      id="Path_9558"
                      data-name="Path 9558"
                      transform="translate(0 -7.537)"
                      fill="none"
                    >
                      <path
                        d="M17.071,7.537c9.238,0,16.384,4.071,16.384,13.878S25.966,39.171,16.728,39.171,0,31.221,0,21.414,7.833,7.537,17.071,7.537Z"
                        stroke="none"
                      />
                      <path
                        d="M 17.07132148742676 10.53662109375 C 12.81476211547852 10.53662109375 9.271762847900391 11.46858215332031 6.825332641601562 13.23175048828125 C 5.615461349487305 14.10373306274414 4.682561874389648 15.18596076965332 4.052562713623047 16.4483814239502 C 3.354131698608398 17.8479118347168 3.000001907348633 19.51875114440918 3.000001907348633 21.41449165344238 C 3.000001907348633 25.38982200622559 4.450052261352539 29.11842155456543 7.083051681518555 31.9134407043457 C 9.669662475585938 34.65923309326172 13.09480094909668 36.17140197753906 16.7275218963623 36.17140197753906 C 20.3602409362793 36.17140197753906 23.78538131713867 34.65923309326172 26.37199211120605 31.9134407043457 C 29.00499153137207 29.11842155456543 30.45504188537598 25.38982200622559 30.45504188537598 21.41449165344238 C 30.45504188537598 19.47749137878418 30.12405204772949 17.77959060668945 29.47128295898438 16.36798095703125 C 28.8884220123291 15.1075611114502 28.0260124206543 14.03604125976562 26.90803146362305 13.18320083618164 C 24.63833236694336 11.45178985595703 21.23685073852539 10.53662109375 17.07132148742676 10.53662109375 M 17.07132148742676 7.53662109375 C 26.30967140197754 7.53662109375 33.45504379272461 11.60761260986328 33.45504379272461 21.41449165344238 C 33.45504379272461 31.22136116027832 25.96587181091309 39.17140197753906 16.7275218963623 39.17140197753906 C 7.489162445068359 39.17140197753906 0 31.22136116027832 0 21.41449165344238 C 0 11.60761260986328 7.832962036132812 7.53662109375 17.07132148742676 7.53662109375 Z"
                        stroke="none"
                        fill={showLogoPanel ? "#56CCF2" : "#fff"}
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div
              onClick={() => {
                setBackgroundPanel(!showBackgroundPanel);
                setToggleTemplates(false);
                togglePanel(false);
                setTextPanel(false);
                setUploadPanel(false);
                setLogoPanel(false);
              }}
              className={
                "diy-icon-templates " +
                (showBackgroundPanel ? "diy-icon active" : "diy-icon")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="54"
                viewBox="0 0 78 54"
              >
                <g
                  id="Group_215"
                  data-name="Group 215"
                  transform="translate(-26 -706)"
                >
                  <text
                    id="Background"
                    transform="translate(26 756)"
                    fill={showBackgroundPanel ? "#56CCF2" : "#fff"}
                    font-size="13"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      Background
                    </tspan>
                  </text>
                  <g
                    id="Group_214"
                    data-name="Group 214"
                    transform="translate(48.41 706.241)"
                  >
                    <g
                      id="Rectangle_91"
                      data-name="Rectangle 91"
                      transform="translate(-0.41 -0.241)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-width="3"
                    >
                      <rect width="30" height="30" rx="7" stroke="none" />
                      <rect
                        x="1.5"
                        y="1.5"
                        width="27"
                        height="27"
                        rx="5.5"
                        fill="none"
                      />
                    </g>
                    <line
                      id="Line_20"
                      data-name="Line 20"
                      y1="8.081"
                      x2="8.081"
                      transform="translate(4.531 4.585)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_22"
                      data-name="Line 22"
                      y1="8.081"
                      x2="8.081"
                      transform="translate(16.341 17.017)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_23"
                      data-name="Line 23"
                      y1="13.053"
                      x2="13.053"
                      transform="translate(10.747 11.423)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_24"
                      data-name="Line 24"
                      y1="13.053"
                      x2="13.053"
                      transform="translate(4.531 5.828)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_21"
                      data-name="Line 21"
                      y1="19.269"
                      x2="19.269"
                      transform="translate(5.153 5.207)"
                      fill="none"
                      stroke={showBackgroundPanel ? "#56CCF2" : "#fff"}
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" download-container py-5 mx-auto">
          <button className="download-pdf-png btn mb-2" onClick={printDocumentPDF}>
            <GetAppIcon />
            Download PDF
          </button>
          <button className="download-pdf-png  btn mb-2" onClick={printDocumentPNG}>
            <GetAppIcon />
            Download PNG
          </button>
          <button
            className="place-order download-pdf-png  btn mb-2"
            onClick={printDocumentPNG}
          >
            Place order
            <ArrowForwardIosIcon className="arrow" />
          </button>
      </div>
    </div>
  );
};

export default DiyHomeOne;
