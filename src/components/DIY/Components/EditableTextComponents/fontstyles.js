import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    weight: {
      boxSizing: "content-box",
      padding: ".31em .625em .31em .625em",
      display: "inline-block",
      border: "1px solid lightgrey",
      marginBottom: 3,
    },
    bold: {
      fontWeight: "bold",
      borderRadius: ".31em 0 0 .31em",
    },
    italic: {
      fontStyle: "italic",
    },
    underline: {
      textDecoration: "underline",
      borderRadius: "0 .31em .31em 0",
    },
    selected: {
      background: "lightgrey",
      border: "1px solid white",
    },
  };
});

const FontStyles = (props) => {
  const { onBoldClick, textData, onItalicClick, onUnderlineClick } = props;
  const classes = useStyles({ textData });
  return (
    <React.Fragment>
      <span
        onClick={onBoldClick}
        className={clsx(classes.weight, classes.bold, textData.id, {
          [classes.selected]: textData.fontWeight === "bold",
        })}
      >
        B
      </span>
      <span
        style={{ fontWeight: "bold" }}
        onClick={onItalicClick}
        className={clsx(classes.weight, classes.italic, textData.id, {
          [classes.selected]: textData.fontStyle === "italic",
        })}
      >
        I
      </span>
      <span
        style={{ fontWeight: "bold" }}
        onClick={onUnderlineClick}
        className={clsx(classes.weight, classes.underline, textData.id, {
          [classes.selected]: textData.textDecoration === "underline",
        })}
      >
        U
      </span>
    </React.Fragment>
  );
};

export default FontStyles;
