import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
//import { Provider } from "react-redux"; //allow acces to store
import { BrowserRouter as Router } from "react-router-dom"; //routes for pages
//import store from "./store";
import App from "./components/App/App";


// const history = createBrowserHistory();


ReactDOM.render(
  <Router basename="/struct/">
        <App />
  </Router>      
  ,document.getElementById("root")
);

