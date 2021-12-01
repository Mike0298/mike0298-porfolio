import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="items">
        <Link to="/" className="items__item">
          <div className="items__item__item-text">Home</div>
          <i className="icon ion-md-home"></i>
        </Link>
        <div className="items__divider"></div>
        <Link to="/introduction" className="items__item">
          <div className="items__item__item-text">About Me</div>
          <i className="icon ion-md-person"></i>
        </Link>
        <Link to="/education" className="items__item">
          <div className="items__item__item-text">Education</div>
          <i className="icon ion-ios-school"></i>
        </Link>
        <Link to="/works" className="items__item">
          <div className="items__item__item-text">Work Experiences</div>
          <i className="icon ion-md-briefcase"></i>
        </Link>
        <Link to="/projects" className="items__item">
          <div className="items__item__item-text">Projects</div>
          <i className="icon ion-ios-code"></i>
        </Link>
        <Link to="contact" className="items__item">
          <div className="items__item__item-text">Contact</div>
          <i className="icon ion-ios-mail"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
