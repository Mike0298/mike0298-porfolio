import React from "react";
import "./cardItem.scss";

const CardItem = ({ data }) => {
  return (
    <div className="carditem">
      <div className="carditem__project-title">{data.title}</div>
      <div className="carditem__desc">{data.desc}</div>
      <div className="carditem__tasks">
        <p>My tasks:</p>
        <ul>
          {data.task.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
      <div className="carditem__technology">
        <span>Technology used: </span> {data.technology.join(", ")}
      </div>
      <div className="carditem__source">
        <a href={data.sourceCode} target="_blank" rel="noreferrer">
          View on <i className="icon ion-logo-github"></i>
        </a>
      </div>
      <div className="carditem__note">{data.note}</div>
    </div>
  );
};

export default CardItem;
