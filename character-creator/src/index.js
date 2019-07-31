import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Footer from "./components/Footer";
import './styles.css';
import "react-tabs/style/react-tabs.css";

ReactDOM.render(<App/>, document.getElementById("root"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));
