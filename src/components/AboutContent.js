import React from "react";
import "../styles/AboutContent.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

function AboutContent({ fact }) {
  return (
    <div className="about__content">
      <DoubleArrowIcon className="about__arrowIcon" />
      <p>{fact}</p>
    </div>
  );
}

export default AboutContent;
