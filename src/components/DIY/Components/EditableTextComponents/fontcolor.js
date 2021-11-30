import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    fontColor: {
      display: "inline-block",
      marginLeft: 3,
    },
    input: {
      width: "2.0em",
      height: "2.2em",
      marginBottom: 3,
      borderRadius: 5,
      outline: "none",
    },
  };
});

const FontColor = (props) => {
  const classes = useStyles();
  const { onFontColorChange, textData } = props;
  return (
    <div className={clsx(classes.fontColor, textData.id)}>
      <input
        className={clsx(classes.input, textData.id)}
        type="color"
        defaultValue="#000"
        onChange={onFontColorChange}
      />
    </div>
  );
};

export default FontColor;
