import React from "react";
import {
  MdRotateLeft,
  MdRotateRight,
  MdPauseCircleFilled
} from "react-icons/md";

const Main = () => {
  return (
    <div className="container">
      <div className="audio-control-wrap">
        <div className="audio-controls">
          <MdRotateLeft className="rotate-btn" />
          <MdPauseCircleFilled className="pause-btn" />
          <MdRotateRight className="rotate-btn" />
        </div>
        <button className="play-speed-btn">1.0x</button>
      </div>
      <div className="graph-wrap"></div>
      <div className="transcript-wrap"></div>
    </div>
  );
};

export default Main;
