import React, { useEffect } from "react";
import "./Projects.scss";
import Cardlist from "../../components/Cardlist/cardlist";
import NavButton from "../../components/navButton/navButton";
import { useSelector } from "react-redux";

const Projects = () => {
  useEffect(() => {
    document.title = "Mike0298 | Projects";
    window.scrollTo(0, 0);
  }, []);

  const projectData = useSelector((state) => {
    return state.data.projectData;
  });

  return (
    <div className="projects">
      <div className="projects__title">Previous Projects</div>
      <Cardlist projectData={projectData} />
      <div className="projects__bottom">
        <NavButton page="contact" text="Contact Me" />
      </div>
    </div>
  );
};

export default Projects;
