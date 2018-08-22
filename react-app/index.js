import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

import IntroCarousel from "./homepage/intro-carousel";
import HotTickets from "./homepage/hot-tickets";
import BrowseByCategory from "./homepage/browse-by-category";
import SellerSection from "./homepage/seller-section";
import FeaturedSection from "./homepage/featured-section";

const App = () =>(
    <React.Fragment>
      <NavBar/>
      <IntroCarousel/>
      <HotTickets/>
      <BrowseByCategory/>
      <SellerSection/>
      <FeaturedSection/>
      <Footer/>
    </React.Fragment>
);

ReactDOM.render(
    <App/>,
    document.getElementById("react-app")
);