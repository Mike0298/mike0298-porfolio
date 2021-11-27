import React from "react";
import "./timelineItem.css";

const TimelineItem = ({ item, id }) => {
  return (
    <div
      className={`timeline-item ${
        id % 2 ? "timeline-item-right" : "timeline-item-left"
      }`}
    >
      <div className="item-content">
        <div className="type">{item.type}</div>
        <div className="info">
          <div className="university">{item.university}</div>
          <div className="time">
            {item.start} - {item.end}
          </div>
        </div>
        <div className="location">{item.location}</div>
        <div className="gpa">GPA: {item.gpa}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
