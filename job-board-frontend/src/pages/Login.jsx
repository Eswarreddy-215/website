import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} style={styles.input} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.text}><a href="/forgot-password" style={styles.link}>Forgot Password?</a></p>
        <p style={styles.text}>Don't have an account? <a href="/signup" style={styles.link}>Sign up</a></p>
      </div>
    </div>
  );
};

// Internal CSS
const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" },
  card: { background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", width: "350px" },
  title: { marginBottom: "1rem", color: "#333" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" },
  button: { background: "#28a745", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
  buttonHover: { background: "#218838" },
  text: { marginTop: "10px", fontSize: "14px" },
  link: { color: "#007bff", textDecoration: "none" },
  error: { color: "red", marginBottom: "10px" },
};

export default Login;
