import React, { useState, useEffect } from "react";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/applications")
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(error => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div>
      <h2>Job Applications</h2>
      {applications.length === 0 ? <p>No applications found</p> : (
        <ul>
          {applications.map((app, index) => (
            <li key={index}>
              <strong>Name:</strong> {app.name} | <strong>Email:</strong> {app.email} | <strong>Education:</strong> {app.education}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Applications;
