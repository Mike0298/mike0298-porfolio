import React from "react";
import "./cardlist.css";
import CardItem from "./CardItem/cardItem";

const Cardlist = ({ projectData }) => {
  return (
    <div className="cardlist">
      {projectData.map((project, index) => {
        return <CardItem data={project} key={index} />;
      })}
    </div>
  );
};

export default Cardlist;
