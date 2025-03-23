const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Default MySQL user in XAMPP
    password: '',  // If you have a password, add it here
    database: 'jobboard'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL Database!");
});

// Signup API
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) {
            console.error("Signup Error:", err);
            return res.status(500).json({ error: "Signup failed" });
        }
        res.status(200).json({ message: "Signup successful" });
    });
});

// Start Server
app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});
