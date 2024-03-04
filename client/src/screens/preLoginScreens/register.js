import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Additional validation logic can be added here

    const newUser = {
      username,
      email,
      password,
    };

    localStorage.setItem('userData', JSON.stringify(newUser));

    usernameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';

    alert('Registration Successful!');
  };

  return (
    <div style={styles.registerContainer}>
      <h2 style={styles.header}>Register Page</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input type="text" id="username" ref={usernameRef} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" ref={emailRef} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input type="password" id="password" ref={passwordRef} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
          <input type="password" id="confirmPassword" ref={confirmPasswordRef} style={styles.input} required />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p style={styles.loginLink}>Already have an account?<br/> <Link to="/"><b>Login here</b></Link></p>
    </div>
  );
};

const styles = {
  registerContainer: {
    maxWidth: '400px',
    margin: "30px auto 0", 
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#bde0fe',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '26px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
  },
  loginLink: {
    textAlign: 'center',
  },
};

export default RegisterForm;
