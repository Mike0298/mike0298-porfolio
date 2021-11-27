import React from "react";
import "./accordianList.css";

import AccordianItem from "./AccordianItem/accordianItem";

const AccordianList = ({ workData }) => {
  return (
    <div className="accordian-list">
      {workData.map((work, index) => {
        return <AccordianItem item={work} key={index} id={index} />;
      })}
    </div>
  );
};

export default AccordianList;
