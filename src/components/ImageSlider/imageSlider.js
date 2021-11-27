import React, { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ skills }) => {
  const [current, setCurrent] = useState(0);
  const length = skills.length;

  if (!Array.isArray(skills) || length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <i
        className="icon ion-ios-arrow-back arrow arrow-left"
        onClick={() => prevImage()}
      ></i>
      {skills.map((skill, index) => {
        return (
          <div
            className={index === current ? "image active" : "image"}
            key={index}
          >
            {index === current && (
              <div>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="slider-image"
                />
                <p>{skill.name}</p>
              </div>
            )}
          </div>
        );
      })}
      <i
        className="icon ion-ios-arrow-forward arrow arrow-right"
        onClick={() => nextImage()}
      ></i>
    </div>
  );
};

export default ImageSlider;
