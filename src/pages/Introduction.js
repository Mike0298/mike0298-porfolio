import React, { useEffect } from "react";
import "./Introduction.css";

import NavButton from "../components/navButton/navButton";
import ImageSlider from "../components/ImageSlider/imageSlider";
import { useSelector } from "react-redux";

const Introduction = () => {
  useEffect(() => {
    document.title = "Mike0298 | About Me";
    window.scrollTo(0, 0);
  }, []);

  const skillData = useSelector((state) => {
    return state.data.skillData;
  });

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <img
            src="https://cdn.pro-bel.com/wp-content/uploads/2019/11/blank-avatar-1.png"
            alt="me"
          />
        </div>
        <div className="right">
          <div className="introduction">
            <div className="name">I'm Hieu, I'm a</div>
            <div className="effect-container">
              <div className="typing-animation">Junior Developer</div>
            </div>
          </div>
          <div className="paragraph">
            An university graduate who is looking for an internship or a junior
            position in IT industry. Have university experience in both web
            development and software development. Easy to adapt to any workspace
            and willing to learn new technologies required to do the work.
          </div>
          <div className="skill">
            <h2>I have experience with</h2>
            <ImageSlider skills={skillData} />
            <p>There are still more to learn!</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <NavButton page="education" text="Education" />
      </div>
    </div>
  );
};

export default Introduction;
