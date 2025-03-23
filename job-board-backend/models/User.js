const db = require("../config/db");

const User = {
    create: (userData, callback) => {
        const { name, email, password } = userData;
        db.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password],
            callback
        );
    },

    findByEmail: (email, callback) => {
        db.query("SELECT * FROM users WHERE email = ?", [email], callback);
    }
};

module.exports = User;
