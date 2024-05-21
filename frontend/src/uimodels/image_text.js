import React from "react";
import "../App.css";

const ContentContainer = ({ imageSrc, title, text }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={imageSrc} alt="Description" />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContentContainer;
