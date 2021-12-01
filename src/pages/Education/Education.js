import React, { useEffect } from "react";
import NavButton from "../../components/navButton/navButton";
import Timeline from "../../components/Timeline/timeline";
import { useSelector } from "react-redux";

import "./Education.scss";

const Education = () => {
  useEffect(() => {
    document.title = "Mike0298 | Education";
    window.scrollTo(0, 0);
  }, []);

  const educationData = useSelector((state) => {
    return state.data.educationData;
  });

  return (
    <div className="education">
      <div className="education__title">Education</div>
      <Timeline educationData={educationData} />
      <div className="education__bottom">
        <NavButton page="works" text="Work Experience" />
      </div>
    </div>
  );
};

export default Education;
