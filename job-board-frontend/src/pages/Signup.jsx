import React, { useState } from "react";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Create an Account</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required style={styles.input} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
                    
                    <button type="submit" style={styles.button}>Sign Up</button>

                    <p style={styles.text}>
                        Already have an account? <a href="/login" style={styles.link}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4"
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "350px"
    },
    heading: {
        marginBottom: "20px",
        fontSize: "22px",
        color: "#333"
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontSize: "16px"
    },
    button: {
        padding: "12px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "0.3s"
    },
    buttonHover: {
        backgroundColor: "#0056b3"
    },
    text: {
        marginTop: "10px",
        fontSize: "14px",
        color: "#666"
    },
    link: {
        color: "#007BFF",
        textDecoration: "none",
        fontWeight: "bold"
    }
};

export default Signup;
