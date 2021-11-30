import React from "react";
import "./Templates.css";

const ImageTemplate = ({ img, imgData }) => {
  const allImg = img.img;
  const imgId = img.id;
  return (
    <div className="col-6 ">
      <div className="image-template ">
        <div>
          <a style={{ cursor: "pointer" }} onClick={() => imgData(imgId)}>
            <img width="123px" height="123px" src={allImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageTemplate;
