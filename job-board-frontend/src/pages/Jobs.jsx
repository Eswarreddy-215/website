import React from "react";
import JobCard from "../components/JobCard";

const jobData = [
  { title: "Frontend Developer", company: "Google", location: "Remote" },
  { title: "Backend Developer", company: "Amazon", location: "New York" },
];

const Jobs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>
      {jobData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
