import React, { useState } from "react";
import { CirclePicker, ChromePicker } from "react-color";
import "./Background.css";

const Background = ({ setColor, handleLogAndImgChange }) => {
  const [showColorPicker, setColorPicker] = useState(false);
  // console.log(color);

  return (
    <div>
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4 text-uppercase">background </h4>
      </div>
      <div>
        <div className="color-picker-container">
          <div className="col">
            <button
              className="color-picker-btn"
              onClick={() =>
                setColorPicker((showColorPicker) => !showColorPicker)
              }
            >
              {showColorPicker ? (
                "X"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.773"
                  height="27.773"
                  viewBox="0 0 27.773 27.773"
                >
                  <g
                    id="icons_Q2"
                    data-name="icons Q2"
                    transform="translate(-4 -4)"
                  >
                    <path
                      id="Path_9581"
                      data-name="Path 9581"
                      d="M30.246,6.777H16.29A4.3,4.3,0,0,0,12.332,4,4.166,4.166,0,0,0,8.444,6.777H5.528A1.458,1.458,0,0,0,4,8.166,1.458,1.458,0,0,0,5.528,9.555H8.444a4.166,4.166,0,0,0,3.888,2.777A4.3,4.3,0,0,0,16.29,9.555H30.246a1.458,1.458,0,0,0,1.528-1.389,1.458,1.458,0,0,0-1.528-1.389ZM12.332,9.555a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,12.332,9.555Z"
                      fill="#292929"
                    />
                    <path
                      id="Path_9582"
                      data-name="Path 9582"
                      d="M30.307,20.777H27.46A4.3,4.3,0,0,0,23.5,18a4.166,4.166,0,0,0-3.888,2.777H5.589a1.389,1.389,0,0,0,0,2.777H19.614A4.166,4.166,0,0,0,23.5,26.332a4.3,4.3,0,0,0,3.958-2.777h2.847a1.389,1.389,0,1,0,0-2.777Zm-6.8,2.777a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,23.5,23.555Z"
                      transform="translate(-0.061 -4.279)"
                      fill="#292929"
                    />
                    <path
                      id="Path_9583"
                      data-name="Path 9583"
                      d="M30.307,34.777H18.434A4.3,4.3,0,0,0,14.476,32a4.166,4.166,0,0,0-3.888,2.777h-5a1.389,1.389,0,0,0,0,2.777h5a4.166,4.166,0,0,0,3.888,2.777,4.3,4.3,0,0,0,3.958-2.777H30.307a1.389,1.389,0,1,0,0-2.777ZM14.476,37.555a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,14.476,37.555Z"
                      transform="translate(-0.061 -8.559)"
                      fill="#292929"
                    />
                  </g>
                </svg>
              )}
            </button>

            {showColorPicker && (
              <ChromePicker
                className="color-pic"
                // color={color}
                onChange={(updateColor) => setColor(updateColor.hex)}
              />
            )}
          </div>
        </div>
        <hr className="background-hr" />
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <CirclePicker
              // color={color}
              onChangeComplete={(updateColor2) => setColor(updateColor2.hex)}
            />
          </div>
          <hr className="background-hr" />
        </div>

        <div>
          <div className="background-upload">
            <div>
              <p className="mb-4 text-center">Upload your Brand Logo</p>

              <input
                accept="image/png, image/jpeg"
                onChange={(event) => handleLogAndImgChange(event)}
                type="file"
                id="file"
              />
              <label for="file">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="27"
                  viewBox="0 0 122 27"
                >
                  <g
                    id="Group_299"
                    data-name="Group 299"
                    transform="translate(-240 -468)"
                  >
                    <g
                      id="Group_309"
                      data-name="Group 309"
                      transform="translate(35)"
                    >
                      <text
                        id="_Label"
                        data-name="↳ ✏️ Label"
                        transform="translate(231 489)"
                        fill="#161616"
                        font-size="20"
                        font-family="OpenSans-Regular, Open Sans"
                        letter-spacing="0.089em"
                      >
                        <tspan x="0" y="0">
                          UPLOAD{" "}
                        </tspan>
                      </text>
                      <g
                        id="Layer_2"
                        data-name="Layer 2"
                        transform="translate(204.912 470.912)"
                      >
                        <g
                          id="invisible_box"
                          data-name="invisible box"
                          transform="translate(-0.008 -0.008)"
                        >
                          <rect
                            id="Rectangle_109"
                            data-name="Rectangle 109"
                            width="20"
                            height="20"
                            transform="translate(0.096 0.096)"
                            fill="none"
                          />
                        </g>
                        <g
                          id="icons_Q2"
                          data-name="icons Q2"
                          transform="translate(1.682 1.676)"
                        >
                          <path
                            id="Path_9579"
                            data-name="Path 9579"
                            d="M19.971,40H4.841a.841.841,0,1,0,0,1.681h15.13a.841.841,0,1,0,0-1.681Z"
                            transform="translate(-4 -24.863)"
                            fill="#161616"
                          />
                          <path
                            id="Path_9580"
                            data-name="Path 9580"
                            d="M21.835,8.4l-4.2-4.161a.8.8,0,0,0-1.177,0L12.253,8.4a.883.883,0,0,0-.084,1.135.8.8,0,0,0,1.261.084L16.2,6.849V16.6a.841.841,0,1,0,1.681,0V6.849l2.774,2.774a.8.8,0,0,0,1.261-.084A.883.883,0,0,0,21.835,8.4Z"
                            transform="translate(-8.638 -3.985)"
                            fill="#161616"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
