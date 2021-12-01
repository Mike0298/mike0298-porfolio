import React from "react";
import "./timelineItem.scss";

const TimelineItem = ({ item, id }) => {
  return (
    <div
      className={`timeline-item ${
        id % 2 ? "timeline-item--right" : "timeline-item--left"
      }`}
    >
      <div className="item-content">
        <div className="item-content__type">{item.type}</div>
        <div className="item-content__info">
          <div>{item.university}</div>
          <div>
            {item.start} - {item.end}
          </div>
        </div>
        <div className="item-content__location">{item.location}</div>
        <div>GPA: {item.gpa}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
