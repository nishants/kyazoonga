import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/nav-bar";
import IntroCarousel from "./homepage/intro-carousel";

const App = () =>(
    <React.Fragment>
      <NavBar/>
      <IntroCarousel/>
    </React.Fragment>
);

ReactDOM.render(
    <App/>,
    document.getElementById("react-app")
);