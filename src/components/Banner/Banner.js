import React from "react";
import "./Banner.css";

const Banner = ({name}) => {
  return (
  <div className="banner-bg">
      <h1 className="banner-name">{name}</h1>
  </div>
  );
};

export default Banner;
