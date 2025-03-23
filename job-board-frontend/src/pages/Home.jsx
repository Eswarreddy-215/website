import React from "react";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={homeStyle}>
      <h1>Welcome to the Job Board</h1>
      <p>Find your dream job or post new opportunities.</p>
    </div>
  );
};

export default Home;
