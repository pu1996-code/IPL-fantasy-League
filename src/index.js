import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserComponent from "./Components/UserComponents/App";
import Footer from "./Components/ReusableComponents/Footer";
// import AdminComponent from "./Components/AdminComponents/AdminComponent";
ReactDOM.render(
  <>
    <UserComponent />
    <Footer/>
  </>,

  document.getElementById("root")
);
reportWebVitals();
