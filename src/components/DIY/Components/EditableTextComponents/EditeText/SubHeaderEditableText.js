import React, { useContext, useEffect } from "react";
import BaseText from "../Basetext/basetext";
import Border from "../border";
import TextControls from "../textcontrols";
import * as MaterialUI from "@material-ui/core";
import { DesContext } from "../../../../../App";
import ClearIcon from "@material-ui/icons/Clear";
import BasetextSubHeader from "../Basetext/BasetextSubHeader";

const translate = (x, y) => {
  return `translate(${x}px, ${y}px)`;
};

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    text: {
      position: "absolute",
      transform: (props) => translate(props.x, props.y),
    },
  };
});

const SubHeaderEditableText = React.forwardRef((props, ref) => {
  const {
    textData,
    onUpdate,
    disEnableHeaderText,
    fontSizeValueSubHeader,
    fontNameSubHeader,
    currentRadioFormatValueSubHeader,
    textColorSubHeader,
    edit,
    setEdit,
    headerSubLanguage,
  } = props;
  if (typeof textData.id === "undefined") {
    throw Error(
      "Text id is required. Please add a Text id i.e { id: unique-id, ...}"
    );
  }
  // const [edit, setEdit] = React.useState(false);
  const [event, setEvent] = React.useState({
    x: 0,
    y: 0,
    originalX: 0,
    originalY: 0,
    status: "mouse-up",
  });
  const [theTextData, setTextData] = React.useState({
    id: textData.id,
    x: textData.x || 0,
    y: textData.y || 0,
    fontSize: textData.fontSize || 18,
    fontFamily: textData.fontFamily || "sans-serif",
    fontWeight: textData.fontWeight || "normal",
    fontStyle: textData.fontStyle || "normal",
    textDecoration: textData.textDecoration || "none",
    display: textData.display || "flex",
    textAlign: textData.textAlign || `start`,
    text: textData.text || `Default Sub Header`,
    color: textData.color || "black",
    tag: "02",
  });
  const classes = useStyles(theTextData);

  const textRef = React.useRef();
  const borderRef = React.useRef();

  // ----------------
  // const [textFieldData, setTextFieldData] = useContext(UserContext);
  // useEffect(() => {
  //   setTextFieldData({
  //     EditHeader: false,
  //     EditBody: false,
  //     EditSubHeader: edit,
  //   });
  // }, [theTextData, edit]);
  // console.log("sub header text", textFieldData);

  React.useEffect(() => {
    const onMouseDown = (e) => {
      if (e.target === borderRef.current && event.status === "mouse-up") {
        setEvent({
          x: e.clientX,
          y: e.clientY,
          originalX: theTextData.x,
          originalY: theTextData.y,
          status: "mouse-down",
        });
      }
    };
    const onMouseMove = (e) => {
      if (event.status === "mouse-down") {
        setTextData((s) => ({
          ...s,
          x: event.originalX + e.clientX - event.x,
          y: event.originalY + e.clientY - event.y,
        }));
      }
    };
    const onMouseUp = (e) => {
      if (event.status === "mouse-down") {
        setEvent((s) => ({ ...s, status: "mouse-up" }));
      }
    };

    const onClick = (e) => {
      setEdit((s) => e.target.classList.contains(textData.id));
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [
    textData.id,
    event.status,
    event.originalX,
    event.originalY,
    event.x,
    event.y,
    theTextData.x,
    theTextData.y,
  ]);

  React.useEffect(() => {
    if (textRef && ref) {
      ref.current = textRef.current;
      onUpdate();
    }
  });
  useEffect(() => {
    setTextData({
      ...theTextData,
      fontSize: fontSizeValueSubHeader.fontSize,
      fontFamily: fontNameSubHeader,
      textAlign: currentRadioFormatValueSubHeader,
      color: textColorSubHeader,
      fontWeight: textData.fontWeight,
      fontStyle: textData.fontStyle,
      textDecoration: textData.textDecoration,
    });
  }, [
    fontNameSubHeader,
    fontSizeValueSubHeader,
    currentRadioFormatValueSubHeader,
    textColorSubHeader,
    textData,
  ]);
  const displayHiddenHeader = edit == true ? "visible" : "hidden";
  return (
    <div className={classes.text}>
      {/* <TextControls
        onBoldClick={() => {
          setTextData({
            ...theTextData,
            fontWeight: theTextData.fontWeight === "bold" ? "normal" : "bold",
          });
        }}
        onItalicClick={() => {
          setTextData({
            ...theTextData,
            fontStyle: theTextData.fontStyle === "italic" ? "normal" : "italic",
          });
        }}
        onUnderlineClick={() => {
          setTextData({
            ...theTextData,
            textDecoration:
              theTextData.textDecoration === "underline" ? "none" : "underline",
          });
        }}
        onFontSizeSelect={(e) => {
          setTextData({
            ...theTextData,
            fontSize: parseInt(e.target.value),
          });
        }}
        onFontFamilySelect={(e) => {
          setTextData({
            ...theTextData,
            fontFamily: e.target.value,
          });
        }}
        onFontColorChange={(e) => {
          setTextData({
            ...theTextData,
            color: e.target.value,
          });
        }}
        handleFormatChange={(e) => {
          setTextData({
            ...theTextData,
            textAlign: e.target.value,
          });
        }}
        textData={theTextData}
        edit={edit}
        disEnableHeaderText={disEnableHeaderText}
      /> */}
      <div
        style={{
          visibility: `${displayHiddenHeader}`,
          cursor: "pointer",
          top: "10px",
          display: "table-footer-group",
        }}
        // style={textCancel}
        onClick={disEnableHeaderText}
      >
        <ClearIcon />
      </div>
      <Border
        edit={edit}
        ref={borderRef}
        textData={theTextData}
        color="lightgrey"
      >
        {/* <BaseText
          ref={textRef}
          textData={theTextData}
          edit={edit}
          onClick={() => setEdit(true)}
        /> */}
        <BasetextSubHeader
          ref={textRef}
          textData={theTextData}
          edit={edit}
          onClick={() => setEdit(true)}
          headerSubLanguage={headerSubLanguage}
        />
      </Border>
    </div>
  );
});

export default SubHeaderEditableText;
