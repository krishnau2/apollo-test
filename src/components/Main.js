import React from "react";

import AudioControl from "./AudioControl";
import Transcript from "./Transcript";
import AudioGraph from "./AudioGraph";
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
        <AudioGraph word_timings={data.word_timings} />
      </div>
      <Transcript data={data} />
    </div>
  );
};

export default Main;
