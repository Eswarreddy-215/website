import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ApplyJob = () => {
  const location = useLocation();
  const job = location.state;

  const [formData, setFormData] = useState({ name: "", email: "", education: "", resume: null });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("education", formData.education);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to apply: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Apply for {job.title}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} style={styles.input} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} style={styles.input} />
        <input type="text" name="education" placeholder="Education" required onChange={handleChange} style={styles.input} />
        <input type="file" name="resume" required onChange={handleChange} style={styles.fileInput} />
        <button type="submit" style={styles.button}>Submit Application</button>
      </form>
    </div>
  );
};

// Internal CSS
const styles = {
  container: { width: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", background: "#fff" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" },
  fileInput: { marginBottom: "10px" },
  button: { background: "#28a745", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default ApplyJob;
