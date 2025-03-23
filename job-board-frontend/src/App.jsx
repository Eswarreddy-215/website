import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import JobCard from "./components/JobCard";
import ApplyJob from "./pages/ApplyJob";

const App = () => {

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", description: "React, JavaScript, HTML, CSS" },
    { id: 2, title: "Backend Developer", company: "Web Solutions", location: "New York", description: "Node.js, Express, MongoDB" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job" element={jobs.map(job => <JobCard key={job.id} job={job} />)} />
          <Route path="/apply/:id" element={<ApplyJob />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
