import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/apply/${job.id}`, { state: job });
  };

  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p>{job.description}</p>
      <button onClick={handleApply} style={styles.button}>Apply Here</button>
    </div>
  );
};

// Internal Styles
const styles = {
  card: { padding: "15px", border: "1px solid #ddd", borderRadius: "8px", margin: "10px", background: "#fff" },
  button: { background: "#007bff", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default JobCard;
