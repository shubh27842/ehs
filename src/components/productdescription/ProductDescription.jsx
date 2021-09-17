/* eslint-disable react-hooks/exhaustive-deps */
/*jshint esversion: 6 */
import React from "react";
import Rectangle from "../../images/Rectangle.svg";
import { Grid } from "semantic-ui-react";
import BreadVector from "../../images/BreadVector.svg";
import { Link } from "react-router-dom";
import Profile from "../../images/Profile.svg";
import CloseBtn from "../../images/ExitBtn.svg";
import Other from "../../images/otherwork.svg";
import Rating from "@material-ui/lab/Rating";
import { useLocation } from "react-router-dom";
import Also from "../../images/alsoavai.svg";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Heart from "../../images/heart.svg";
import Shareit from "../../images/shareit.svg";
import Dhl from "../../images/dhl.svg";
import Pay from "../../images/payment.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import $ from "jquery";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import SummaSvg from "../../images/summabet.svg";
import Avatar from "@material-ui/core/Avatar";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";
import {
  config,
  getPosterById,
  findMat,
  findDim,
  updateUser,
  url,
} from "../../helper/apiPath";

function ProductDescription(props) {
  const [posterData, setPosterData] = React.useState({});
  const [similarPosterData, setSimilarPosterData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [mat, setMat] = React.useState({});
  const [dim, setDim] = React.useState({});

  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  function getSimilar(s) {
    let a = url + "posters/get" + s.charAt(0).toUpperCase() + s.slice(1);
    Axios.get(a)
      .then((res) => {
        setSimilarPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    Axios.get(
      `${getPosterById}/${itemId}`,
      config(
        props.loginResponse.token || localStorage.getItem("ehstoken12345678910")
      )
    )
      .then((res) => {
        const posterItem = res.data.posterData;
        setPosterData(posterItem);
        getSimilar(posterItem.category.title);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.loginResponse.token, itemId]);

  const [reviewPer] = React.useState(0);
  var [count, setCount] = React.useState(1);

  function onAdd() {
    return setCount(count + 1);
  }
  function onSub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const [selectedModal, setSelectedModal] = React.useState({});

  const selectedModalCard = (data) => {
    setSelectedModal(data);
    $("#modalOpen").trigger("click");
  };

  const [modalCarousel, setModalCar] = React.useState({
    one: true,
    two: false,
    three: false,
  });

  const setModalCarousel = (e) => {
    if (e.target.id === "one") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "two") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "three") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const setModalCarouselb = (e) => {
    if (e.target.id === "oneb") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "twob") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "threeb") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const [selectMatDim, setMatDim] = React.useState({
    Material: { one: false, two: false, three: false },
    Dimension: { one: false, two: false, three: false },
  });

  let card1Det, card2Det;
  try {
    card1Det = [
      {
        src: posterData.material[0].imgUrl,
        title: posterData.material[0].title,
        name: "one",
        select: "Material",
      },
      {
        src: posterData.material[1].imgUrl,
        title: posterData.material[1].title,
        name: "two",
        select: "Material",
      },
      {
        src: posterData.material[2].imgUrl,
        title: posterData.material[2].title,
        name: "three",
        select: "Material",
      },
    ];

    card2Det = [
      {
        src: posterData.dimension[0].imgUrl,
        title: posterData.dimension[0].title,
        cus: true,
        cusWidth: "90",
        cusHeight: "50",
        name: "one",
        select: "Dimension",
      },
      {
        src: posterData.dimension[1].imgUrl,
        title: posterData.dimension[1].title,
        cus: true,
        cusWidth: "100",
        cusHeight: "60",
        name: "two",
        select: "Dimension",
      },
      {
        src: posterData.dimension[2].imgUrl,
        title: posterData.dimension[2].title,
        cus: true,
        cusWidth: "120",
        cusHeight: "80",
        name: "three",
        select: "Dimension",
      },
    ];
  } catch (e) {}

  let card1Det1, card2Det1;
  try {
    card1Det1 = {
      select: "Material",
      box: [
        {
          src: selectedModal.material[0].imgUrl,
          title: selectedModal.material[0].title,
          name: "one",
          select: "Material",
        },
        {
          src: selectedModal.material[1].imgUrl,
          title: selectedModal.material[1].title,
          name: "two",
          select: "Material",
        },
        {
          src: selectedModal.material[2].imgUrl,
          title: selectedModal.material[2].title,
          name: "three",
          select: "Material",
        },
      ],
    };
    card2Det1 = {
      select: "Dimension",
      box: [
        {
          src: selectedModal.dimension[0].imgUrl,
          title: selectedModal.dimension[0].title,
          cus: true,
          cusWidth: "90",
          cusHeight: "50",
          name: "one",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[1].imgUrl,
          title: selectedModal.dimension[1].title,
          cus: true,
          cusWidth: "100",
          cusHeight: "60",
          name: "two",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[2].imgUrl,
          title: selectedModal.dimension[2].title,
          cus: true,
          cusWidth: "120",
          cusHeight: "80",
          name: "three",
          select: "Dimension",
        },
      ],
    };
  } catch (e) {}

  const card3Det = {
    select: "Quantity",
    quantity: 1,
    material: "Material: " + findMat(selectMatDim.Material),
    dimension: "Dimensions:" + findDim(selectMatDim.Dimension),
    price: selectedModal.originalPrice,
  };

  const ModalDet = {
    src: selectedModal.imgUrl,
    title: selectedModal.name,
    select: "Select Material",
    selectedMatDim: selectMatDim,
    card1: card1Det1,
    card2: card2Det1,
    card3: card3Det,
  };

  const [bottomDet, setBottomDet] = React.useState({});

  const addToCart = (det) => {
    setBottomDet(det);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(det);
  };

  const [authUser, setAuthUser] = React.useState("");

  function updateWishlist() {
    Axios.post(updateUser, {
      wishList: window.location.pathname.split("/")[2],
      operation_type: 1,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    }).then((data) => {
      swal("", "Added to Whishlist", "success");
    });
  }

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, []);

  React.useEffect(() => {
    if (selectMatDim.Material.one)
      try {
        setMat(posterData.material[0]);
      } catch (e) {}
    else if (selectMatDim.Material.two)
      try {
        setMat(posterData.material[1]);
      } catch (e) {}
    else if (selectMatDim.Material.three)
      try {
        setMat(posterData.material[2]);
      } catch (e) {}

    if (selectMatDim.Dimension.one)
      try {
        setDim(posterData.dimension[0]);
      } catch (e) {}
    else if (selectMatDim.Dimension.two)
      try {
        setDim(posterData.dimension[1]);
      } catch (e) {}
    else if (selectMatDim.Dimension.three)
      try {
        setDim(posterData.dimension[2]);
      } catch (e) {}
  }, [selectMatDim]);

  return (
    <>
      {isLoading ? (
        <CircularProgress
          size="100px"
          thickness={5}
          style={{ marginTop: "15%", marginLeft: "45%", color: "orange" }}
        />
      ) : (
        <div>
          <Grid>
            <Grid.Row className="justify-content-center mt-2 mb-3">
              <Grid.Column>
                <img src={Rectangle} alt="" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="pl-5">
              <Grid.Column className="mt-1" style={{ width: "30%" }}>
                <Link className="breadLink" to="/">
                  Home
                </Link>{" "}
                <img
                  src={BreadVector}
                  className="mr-1"
                  width="10"
                  height="10"
                  alt=""
                />
                <Link className="breadLink" to="/posters">
                  Posters
                </Link>{" "}
                <img
                  src={BreadVector}
                  className="mr-1"
                  width="10"
                  height="10"
                  alt=""
                />
                <p className="breadLink">{posterData.name.slice(0, 25)}...</p>
                <div className="mt-2">
                  <img
                    src={posterData.imgUrl}
                    alt={posterData.name}
                    height="400px"
                    width="400px"
                  />
                </div>
                <Grid.Row columns="2" className=" mt-4 ml-1 ">
                  <Grid.Column>
                    <img
                      src={Profile}
                      alt=""
                      height="40px"
                      width="85%"
                      style={{ display: "inline" }}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <p className="bydes ml-3 mt-2">{posterData.creator}</p>
                  </Grid.Column>
                </Grid.Row>
                <p className="bybelow mt-4">Other Designs by the Designer</p>
                <Grid.Row columns="4" className="ml-1">
                  {[...Array(4)].map((v, i) => (
                    <Grid.Column
                      key={i}
                      className={i !== 0 ? "ml-3 mt-3" : "mt-3"}
                    >
                      <img src={Other} alt="" width="86px" />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid.Column>
              <Grid.Column className="ml-5 pl-1">
                <p className="destitle pt-2 mt-4">{posterData.name}</p>
                <p
                  className={
                    posterData.stocks > 0 ? "instock" : "text-danger instock"
                  }
                  style={{ marginTop: "-17px" }}
                >
                  {posterData.stocks > 0 ? "In Stock" : "Out of Stock"}
                </p>
                <div style={{ float: "left" }} className="m-0 p-0">
                  <p
                    style={{
                      float: "left",
                      marginRight: "10px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginTop: "-11px",
                      fontFamily: " Source Sans Pro",
                    }}
                  >
                    {posterData.rating.length}
                  </p>
                  <div style={{ float: "right", marginTop: "-10px" }}>
                    <Rating
                      style={{ float: "left" }}
                      name="size-small"
                      size="small"
                      defaultValue={posterData.rating.length}
                      precision={0.5}
                      className="m-0 p-0"
                      disabled
                    />
                    <p
                      style={{
                        marginLeft: "5px",
                        float: "right",
                        marginTop: "-2px",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontFamily: " Source Sans Pro",
                      }}
                    >
                      {posterData.bought}
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <p
                  style={{ marginTop: "-30px", position: "absolute" }}
                  className="boughtthis"
                >
                  {posterData.bought} bought this
                </p>
                <Grid className="container mt-2">
                  <Grid.Row columns="2" style={{}}>
                    <Grid.Column>
                      <p className="select ">Select Material</p>
                      <Grid.Row style={{ marginLeft: "-1px" }}>
                        {card1Det.map((v, i) => (
                          <Grid.Column
                            key={i}
                            className={i !== 0 ? "ml-2" : "none"}
                          >
                            
                          </Grid.Column>
                        ))}
                      </Grid.Row>

                      <p className="select mt-3">Select Dimension</p>
                      <Grid.Row style={{ marginLeft: "-1px" }}>
                        {card2Det.map((v, i) => (
                          <Grid.Column
                            key={i}
                            className={i !== 0 ? "ml-2" : "none"}
                          >
                            
                          </Grid.Column>
                        ))}
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column className="ml-5">
                      <pre className="blabla">
                        Both Interior and Exterior warranty is of three years.
                        <br />
                        Prices are inclusive of G.S.T
                        <br />
                        Performa Invoice can be generated at checkout. <br />
                        For Queries, contact Sales Team at +91 9632418602
                        <br />
                        <br />
                        Shipping free for orders above two thousand
                        <br />
                        (2,000/-) Indian rupees.
                        <br />
                        <br />
                        Shipping Cost <br />
                        <br />
                        Return Policy
                      </pre>
                      <p className="blablabla">
                        Category :{" "}
                        <span>
                          {posterData.category.title} |{" "}
                          {posterData.subCategory.title}
                        </span>
                      </p>
                      <p className="blablabla">
                        Tags:
                        <span>
                          {" "}
                          Using Safety Gloves .. is all in Your Hands.
                        </span>
                      </p>
                      <p className="blablabla">
                        SKU:
                        <span>
                          posters-chemical-hazard-sku-1114021234-prd-ch001g
                        </span>
                      </p>

                      <img src={Also} alt="" style={{ width: "100%" }} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid.Row className="container mt-4 ">
                  <p className="matdim">
                    Select Material and Dimensions to check Price
                  </p>
                </Grid.Row>
                <p className="quantdes">Quantity</p>

                <Grid.Row className="container">
                  <Grid.Column>
                    <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                      style={{ height: "38px" }}
                    >
                      <Button onClick={onSub} className="shadow-none">
                        <RemoveIcon style={{ color: "grey" }} />
                      </Button>
                      <Button
                        style={{
                          fontFamily: "Lato",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "18px",
                          lineHeight: "22px",
                          color: "#000000",
                          paddingLeft: "18px",
                          paddingRight: "18px",
                        }}
                      >
                        {count}
                      </Button>
                      <Button onClick={onAdd}>
                        <AddIcon style={{ color: "grey" }} />
                      </Button>
                    </ButtonGroup>
                  </Grid.Column>
                  <Grid.Column className="ml-5" style={{ width: "500px" }}>
                    <Button
                      className="text-white ml-5"
                      style={{
                        background: "#003459",
                        borderRadius: "6px",
                        width: "500px",
                      }}
                      onClick={(e) => {
                        if (
                          findMat(selectMatDim.Material) &&
                          findDim(selectMatDim.Dimension)
                        ) {
                          addToCart({
                            ...selectMatDim,
                            ...posterData,
                            quantity: count,
                          });
                          e.target.innerText = "Added!!!";
                        } else {
                          swal(
                            "Oops",
                            "Select The Proper Material and Dimension",
                            "warning"
                          );
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                    <button
                      className="ml-5 "
                      onClick={() => {
                        authUser
                          ? updateWishlist()
                          : swal("Oops", "Login to Add Whishlist", "error");
                      }}
                      style={{
                        float: "left",
                        background: "transparent",
                        border: "none",
                        color: "black",
                      }}
                    >
                      Add to Wishlist{" "}
                      <img src={Heart} width="15px" height="15px" alt="" />
                    </button>
                    <p style={{ float: "right", marginRight: "-50px" }}>
                      Share{" "}
                      <img src={Shareit} width="15px" height="15px" alt="" />
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <hr className="m-4" style={{ border: "1px solid #D2D2D2" }} />
            <Grid.Row columns="3" className="ml-4">
              <Grid.Column className="mr-5 blablabla">
                <p style={{ fontSize: "18px", lineHeight: "22px" }}>
                  Product Details
                </p>
                <p>
                  Material:<span>{mat.title}</span>
                </p>
                <p>
                  Dimensions:<span>{dim.title}</span>
                </p>
                <p>
                  Weight:<span>{posterData.weight}</span>
                </p>
                <ul className="ulListStyle">
                  <li className="listStyle">
                    Both Interior and Exterior warranty is of three years.
                  </li>
                  <li className="listStyle">Prices are inclusive of G.S.T</li>
                  <li className="listStyle">
                    Performa Invoice can be generated at checkout.
                  </li>
                </ul>
              </Grid.Column>
              <Grid.Column
                className="justify-content-end ml-5"
                style={{ float: "right" }}
              >
                <Grid.Row columns="2" className="ml-5">
                  <Grid.Column className="ml-5 pl-5 mr-4">
                    <p className="shipping">Shipping Services</p>
                    <img src={Dhl} alt="" />
                  </Grid.Column>
                  <Grid.Column className="ml-5">
                    <p className="shipping">Payment Methods</p>
                    <img src={Pay} alt="" />
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="2" className="ml-4 mt-5">
              <Grid.Column className="mt-3">
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    fontFamily: "Lato",
                  }}
                >
                  Reviews
                </p>
                <Box className="mt-4" position="relative" display="inline-flex">
                  <CircularProgress
                    style={{ width: "70px", height: "70px" }}
                    variant="determinate"
                    value={reviewPer}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      className="ratingin"
                      variant="caption"
                      component="div"
                      color="textSecondary"
                    >
                      {posterData.rating.length}
                    </Typography>
                  </Box>
                </Box>
                <p>{posterData.rating.length} ratings</p>
              </Grid.Column>
              <Grid.Column className="mt-5 pt-4">
                {[...Array(5)].map((v, i) => (
                  <Grid.Row
                    key={i}
                    columns="2"
                    className="pl-5 ml-2"
                    style={{ marginTop: "-8px" }}
                  >
                    <Grid.Column>
                      <p className="ratinglist">{i + 1} star</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid.Row
                        columns="2"
                        className="linearprog ml-3 mt-2"
                        style={{ width: "200px" }}
                      >
                        <Grid.Column
                          style={{
                            backgroundColor: "#F2994A",
                            width: "150px",
                            borderRadius: "4px",
                          }}
                        ></Grid.Column>
                        <Grid.Column
                          style={{
                            backgroundColor: "#D2D2D2",
                            width: "50px",
                            borderTopRightRadius: "4px",
                            borderBottomRightRadius: "4px",
                          }}
                        ></Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid.Column>
              <Grid.Column className="ml-5 pl-5 mt-3">
                <Grid.Row>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: "600",
                      fontFamily: "Lato",
                    }}
                  >
                    See all Reviews
                  </p>
                </Grid.Row>
                <Grid.Row columns="4" className="mt-2">
                  {[...Array(4)].map((v, i) => (
                    <Grid.Column key={i} className={i !== 0 ? "ml-3" : ""}>
                      <Card
                        style={{
                          width: "200px",
                          height: "133px",
                          border: "1px solid #D2D2D2",
                        }}
                      >
                        <CardHeader
                          avatar={<Avatar aria-label="recipe"></Avatar>}
                          title="ThanigaiVel"
                        />
                        <CardContent className="pt-0 mb-2 ml-2">
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            This is impressive ArtWork
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="mt-5 mb-5">
              <img
                className="justify-content-center"
                style={{ margin: "0 auto", display: "block" }}
                src={SummaSvg}
                alt=""
              />
            </Grid.Row>
            <Grid.Row className="ml-4 mt-4">
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  fontFamily: "Lato",
                }}
              >
                Similar items
              </p>
              <Grid.Row
                columns="4"
                className="mt-1 ml-1"
                style={{ marginTop: "-15px" }}
              ></Grid.Row>
              <Grid.Row className="mt-5" style={{ marginLeft: "-50px" }}>
                {similarPosterData.slice(0, 5).map((v, i) => (
                  <Grid.Column key={i} className={i !== 0 ? "ml-3" : "m-0 p-0"}>
                   
                  </Grid.Column>
                ))}
              </Grid.Row>
              <Grid.Row
                className="justify-content-center mt-5"
                style={{ margin: "0 auto" }}
              ></Grid.Row>
            </Grid.Row>
          </Grid>

          <div
            id="bottomCart"
            className="pt-3 pl-4"
            style={{
              width: "320px",
              height: "150px",
              backgroundColor: "white",
              zIndex: "22",
              position: "fixed",
              bottom: "30px",
              right: "30px",
              boxShadow: "0px 2px 20px 4px rgba(0, 0, 0, 0.25)",
              display: "none",
            }}
          >
           
          </div>
          <div
            className="mt-5"
            style={{ width: "100%", background: "#003459" }}
          >
            <Grid style={{ paddingTop: "50px" }}>
              <Grid.Row columns="4" className="ml-4">
                <Grid.Column className="ml-5">
                  <ul>
                    <h3 className="footerhead">Products</h3>
                    <Link to="/posters" className="footertxt">
                      Posters
                    </Link>
                    <Link to="/signages" className="footertxt">
                      Signages
                    </Link>
                    <Link to="/campaigns" className="footertxt">
                      Campaigns
                    </Link>
                    <Link to="/floor-graphics" className="footertxt">
                      Floor Graphics
                    </Link>
                    <Link to="/asset-marking" className="footertxt">
                      Asset Marking
                    </Link>
                    <Link to="/posters" className="footertxt">
                      Do It Yourself(DIY)
                    </Link>
                  </ul>
                </Grid.Column>
                <Grid.Column className="ml-5 pl-5">
                  <ul>
                    <h3 className="footerhead">My Account</h3>
                    {authUser ? (
                      <>
                        <Link to="/dashboard" className="footertxt">
                          Profile
                        </Link>
                      </>
                    ) : (
                      <>
                        <li className="footertxt">Profile</li>
                      </>
                    )}

                    {authUser ? (
                      <>
                        <Link to="/dashboard" className="footertxt">
                          Order History
                        </Link>
                      </>
                    ) : (
                      <>
                        <li className="footertxt">Order History</li>
                      </>
                    )}

                    <Link to="/track" className="footertxt">
                      Order Tracking
                    </Link>
                    <Link to="/signup" className="footertxt">
                      Create An Account
                    </Link>
                    <li className="footertxt">New User Guide</li>
                  </ul>
                </Grid.Column>
                <Grid.Column className="ml-5 pl-5">
                  <ul>
                    <h3 className="footerhead">Contact Us</h3>
                    <li className="footertxt">
                      Timings (Mon - Sat: 7:00 - 21:00)
                    </li>
                    <li className="footertxt">
                      45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                    </li>
                    <li className="footertxt">Mobile No : +91 9632418602</li>
                    <li className="footertxt">
                      Email ID : hello@ehsposters.com
                    </li>
                  </ul>
                </Grid.Column>
                <Grid.Column className="ml-5">
                  <ul>
                    <h3 className="footerhead">About</h3>
                    <Link to="/privacy-policy" className="footertxt">
                      Privacy Policies
                    </Link>
                    <Link to="/faq" className="footertxt">
                      FAQ
                    </Link>
                    <Link to="/support" className="footertxt">
                      Support
                    </Link>
                    <Link to="/affiliate" className="footertxt">
                      Join Us (Affiliate)
                    </Link>
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            id="modalOpen"
            style={{ display: "none" }}
          >
            {""}
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {""}
                  </h5>
                  <button
                    type="button"
                    id="modalClose"
                    className="btn shadow-none mr-2 p-0 m-0"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{
                      width: "25px",
                      height: "25px",
                      background: "white",
                    }}
                  >
                    <img src={CloseBtn} alt="close" />
                  </button>
                </div>
                <div className="modal-body border-0">
                  <img
                    width="320px"
                    height="250px"
                    className="d-block mx-auto"
                    style={{ marginTop: "-30px" }}
                    src={ModalDet.src}
                    alt={ModalDet.title}
                  />
                  <p
                    className="text-center mt-1"
                    style={{
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "19px",

                      color: "#000000",
                    }}
                  >
                    {ModalDet.title}
                  </p>
                  {modalCarousel.one ? (
                    <Grid>
                      <Grid.Row className="text-center justify-content-center">
                        <p
                          className="text-center mt-1"
                          style={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "18px",
                            lineHeight: "22px",
                            textAlign: "center",
                            color: "#000000",
                          }}
                        >
                          Select {ModalDet.card1?.select}
                        </p>
                      </Grid.Row>
                      <Grid.Row className="mx-auto" columns="3">
                        {ModalDet.card1?.box.map((v, i) => (
                          <Grid.Column
                            key={i}
                            className={i !== 0 ? "ml-4" : "ml-3"}
                          >
                            
                          </Grid.Column>
                        ))}
                      </Grid.Row>
                    </Grid>
                  ) : null}

                  {modalCarousel.two ? (
                    <Grid>
                      <Grid.Row className="text-center justify-content-center">
                        <p
                          className="text-center mt-1"
                          style={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "18px",
                            lineHeight: "22px",
                            textAlign: "center",
                            color: "#000000",
                          }}
                        >
                          Select {ModalDet.card2.select}
                        </p>
                      </Grid.Row>
                      <Grid.Row className="mx-auto" columns="3">
                        {ModalDet.card2.box.map((v, i) => (
                          <Grid.Column
                            key={i}
                            className={i !== 0 ? "ml-4" : "ml-3"}
                          >
                           
                          </Grid.Column>
                        ))}
                      </Grid.Row>
                    </Grid>
                  ) : null}

                  {modalCarousel.three ? (
                    <Grid>
                      <Grid.Row className="text-center justify-content-center">
                        <p
                          className="text-center mt-1"
                          style={{
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "18px",
                            lineHeight: "22px",
                            textAlign: "center",
                            color: "#000000",
                          }}
                        >
                          Select {ModalDet.card3.select}
                        </p>
                      </Grid.Row>
                      <Grid.Row className="mx-auto justify-content-center">
                        
                      </Grid.Row>
                    </Grid>
                  ) : null}
                </div>
                <div className="modal-footer border-0 justify-content-center bg-white pt-2">
                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      bottom: "5px",
                    }}
                  >
                    <NavigateBeforeIcon
                      style={
                        modalCarousel.two
                          ? { fontSize: "30px" }
                          : { display: "none" }
                      }
                      id="oneb"
                      onClick={setModalCarouselb}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      bottom: "5px",
                    }}
                  >
                    <NavigateBeforeIcon
                      style={
                        modalCarousel.three
                          ? { fontSize: "30px" }
                          : { display: "none" }
                      }
                      id="twob"
                      onClick={setModalCarouselb}
                    />
                  </div>

                  <div
                    id="one"
                    className={modalCarousel.one ? "bg-secondary" : ""}
                    style={{
                      cursor: "pointer",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#D2D2D2",
                    }}
                    onClick={setModalCarousel}
                  ></div>
                  <div
                    id="two"
                    className={modalCarousel.two ? "ml-2 bg-secondary" : "ml-2"}
                    style={{
                      cursor: "pointer",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#D2D2D2",
                    }}
                    onClick={setModalCarousel}
                  ></div>
                  <div
                    id="three"
                    className={
                      modalCarousel.three ? "ml-2 bg-secondary" : "ml-2"
                    }
                    style={{
                      cursor: "pointer",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#D2D2D2",
                    }}
                    onClick={setModalCarousel}
                  ></div>

                  <div
                    style={{
                      position: "absolute",
                      right: "22px",
                      bottom: "5px",
                    }}
                  >
                    <NavigateNextIcon
                      style={
                        modalCarousel.one
                          ? { fontSize: "30px" }
                          : { display: "none" }
                      }
                      id="twob"
                      onClick={setModalCarouselb}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "22px",
                      bottom: "5px",
                    }}
                  >
                    <NavigateNextIcon
                      style={
                        modalCarousel.two
                          ? { fontSize: "30px" }
                          : { display: "none" }
                      }
                      id="threeb"
                      onClick={setModalCarouselb}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};

export default connect(mapStateToProps)(ProductDescription);
