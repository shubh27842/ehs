import React from "react";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FourKIcon from "@mui/icons-material/FourK";

const AlignItemsBody = ({ handleFormatChange, textData }) => {
  return (
    <div>
      <div className="d-flex align-icon">
        <button
          className="icon-align"
          value="start"
          onClick={(e) => handleFormatChange(e)}
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
          onClick={(e) => handleFormatChange(e)}
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
          onClick={(e) => handleFormatChange(e)}
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
  );
};

export default AlignItemsBody;
