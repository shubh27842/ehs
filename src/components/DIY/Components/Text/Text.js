import React, { useContext, useState } from "react";
import { CompactPicker } from "react-color";
import { DesContext } from "../../../../App";
import TextControls from "../EditableTextComponents/textcontrols";
import "./Text.css";
import Fonts from "../EditableTextComponents/config.json";
import FontFamilySelect from "../EditableTextComponents/fontfamilyselect";
import FontSizeSelect from "../EditableTextComponents/fontsizeselect";
import FontColor from "../EditableTextComponents/fontcolor";
import OutsideClickHandler from "react-outside-click-handler";
// import FontFamilySelect from "../";

import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import FontStyles from "../EditableTextComponents/fontstyles";

const Text = ({
  EditButton,
  fontChange,
  fontSizeChange,
  handleRadioFormatChange,
  setTextColor,
  enableHeaderText,
  enableSubHeaderText,
  enableBodyText,
  textRef,
  // texts,
  textsTwo,
  textsThree,
  ChangeFontValue,
  onFontColorChange,
  fontChangeSubHeader,
  ChangeFontValueSubHeader,
  onFontColorChangeSubHeader,
  handleRadioFormatChangeSubHeader,
  setTextColorSubHeader,
  fontChangeBody,
  ChangeFontValueBody,
  handleRadioFormatChangeBody,
  setTextColorBody,
  editHeader,
  setEditHeader,
  editSubHeader,
  setEditSubHeader,
  editBody,
  setEditBody,
  setTexts,
  texts,
  handelLanguageChange,
  handelSubLanguageChange,
  bodyLanguageChange,
  handleBoldFun,
  handleItalicFun,
  headerUnderlineFun,
  headerTextStyle,
  setTextData,
  subHeaderTextStyle,
  setSubHeaderTextData,
  setBodyTextStyle,
  bodyTextStyle,
}) => {
  const [showTextColorPicker, setTextColorPicker] = useState(false);
  const [textFieldData, setTextFieldData] = useContext(DesContext);
  // console.log("text", textFieldData);
  // const fontSizeData = textFieldData?.value;
  // console.log("fontSizeData", fontSizeData);

  // let texts = { id: "unique-1" };
  // let textsTwo = { id: "unique-2" };
  // let textsThree = { id: "unique-3" };
  const textRefOne = React.useRef();
  // console.log("textRefOne", textRefOne.current.focus());
  const [one, setOne] = useState({ id: "unique-1", tag: "01" });
  const [two, setTwo] = useState({ id: "unique-2", tag: "02" });
  const [three, setThree] = useState({ id: "unique-3", tag: "03" });
  const [four, setFour] = useState({ id: "unique-4", tag: "04" });
  // const displayHiddenHeader = editHeader == true ? "visible" : "hidden";
  // const displayHiddenSubHeader = editSubHeader == true ? "visible" : "hidden";
  // const displayHiddenBody = editBody == true ? "visible" : "hidden";
  // const displayHiddenAll =
  //   editBody == false && editSubHeader == false && editHeader == false
  //     ? "visible"
  //     : "hidden";

  // const handelRefHeader = (e) => {
  //   console.log(e);
  //   setEditHeader(true);
  // };
  // useEffect(() => {
  //   // console.log("textRefOne", textRefOne.current.focus());
  //   const onClickHeader = (e) => {
  //     setEditHeader((s) => e.target.classList.contains(one.id));
  //   };
  // }, [one.id]);

  // -------------header-------------

  // const [clickedOutsideHeader, setClickedOutsideHeader] = useState(false);

  // const myRefHeader = useRef();
  // console.log("clickedOutsideHeader", clickedOutsideHeader);
  // console.log("myRefHeader", myRefHeader.current);
  // const [clickedOutsideSubHeader, setClickedOutsideSubHeader] = useState(false);
  // const myRefSubHeader = useRef();

  // const handleClickOutsideHeader = (e) => {
  //   if (myRefHeader.current.contains(e.target)) {
  //     setClickedOutsideHeader(true);
  //   }
  //   console.log("ha", myRefHeader.current.contains(e.target));
  // };

  // const handleClickInsideHeader = () => {
  //   setClickedOutsideHeader(false);
  // };

  // // ----------------------Sub header
  // // const [clickedOutsideSubHeader, setClickedOutsideSubHeader] = useState(false);
  // // const myRefSubHeader = useRef();
  // // console.log("clickedOutsideSubHeader", clickedOutsideSubHeader);

  // // const handleClickOutsideSubheader = (e) => {
  // //   if (myRefSubHeader.current.contains(e.target)) {
  // //     setClickedOutsideSubHeader(true);
  // //   }
  // // };

  // const handleClickInsideSubHeader = () => setClickedOutsideSubHeader(false);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutsideHeader);
  //   // document.addEventListener("mousedown", handleClickOutsideSubheader);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutsideHeader);
  //     // document.removeEventListener("mousedown", handleClickOutsideSubheader);
  //   };
  // });
  // // ---------------sub header--------------
  // // const [clickedOutsideSubHeader, setClickedOutsideSubHeader] = useState(false);
  // // const myRefSubHeader = useRef();
  // console.log("clickedOutsideSubHeader", clickedOutsideSubHeader.current);
  // console.log("myRefSubHeader", myRefSubHeader.current);

  // const handleClickOutsideSubheader = (e) => {
  //   if (myRefSubHeader.current.contains(e.target)) {
  //     setClickedOutsideSubHeader(true);
  //   }
  //   console.log("haears", myRefHeader.current.contains(e.target));
  // };

  // // const handleClickInsideSubHeader = () => setClickedOutsideSubHeader(false);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutsideSubheader);
  //   return () =>
  //     document.removeEventListener("mousedown", handleClickOutsideSubheader);
  // });
  // // ---------------body --------------
  // const [clickedOutsideBody, setClickedOutsideBody] = useState(false);
  // const myRefBody = useRef();
  // console.log("clickedOutsideBody", clickedOutsideBody);
  // console.log("myRefBody", myRefBody.current);

  // const handleClickOutsideBody = (e) => {
  //   if (myRefBody.current.contains(e.target)) {
  //     setClickedOutsideBody(true);
  //   }
  //   console.log("Body Ref", myRefHeader.current.contains(e.target));
  // };

  // const handleClickInsideBody = () => setClickedOutsideBody(false);

  // useEffect(() => {
  //   document.addEventListener("mouseup", handleClickOutsideBody);
  //   return () =>
  //     document.removeEventListener("mouseup", handleClickOutsideBody);
  // });

  // useEffect(() => {
  //   if (clickedOutsideHeader == false) {
  //     setEditHeader(true);
  //   }
  //   // if (clickedOutsideSubHeader == false) {
  //   //   setEditSubHeader(true);
  //   //   console.log("jksdfa");
  //   // }
  // }, [clickedOutsideHeader]);
  // useEffect(() => {
  //   if (clickedOutsideSubHeader == false) {
  //     setEditSubHeader(true);
  //     console.log("jksdfa");
  //   }
  // }, [clickedOutsideSubHeader]);
  // // console.log("visible", clickedOutside);
  // useEffect(() => {
  //   if (clickedOutsideBody == false) {
  //     setEditBody(true);
  //     console.log("body");
  //   }
  // }, [clickedOutsideBody]);
  // console.log("visible", clickedOutside);

  // ----header-------
  const [blurHeader, setBlurHeader] = useState(false);
  const [blurSubHeader, setBlurSubHeader] = useState(false);
  const [blurBody, setBlurBody] = useState(false);
  const clickHeaderFun = () => {
    setBlurHeader(false);
  };
  const blurHeaderFun = () => {
    setBlurHeader(true);
  };
  // ----Subheader-------

  const clickSubHeaderFun = () => {
    setBlurSubHeader(true);
  };
  const blurSubHeaderFun = () => {
    setBlurSubHeader(false);
  };
  // ----blurBody-------
  const clickBodyFun = () => {
    setBlurBody(false);
  };
  const blurBodyFun = () => {
    setBlurBody(true);
  };
  // useEffect(() => {
  //   if (blurHeader == true) {
  //     setEditHeader(true);
  //   }
  //   if (blurSubHeader == true) {
  //     setEditSubHeader(true);
  //   }
  //   if (blurBody == true) {
  //     setEditBody(true);
  //   }
  // }, [blurHeader, blurSubHeader, blurBody]);
  const displayHiddenHeader =
    editHeader || blurHeader == true ? "visible" : "hidden";
  const displayHiddenSubHeader =
    editSubHeader || blurSubHeader == true ? "visible" : "hidden";
  const displayHiddenBody = editBody || blurBody == true ? "visible" : "hidden";
  const displayHiddenAll =
    editBody == false && editSubHeader == false && editHeader == false
      ? "hidden"
      : "hidden";

  const [languageOption, setLanguageOption] = useState(true);
  const handelLanguageOption = () => {
    setLanguageOption(!languageOption);
  };

  const [headerLanguage, setHeaderLanguage] = useState("en");
  // const handelLanguageChange = (e) => {
  //   setHeaderLanguage(e.target.value);
  // };
  const [text, setText] = useState("");

  return (
    <div className="position-relative">
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4">Text</h4>
      </div>
      {/* <div>
        <div
          onChange={handelLanguageOption}
          class="custom-control custom-switch"
        >
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
          />
          <label class="custom-control-label" for="customSwitch1">
            Change Language
          </label>
        </div>
      </div> */}
      {languageOption && (
        <div>
          <div className="text-container-body">
            <div className=" ">
              <button
                className="btn text-header-title text-h4"
                onClick={enableHeaderText}
              >
                <h2> Add a Heading</h2>
              </button>
            </div>
            <div className="">
              <button
                className="btn text-header-title text-h5"
                onClick={enableSubHeaderText}
              >
                <h5> Add a Sub-Heading</h5>
              </button>
            </div>
            <div className="">
              <button
                className="btn text-header-title text-h6"
                onClick={enableBodyText}
              >
                <p> Add Body Text</p>
              </button>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <hr className="text-hr" />
          </div>
          <OutsideClickHandler onOutsideClick={clickHeaderFun}>
            <div
              // onClick={() => setVisible(true)}
              // onClick={() => setEdit(true)}
              // ref={myRefHeader}
              // onClick={handleClickInsideHeader}
              onClick={blurHeaderFun}
              className="position-absolute"
              style={{
                visibility: `${displayHiddenHeader}`,
                border: "inline-block",
              }}
            >
              <div>
                <div className="language-select d-flex justify-content-between ">
                  <div className=" text-white">
                    <p>Language</p>
                  </div>
                  <div>
                    <select
                      className="p-1"
                      onChange={(e) => handelLanguageChange(e)}
                    >
                      <option value="bn">Select</option>
                      <option value="bn">Bangla</option>
                      <option value="gu">Gujarati</option>
                      <option value="hi">Hindi</option>
                      <option value="kn">Kannada</option>
                      <option value="ml">Malayalam</option>
                      <option value="mr">Marathi</option>
                      <option value="pa">Punjabi</option>
                      <option value="sa">Sanskrit</option>
                      <option value="ta">Tamil</option>
                      <option value="te">Telugu</option>
                      <option value="ur">Urdu</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-white">
                <div className="text-font">
                  <p className="text-font-size-name">Font</p>

                  <div>
                    <FontFamilySelect
                      className="option font-option"
                      onFontFamilySelect={(e) => fontChange(e)}
                      textData={one}
                    />
                  </div>
                </div>
                <div className="text-size">
                  <p className="text-font-size-name">Size</p>

                  <FontSizeSelect
                    onFontSizeSelect={(e) => ChangeFontValue(e)}
                    className="option size-option"
                    textData={one}
                  />
                </div>
              </div>

              <div className="mt-3 d-flex justify-content-center ">
                <div className=" d-flex justify-content-center">
                  <div className=" btn-group text-btn-group pl-3">
                    <FontStyles
                      onBoldClick={() => {
                        setTextData({
                          ...headerTextStyle,
                          fontWeight:
                            headerTextStyle.fontWeight === "bold"
                              ? "normal"
                              : "bold",
                        });
                      }}
                      onItalicClick={() => {
                        setTextData({
                          ...headerTextStyle,
                          fontStyle:
                            headerTextStyle.fontStyle === "italic"
                              ? "normal"
                              : "italic",
                        });
                      }}
                      onUnderlineClick={() => {
                        setTextData({
                          ...headerTextStyle,
                          textDecoration:
                            headerTextStyle.textDecoration === "underline"
                              ? "none"
                              : "underline",
                        });
                      }}
                      textData={one}
                    />
                  </div>

                  <div className="d-flex align-icon">
                    <button
                      className="icon-align"
                      value="start"
                      onClick={handleRadioFormatChange}
                    >
                      {/* <FormatAlignLeftIcon /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.711"
                        height="16.023"
                        viewBox="0 0 24.711 16.023"
                      >
                        <path
                          id="Path_9540"
                          data-name="Path 9540"
                          d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
                          transform="translate(-0.5 -5.949)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                    <button
                      className="icon-align"
                      value="center"
                      onClick={handleRadioFormatChange}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.891"
                        height="16.023"
                        viewBox="0 0 22.891 16.023"
                      >
                        <path
                          id="Path_9542"
                          data-name="Path 9542"
                          d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
                          transform="translate(-8 -20)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                    <button
                      className="icon-align"
                      value="end"
                      onClick={handleRadioFormatChange}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.796"
                        height="16.078"
                        viewBox="0 0 24.796 16.078"
                      >
                        <path
                          id="Path_9541"
                          data-name="Path 9541"
                          d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
                          transform="translate(-0.5 -5.949)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  class="btn-group text-btn-group-two"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <CompactPicker
                    onChange={(updateTextColor) =>
                      setTextColor(updateTextColor.hex)
                    }
                  />
                  {/* <div>
                    <div className="position-relative ml-1">
                      <div className="position-absolute text-white">
                        <p>Language</p>
                      </div>
                      <select
                        className="position-absolute mt-4"
                        onChange={(e) => handelLanguageChange(e)}
                      >
                        <option value="bn">Select</option>
                        <option value="bn">Bangla</option>
                        <option value="gu">Gujarati</option>
                        <option value="hi">Hindi</option>
                        <option value="kn">Kannada</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="pa">Punjabi</option>
                        <option value="sa">Sanskrit</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="ur">Urdu</option>
                      </select>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          {/* ------------------------Sub header----------------------------------------- */}
          <div
          //
          >
            <OutsideClickHandler onOutsideClick={blurSubHeaderFun}>
              <div
                // onClick={handleClickInsideSubHeader}
                // ref={myRefSubHeader}
                onClick={clickSubHeaderFun}
                // onClick={() => setBlurSubHeader(true)}
                className="position-absolute"
                style={{
                  visibility: `${displayHiddenSubHeader}`,
                  border: "inline-block",
                }}
              >
                <div>
                  <div className="language-select d-flex justify-content-between ">
                    <div className=" text-white">
                      <p>Language</p>
                    </div>
                    <div>
                      <select
                        className="p-1"
                        onChange={(e) => handelSubLanguageChange(e)}
                      >
                        <option value="bn">Select</option>
                        <option value="bn">Bangla</option>
                        <option value="gu">Gujarati</option>
                        <option value="hi">Hindi</option>
                        <option value="kn">Kannada</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="pa">Punjabi</option>
                        <option value="sa">Sanskrit</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="ur">Urdu</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center text-white">
                  <div className="text-font">
                    <p className="text-font-size-name">Font</p>

                    <div>
                      <FontFamilySelect
                        className="option font-option"
                        onFontFamilySelect={(e) => fontChangeSubHeader(e)}
                        textData={two}
                      />
                    </div>
                  </div>
                  <div className="text-size">
                    <p className="text-font-size-name">Size</p>

                    <FontSizeSelect
                      onFontSizeSelect={(e) => ChangeFontValueSubHeader(e)}
                      className="option size-option"
                      textData={two}
                    />
                  </div>
                </div>

                <div className="mt-3 d-flex justify-content-center ">
                  <div className=" d-flex justify-content-center">
                    <div className=" btn-group text-btn-group pl-3">
                      <FontStyles
                        onBoldClick={() => {
                          setSubHeaderTextData({
                            ...subHeaderTextStyle,
                            fontWeight:
                              subHeaderTextStyle.fontWeight === "bold"
                                ? "normal"
                                : "bold",
                          });
                        }}
                        onItalicClick={() => {
                          setSubHeaderTextData({
                            ...subHeaderTextStyle,
                            fontStyle:
                              subHeaderTextStyle.fontStyle === "italic"
                                ? "normal"
                                : "italic",
                          });
                        }}
                        onUnderlineClick={() => {
                          setSubHeaderTextData({
                            ...subHeaderTextStyle,
                            textDecoration:
                              subHeaderTextStyle.textDecoration === "underline"
                                ? "none"
                                : "underline",
                          });
                        }}
                        textData={two}
                      />
                    </div>

                    <div className="d-flex align-icon">
                      <button
                        className="icon-align"
                        value="start"
                        onClick={handleRadioFormatChangeSubHeader}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.711"
                          height="16.023"
                          viewBox="0 0 24.711 16.023"
                        >
                          <path
                            id="Path_9540"
                            data-name="Path 9540"
                            d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
                            transform="translate(-0.5 -5.949)"
                            fill="#292929"
                          />
                        </svg>
                      </button>
                      <button
                        className="icon-align"
                        value="center"
                        onClick={handleRadioFormatChangeSubHeader}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22.891"
                          height="16.023"
                          viewBox="0 0 22.891 16.023"
                        >
                          <path
                            id="Path_9542"
                            data-name="Path 9542"
                            d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
                            transform="translate(-8 -20)"
                            fill="#292929"
                          />
                        </svg>
                      </button>
                      <button
                        className="icon-align"
                        value="end"
                        onClick={handleRadioFormatChangeSubHeader}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.796"
                          height="16.078"
                          viewBox="0 0 24.796 16.078"
                        >
                          <path
                            id="Path_9541"
                            data-name="Path 9541"
                            d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
                            transform="translate(-0.5 -5.949)"
                            fill="#292929"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="btn-group text-btn-group-two"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <CompactPicker
                    onChange={(updateTextColor) =>
                      setTextColorSubHeader(updateTextColor.hex)
                    }
                  />
                </div>
              </div>{" "}
            </OutsideClickHandler>
          </div>

          {/* ------------------------Default ----------------------------------------- */}

          <div
            className="position-absolute"
            style={{ visibility: `${displayHiddenAll}` }}
          >
            <div className="d-flex justify-content-center text-white">
              <div>
                <p className="text-font-size-name">Font</p>

                <div>
                  <FontFamilySelect
                    className="option font-option"
                    // onFontFamilySelect={(e) => fontChangeSubHeader(e)}
                    textData={four}
                  />
                </div>
              </div>
              <div>
                <p className="text-font-size-name">Size</p>

                <FontSizeSelect
                  // onFontSizeSelect={(e) => ChangeFontValueSubHeader(e)}
                  className="option size-option"
                  textData={four}
                />
              </div>
            </div>

            <div className="mt-3 d-flex justify-content-center ">
              <div className=" d-flex justify-content-center">
                <div className=" btn-group text-btn-group pl-3">
                  <div className="btn-b">
                    <EditButton cmd="bold" name="B" />
                  </div>

                  <div className="btn-b">
                    <EditButton cmd="italic" name="𝒊" />
                  </div>
                  <div className="btn-b">
                    <EditButton cmd="underline" name="U" />
                  </div>
                </div>

                <div className="d-flex align-icon">
                  <button
                    className="icon-align"
                    value="start"
                    // onClick={handleRadioFormatChangeSubHeader}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.711"
                      height="16.023"
                      viewBox="0 0 24.711 16.023"
                    >
                      <path
                        id="Path_9540"
                        data-name="Path 9540"
                        d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
                        transform="translate(-0.5 -5.949)"
                        fill="#292929"
                      />
                    </svg>
                  </button>
                  <button
                    className="icon-align"
                    value="center"
                    // onClick={handleRadioFormatChangeSubHeader}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.891"
                      height="16.023"
                      viewBox="0 0 22.891 16.023"
                    >
                      <path
                        id="Path_9542"
                        data-name="Path 9542"
                        d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
                        transform="translate(-8 -20)"
                        fill="#292929"
                      />
                    </svg>
                  </button>
                  <button
                    className="icon-align"
                    value="end"
                    // onClick={handleRadioFormatChangeSubHeader}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.796"
                      height="16.078"
                      viewBox="0 0 24.796 16.078"
                    >
                      <path
                        id="Path_9541"
                        data-name="Path 9541"
                        d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
                        transform="translate(-0.5 -5.949)"
                        fill="#292929"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="btn-group text-btn-group-two"
              role="group"
              aria-label="Basic checkbox toggle button group"
            ></div>
          </div>
          {/* ---------------------body------------------------- */}
          <OutsideClickHandler onOutsideClick={clickBodyFun}>
            <div
              // ref={myRefBody}
              // onClick={handleClickInsideBody}
              onClick={blurBodyFun}
              className="position-absolute"
              style={{
                visibility: `${displayHiddenBody}`,
                border: "inline-block",
              }}
            >
              <div>
                <div className="language-select d-flex justify-content-between ">
                  <div className=" text-white">
                    <p>Language</p>
                  </div>
                  <div>
                    <select
                      className="p-1"
                      onChange={(e) => bodyLanguageChange(e)}
                    >
                      <option value="bn">Select</option>
                      <option value="bn">Bangla</option>
                      <option value="gu">Gujarati</option>
                      <option value="hi">Hindi</option>
                      <option value="kn">Kannada</option>
                      <option value="ml">Malayalam</option>
                      <option value="mr">Marathi</option>
                      <option value="pa">Punjabi</option>
                      <option value="sa">Sanskrit</option>
                      <option value="ta">Tamil</option>
                      <option value="te">Telugu</option>
                      <option value="ur">Urdu</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-white">
                <div className="text-font">
                  <p className="text-font-size-name">Font</p>

                  <div>
                    <FontFamilySelect
                      className="option font-option"
                      onFontFamilySelect={(e) => fontChangeBody(e)}
                      textData={three}
                    />
                  </div>
                </div>
                <div className="text-size">
                  <p className="text-font-size-name">Size</p>

                  <FontSizeSelect
                    onFontSizeSelect={(e) => ChangeFontValueBody(e)}
                    className="option size-option"
                    textData={three}
                  />
                </div>
              </div>

              <div className="mt-3 d-flex justify-content-center ">
                <div className=" d-flex justify-content-center">
                  <div className=" btn-group text-btn-group pl-3">
                    <FontStyles
                      onBoldClick={() => {
                        setBodyTextStyle({
                          ...bodyTextStyle,
                          fontWeight:
                            bodyTextStyle.fontWeight === "bold"
                              ? "normal"
                              : "bold",
                        });
                      }}
                      onItalicClick={() => {
                        setBodyTextStyle({
                          ...bodyTextStyle,
                          fontStyle:
                            bodyTextStyle.fontStyle === "italic"
                              ? "normal"
                              : "italic",
                        });
                      }}
                      onUnderlineClick={() => {
                        setBodyTextStyle({
                          ...bodyTextStyle,
                          textDecoration:
                            bodyTextStyle.textDecoration === "underline"
                              ? "none"
                              : "underline",
                        });
                      }}
                      textData={three}
                    />
                  </div>

                  <div className="d-flex align-icon">
                    <button
                      className="icon-align"
                      value="start"
                      onClick={handleRadioFormatChangeBody}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.711"
                        height="16.023"
                        viewBox="0 0 24.711 16.023"
                      >
                        <path
                          id="Path_9540"
                          data-name="Path 9540"
                          d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
                          transform="translate(-0.5 -5.949)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                    <button
                      className="icon-align"
                      value="center"
                      onClick={handleRadioFormatChangeBody}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.891"
                        height="16.023"
                        viewBox="0 0 22.891 16.023"
                      >
                        <path
                          id="Path_9542"
                          data-name="Path 9542"
                          d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
                          transform="translate(-8 -20)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                    <button
                      className="icon-align"
                      value="end"
                      onClick={handleRadioFormatChangeBody}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.796"
                        height="16.078"
                        viewBox="0 0 24.796 16.078"
                      >
                        <path
                          id="Path_9541"
                          data-name="Path 9541"
                          d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
                          transform="translate(-0.5 -5.949)"
                          fill="#292929"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="btn-group text-btn-group-two"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <CompactPicker
                  onChange={(updateTextColor) =>
                    setTextColorBody(updateTextColor.hex)
                  }
                />
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      )}
      {languageOption || (
        <div>
          {" "}
          <div className="p-2">
            <select
            //  onChange={(e) => handelLanguageChange(e)}
            >
              <option value="bn">Select</option>
              <option value="bn">Bangla</option>
              <option value="gu">Gujarati</option>
              <option value="hi">Hindi</option>
              <option value="kn">Kannada</option>
              <option value="ml">Malayalam</option>
              <option value="mr">Marathi</option>
              <option value="pa">Punjabi</option>
              <option value="sa">Sanskrit</option>
              <option value="ta">Tamil</option>
              <option value="te">Telugu</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
          <div>
            <ReactTransliterate
              renderComponent={(props) => <textarea {...props} />}
              value={texts.text}
              onChangeText={(text) => {
                setTexts({
                  ...texts,
                  text: (texts.text = text),
                });
              }}
              lang={headerLanguage}
            />
            {/* <button onClick={handeLanguageText}></button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Text;
