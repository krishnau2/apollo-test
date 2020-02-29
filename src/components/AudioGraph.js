import React from "react";

const AudioGraph = ({ word_timings }) => {
  const renderBarElement = words => {
    return words.map(word => {
      return <span className="bar"></span>;
    });
  };

  return (
    <div className="graph-container">
      <div className="graph-row first">
        <div className="graph-name">54% You</div>
        <div className="graph">{renderBarElement(word_timings[0])}</div>
      </div>
      <div className="seperator"></div>
      <div className="graph-row second">
        <div className="graph-name">46% MICHAEL B.</div>
        <div className="graph offset">{renderBarElement(word_timings[1])}</div>
      </div>
    </div>
  );
};

export default AudioGraph;
