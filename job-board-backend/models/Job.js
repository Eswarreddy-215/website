const db = require("../config/db");

const Job = {
    createJob: (jobData, callback) => {
        const { title, company, location, description } = jobData;
        db.query(
            "INSERT INTO jobs (title, company, location, description) VALUES (?, ?, ?, ?)",
            [title, company, location, description],
            callback
        );
    },

    getAllJobs: (callback) => {
        db.query("SELECT * FROM jobs", callback);
    },

    getJobById: (id, callback) => {
        db.query("SELECT * FROM jobs WHERE id = ?", [id], callback);
    }
};

module.exports = Job;
