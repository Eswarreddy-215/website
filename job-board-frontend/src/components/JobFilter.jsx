import React from "react";

const JobFilter = ({ setFilter }) => {
  const filterStyle = {
    margin: "10px 0",
  };

  return (
    <div style={filterStyle}>
      <input
        type="text"
        placeholder="Search jobs..."
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
};

export default JobFilter;
