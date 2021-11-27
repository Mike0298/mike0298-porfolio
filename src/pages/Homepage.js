import React, { useEffect } from "react";
import "./Homepage.css";

import NavButton from "../components/navButton/navButton";

const Homepage = () => {
  useEffect(() => {
    document.title = "Mike0298's Portfolio";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <div className="content">
        <p>Hello World</p>
        <NavButton page="introduction" text="About Me" />
      </div>
    </div>
  );
};

export default Homepage;
