import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    default: {
      padding: 5,
      display: "inline-block"
    },
    theborder: {
      border: props => `2px solid ${props.color}`,
      cursor: "move",
      borderRadius: 5
    }
  };
});

const Border = React.forwardRef((props, ref) => {
  const { children, edit, color, textData } = props;
  const classes = useStyles({ color, textData });

  return (
    <div
      ref={ref}
      className={`${textData.id} ${classes.default} ${
        edit ? classes.theborder : ""
      }`}
    >
      {children}
    </div>
  );
});

export default Border;
