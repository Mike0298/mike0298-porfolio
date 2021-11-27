import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="items">
        <Link to="/" className="item">
          <div className="item-text">Home</div>
          <i className="icon ion-md-home"></i>
        </Link>
        <div className="divider"></div>
        <Link to="/introduction" className="item">
          <div className="item-text">About Me</div>
          <i className="icon ion-md-person"></i>
        </Link>
        <Link to="/education" className="item">
          <div className="item-text">Education</div>
          <i className="icon ion-ios-school"></i>
        </Link>
        <Link to="/works" className="item">
          <div className="item-text">Work Experiences</div>
          <i className="icon ion-md-briefcase"></i>
        </Link>
        <Link to="/projects" className="item">
          <div className="item-text">Projects</div>
          <i className="icon ion-ios-code"></i>
        </Link>
        <Link to="contact" className="item">
          <div className="item-text">Contact</div>
          <i className="icon ion-ios-mail"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
