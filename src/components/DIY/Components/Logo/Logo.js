import React from "react";

const Logo = ({ handleLogAndImgChange }) => {
  return (
    <div>
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4">ADD YOUR LOGO</h4>
      </div>
      <div className="upload-logo-container-body">
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
  );
};

export default Logo;
