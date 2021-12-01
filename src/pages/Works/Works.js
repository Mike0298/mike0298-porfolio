import React, { useEffect } from "react";
import "./Works.scss";
import AccordianList from "../../components/AccordianList/accordianList";
import NavButton from "../../components/navButton/navButton";
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
    <div className="works">
      <div className="works__title">Work Experience</div>
      <AccordianList workData={workData} />
      <div className="works__bottom">
        <NavButton page="projects" text="Projects" />
      </div>
    </div>
  );
};

export default Works;
