import React from "react";
import { Link } from "react-router-dom";
import "./navButton.scss";

const NavButton = (props) => {
  return (
    <Link to={"/" + props.page} className="navButton">
      {props.text}
      <i className="icon ion-ios-arrow-forward"></i>
    </Link>
  );
};

export default NavButton;
