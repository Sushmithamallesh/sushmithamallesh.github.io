import React from "react";

import Footer from "./Footer";
import profile from "../assets/images/sushmithamallesh.jpeg";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#one" className="image avatar">
            <img src={profile} alt="Profile" />
          </a>
          <h1>
            <strong>Hi I'm Sushmitha </strong>
            <br />
            <span id="description">Software Engineer </span>            
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
