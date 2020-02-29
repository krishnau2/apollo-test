import React from "react";

const Transcript = ({ data }) => {
  const rowClass = index => {
    return index % 2 === 0 ? "first-person" : "second-person";
  };

  const rowStartTime = index => {
    return data.word_timings[index][0].startTime;
  };

  const renderTrnascriptRows = () => {
    return data.transcript_text.map((rowText, i) => {
      return (
        <div className={`transcript-row ${rowClass(i)}`}>
          <div className="transcript-time">{rowStartTime(i)}</div>
          <div className="transcript-text">{rowText}</div>
        </div>
      );
    });
  };

  return <div className="transcript-wrap">{renderTrnascriptRows()}</div>;
};

export default Transcript;
