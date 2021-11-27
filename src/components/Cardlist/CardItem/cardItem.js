import React from "react";
import "./cardItem.css";

const CardItem = ({ data }) => {
  return (
    <div className="carditem">
      <div className="project-title">{data.title}</div>
      <div className="desc">{data.desc}</div>
      <div className="tasks">
        <p>My tasks:</p>
        <ul>
          {data.task.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
      <div className="technology">
        <span>Technology used: </span> {data.technology.join(", ")}
      </div>
      <div className="source">
        <a href={data.sourceCode} target="_blank" rel="noreferrer">
          View on <i className="icon ion-logo-github"></i>
        </a>
      </div>
      <div className="note">{data.note}</div>
    </div>
  );
};

export default CardItem;
