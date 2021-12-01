import React from "react";
import "./timeline.scss";

import TimelineItem from "./TimelineItem/timelineItem";

const Timeline = ({ educationData }) => {
  return (
    <div className="timeline">
      {educationData.map((item, index) => {
        return <TimelineItem item={item} key={index} id={index} />;
      })}
    </div>
  );
};

export default Timeline;
