import React from "react";

import AudioControl from "./AudioControl";
import Transcript from "./Transcript";
import data from "../data";

const Main = () => {
  return (
    <div className="container">
      <AudioControl />
      <div className="audio-timeline-wrap">
        <div className="timer">
          <span className="current-time">04:23</span>
          <span className="total-time">/ 18:03</span>
        </div>
        <div className="graph-container">
          <div className="graph-row">
            <div className="graph-name"></div>
            <div className="graph">
              <div className="graph-block ">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <div className="graph-block offset">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transcript data={data} />
    </div>
  );
};

export default Main;
