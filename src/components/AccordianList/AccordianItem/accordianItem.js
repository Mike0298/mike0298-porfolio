import React from "react";
import "./accordianItem.css";

const AccordianItem = ({ item, id }) => {
  return (
    <div className="accordian-item" id={`item${id}`}>
      <a href={`#item${id}`} className="accordian-item-header">
        {item.title}
        <i className="icon ion-ios-arrow-forward"></i>
        <i className="icon ion-ios-arrow-down"></i>
      </a>
      <div className="accordian-item-content">
        <div>
          <div className="detail">
            <div>{item.company}</div>
            <div className="time">
              {item.start} - {item.end}
            </div>
          </div>
          <div className="location">{item.location}</div>
          <div className={`desc ${item.technology.length === 0 && "full"}`}>
            <div className="task">
              <p>Tasks</p>
              <ul>
                {item.task.map((task, index) => {
                  return <li key={index}>{task}</li>;
                })}
              </ul>
            </div>
            {item.technology.length !== 0 && (
              <div className="techs">
                <p>Technology Used</p>
                <ul>
                  {item.technology.map((technology, index) => {
                    return <li key={index}>{technology}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
