import React from "react";
import "./BasicLayout.css";
import { Navbar, Footer } from "../components";
const BasicLayout = (props) => {
  return (
    <div className="basic-layout">
      <Navbar />
      <div className="main-wrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
