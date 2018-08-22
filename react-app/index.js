import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/nav-bar";

const App = () =>(
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
);

ReactDOM.render(
    <App/>,
    document.getElementById("react-app")
);