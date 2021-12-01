import React, { useState } from "react";
import "./imageSlider.scss";

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
        className="icon ion-ios-arrow-back slider__arrow"
        onClick={() => prevImage()}
      ></i>
      {skills.map((skill, index) => {
        return (
          <div
            className={
              index === current
                ? "slider__image slider__image--active"
                : "image"
            }
            key={index}
          >
            {index === current && (
              <div>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="slider__image__slider-image"
                />
                <p>{skill.name}</p>
              </div>
            )}
          </div>
        );
      })}
      <i
        className="icon ion-ios-arrow-forward slider__arrow"
        onClick={() => nextImage()}
      ></i>
    </div>
  );
};

export default ImageSlider;
