import React from "react";
import "../styles/Posters.css";
import Poster from "./Poster";

function Posters() {
  const array1 = [12, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <div className="posters">
      <h2 className="categoryName">အမျိုးအစားအမည်</h2>
      <div className="postersContainer">
        {array1.map((video, index) => (
          // Fetch  videos
          <Poster key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Posters;
