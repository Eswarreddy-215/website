import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>JobPortal</h2>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/jobs" style={styles.link}>Jobs</Link>
        </li>
        
        {/* Product Dropdown */}
        <li style={styles.dropdown}>
          <span onClick={toggleDropdown} style={styles.dropdownBtn}>
            Products ▼
          </span>
          {dropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li><Link to="/job-categories" style={styles.link}>Job Categories</Link></li>
              <li><Link to="/resume-builder" style={styles.link}>Resume Builder</Link></li>
              <li><Link to="/interview-tips" style={styles.link}>Interview Tips</Link></li>
              <li><Link to="/salary-guide" style={styles.link}>Salary Guide</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/services" style={styles.link}>Services</Link>
        </li>
        <li>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li>
          <Link to="/signup" style={styles.signupBtn}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

// Internal CSS
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    padding: "5px 10px",
  },
  signupBtn: {
    backgroundColor: "#28a745",
    padding: "8px 12px",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#fff",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  },
  dropdownBtn: {
    cursor: "pointer",
    padding: "5px 10px",
  },
  dropdownMenu: {
    position: "absolute",
    top: "30px",
    left: "0",
    backgroundColor: "#444",
    listStyle: "none",
    padding: "10px",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    minWidth: "150px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
};

export default Navbar;
