import "./container.css";

import React from "react";

import Footer from "./footer/Footer";
import MainContent from "./main-content/MainContent";
import Header from "./header/Header";

function Container() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Container;
