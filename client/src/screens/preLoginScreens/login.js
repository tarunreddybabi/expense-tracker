import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const LoginScreen = ({ setLoggedIn }) => {
  const [error, setError] = useState("");
  const userInputRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();

    const userInput = userInputRef.current.value;
    const password = passwordRef.current.value;

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      (userData.username === userInput || userData.email === userInput) &&
      userData.password === password
    ) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container} >
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="userInput" style={styles.label}>
            Username or Email:
          </label>
          <input
            type="text"
            id="userInput"
            ref={userInputRef}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            style={styles.input}
            required
          />
        </div>
        {error && (
          <div className="error" style={styles.error}>
            {error}
          </div>
        )}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.registerLink}>
        Don't have an account? <br />{" "}
        <Link to="/register">
          <b>Register here</b>
        </Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    height: "400px",
    margin: "30px auto 0", 
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#ffd7ba",
  },
  header: {
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "26px",
  },
  form: {
    marginBottom: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  registerLink: {
    textAlign: "center",
  },
};

export default LoginScreen;
