import React from "react";

const PictogramsTemplate = ({ img, pictogramImgData }) => {
  const allImg = img.img;
  const imgId = img.id;
  return (
    <div className="col-6 ">
      <div className="pictograms-logo ">
        <div>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => pictogramImgData(imgId)}
          >
            <img width="123px" height="123px" src={allImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PictogramsTemplate;
