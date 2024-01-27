import React from "react";

const Qualification = ({ major, university, fromYear, toYear }) => {
  return (
    <div className="qualification">
      <h3>{major}</h3>
      <p>{university}</p>
      <p>
        {fromYear} - {toYear}
      </p>
    </div>
  );
};

export default Qualification;
