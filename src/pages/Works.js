import React, { useEffect } from "react";
import "./Works.css";
import AccordianList from "../components/AccordianList/accordianList";
import NavButton from "../components/navButton/navButton";
import { useSelector } from "react-redux";

const Works = () => {
  useEffect(() => {
    document.title = "Mike0298 | Works";
    window.scrollTo(0, 0);
  }, []);

  const workData = useSelector((state) => {
    return state.data.workData;
  });

  return (
    <div className="works-container">
      <div className="title">Work Experience</div>
      <AccordianList workData={workData} />
      <NavButton page="projects" text="Projects" />
    </div>
  );
};

export default Works;
