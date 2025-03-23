const express = require("express");
const db = require("../config/db");
const router = express.Router();

// Get all jobs
router.get("/jobs", (req, res) => {
  db.query("SELECT * FROM jobs", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Apply for a job
router.post("/apply", (req, res) => {
  const { user_id, job_id, name, email, education, resume } = req.body;
  const sql = "INSERT INTO applications (user_id, job_id, name, email, education, resume) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [user_id, job_id, name, email, education, resume], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Application submitted successfully!" });
  });
});

module.exports = router;
