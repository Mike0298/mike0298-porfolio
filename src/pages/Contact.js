import React, { useEffect } from "react";
import "./Contact.css";
import discord from "../assets/discord.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
  useEffect(() => {
    document.title = "Mike0298 | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container">
      <div className="title">Contact Me</div>
      <div className="details">
        <h1>General Details</h1>
        <div className="details-container">
          <div className="details-item">
            <span>Name:</span>
            <p>Hieu Duc Pham</p>
          </div>
          <div className="details-item">
            <span>Phone Number:</span>
            <p>(+61)403545979</p>
          </div>
          <div className="details-item">
            <span>Email:</span>
            <p>hieuducpham2016@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="details">
        <h1>Other Media</h1>
        <div className="details-item icon">
          <div>
            <a
              href="https://www.linkedin.com/in/hieu-pham-9a82a6174/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <p>Hieu Pham</p>
          </div>
          <div>
            <a
              href="https://github.com/Mike0298"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <p>Mike0298</p>
          </div>
          <div>
            <img src={discord} alt="discord" />
            <p>大鳳#7777</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <a
          href="https://drive.google.com/file/d/16LobGflfcQtnz_Zmd2TQouMLnahhteaw/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          View my Resume
          <i className="icon ion-ios-document"></i>
        </a>
        <a
          href="https://Mike0298.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          View code on<i className="icon ion-logo-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
