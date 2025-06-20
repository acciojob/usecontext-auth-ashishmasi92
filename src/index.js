import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Auth from "./components/context/AuthContext";


ReactDOM.render(
    <Auth>

        <App />
    </Auth>

    , document.getElementById("root"));
