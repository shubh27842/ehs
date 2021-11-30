/*jshint esversion: 6 */
import React, { useState ,useEffect, useLayoutEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/homepage/HomePageNew.jsx";
import Search from "./components/Search/Search";
import Category from "./components/category_page/CategoryPage.jsx";
import ProductList2 from "./components/product_list2/ProductList2.jsx";
import NavBar from "./components/homepage/navbar/NavBar";
import ProductDescription from "./components/productdescription/ProductDescription";
import { useLocation, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/ShoppingCart/ShoppingCart";
import Dashboard from "./components/CustomerDashboard/Dashboard";
import Axios from "axios";
import { login } from "./helper/apiPath";
import { setLoginResponse } from "./redux/actions/index.js";
import { connect } from "react-redux";
import Login from "./components/login/LoginN";
import Signup from "./components/login/SignupN.jsx";
import Otp from "./components/login/Otp";
import ForgotPass from "./components/login/ForgotPass";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions/TermAndConditions";
import Support from "./components/Support/Support";
import Affiliate from "./components/Affliate/Affliate";
import Faq from "./components/Faq/Faq";
import Quotation from "./components/Quotation/Quotation";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import SignageProductPage from "./components/signages/SignageProductPage";
import SignageProductPageN from "./components/category_page/SignagesProductPageN";
import Footer from "./components/homepage/FooterNew";
import PosterProductPage from "./components/category_page/PosterProductPageN";
import Contact from "./components/contact/Contact";
import Checkout from "./components/ShoppingCart/Checkout";
import About from "./components/About/About";
import Campaigns from "./components/Campaigns/CategoryPage";
import Author from "./components/Author/ProductsByAuthor";
import CouponInfo from "./helper/couponInfo";
import CartContext from "./helper/cartContext";
import Success from "./components/SuccessPage/SuccessPage";
import DiyHome from "./components/DIY/Components/DiyHome/DiyHome";

const  ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const DesContext = React.createContext({});


function App(props) {
  let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
    cartList: [],
  };

  const [cartCount, setCartCount] = useState(cartJson.cartList.length || 0);
  const [cartCountN, setCartCountN] = useState(0);
  const [subCat, setSubCat] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [couponDetails,setCouponDetails] = React.useState({});

  //console.log(cartCountN)
  const countSetFun = (bottomDet) => {
    setCartCount(cartCount + 1);

    let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
      cartList: [],
    };

    cartJson.cartList.push(bottomDet);

    localStorage.setItem("listCart12345678910", JSON.stringify(cartJson));
  };

  const [Description, setDescription] = useState({});
  const [textFieldData, setTextFieldData] = useState({});

  React.useEffect(() => {
    document.title = "Ehs prints";

    /*Axios.post(login, { emailid: "naveen@gmail.com", password: "1234" })
      .then((res) => {
        props.setLoginResponse(res.data.token);
        localStorage.setItem("ehstoken12345678910", res.data?.token);
      })
      .catch((err) => {
        console.log(err);
      });*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  return (
    <div className="App">
      <DesContext.Provider value={{ DesDetail: setDescription },[textFieldData, setTextFieldData]}>
      <CouponInfo.Provider value={[couponDetails,setCouponDetails]}>
      <CartContext.Provider value={[cartCountN, setCartCountN]}>
        <Router >
        <ScrollToTop />
          <NavBar
          
          />
          
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            
            <Route exact path="/DIY">
              <DiyHome />
            </Route>
            

            <Route exact path="/track">
              <TrackOrder />
            </Route>

            <Route exact path="/search">
              <Search searchData={searchData} setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/privacy-policy">
              <PrivacyPolicy />
            </Route>

            <Route eact path="/termsandconditions">
              <TermsAndConditions />
            </Route>

            <Route exact path="/quotation">
              <Quotation />
            </Route>

            <Route exact path="/faq">
              <Faq />
            </Route>

            <Route exact path="/support">
              <Support />
            </Route>

            <Route exact path="/affiliate">
              <Affiliate />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/cat/:catSlug">
              <Category setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/campaigns">
              <Campaigns />
            </Route>

            <Route exact path="/:catSlug/subcat/:subCatSlug">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/:catSlug/:subCatSlug/product/id=:productId">
              <PosterProductPage  />
            </Route>
            {/* <Route exact path="/signages/:subCatSlug/product/id=:productId">
              <SignageProductPageN  />
            </Route> */}


            <Route exact path="/author/:authorSlug/products">
              <Author />
            </Route>

            <Route exact path="/signages/PPE/ProductName">
              <SignageProductPage  />
            </Route>

            <Route exact path="/item/:id">
              <ProductDescription
                setCartCountFun={countSetFun}
                navCount={cartCount}
              />
            </Route>
            
            <Route path="/cart">
              <Cart
                setCartCount={setCartCount}
                navCount={cartCount}
                det={Description}
                setCartCountFun={countSetFun}
              />
            </Route>

            
            
            <Route  path="/checkout">
              <Checkout />
            </Route>

            <Route path="/success">
              <Success />
            </Route>
            
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/forgotpassword">
              <ForgotPass />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/activate">
              <Otp />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard setCartCountFun={countSetFun} />
            </Route>
          </Switch>

          <Footer 
            className="footer_z_index" />
        </Router>
        </CartContext.Provider>
        </CouponInfo.Provider>
      </DesContext.Provider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginResponse: (payload) => dispatch(setLoginResponse(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);




/*<Route exact path="/posters/BILINGUAL-HINDI-AND-ENGLISH">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/ELECTRICAL-HAZARD">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/MATERIAL-HANDLING">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/CHEMICAL-HAZARDS">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/FIRE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/HOUSE-KEEPING">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/QUALITY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/ENVIRONMENT">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/PICTOGRAM">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/COVID-19">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>*/