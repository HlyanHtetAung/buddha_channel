import React from "react";
import PersonalDetail from "../components/PersonalDetail";
import Video from "../components/Video";
import "../styles/watchVideo.css";

function WatchVideo() {
  return (
    <div className="watchVideo">
      <Video />
      <PersonalDetail />
    </div>
  );
}

export default WatchVideo;
