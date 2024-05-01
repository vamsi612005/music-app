import React, { useState } from 'react';
import axios from 'axios';
import './css/Signup.css';
import { useHistory } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = {};

    if (!username) {
      validationErrors.username = 'Please enter a username';
    }

    if (!email) {
      validationErrors.email = 'Please enter an email';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      validationErrors.password = 'Please enter a password';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Update the errors state
    setErrors(validationErrors);

    // Submit the form if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      try {
        const userData = { username, email, password };
        const response = await axios.post('http://localhost:2222/register', userData);
        console.log('User registered:', response.data);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
      } catch (error) {
        console.error('Error registering user:', error);
      }
      navigate.push('/Signin')
    }

    
    
  };

  return (
    <div style={{ textAlign: 'center' }} className='card'>
      <h1>SIGN UP</h1> <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label> <br /> <br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <br />
        <div>
          <label>Email:</label> <br /> <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <br />
        <div>
          <label>Password:</label> <br /> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <br />
        <div>
          <label>Confirm Password:</label> <br /> <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br/>
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          <br />
        </div>
        <button type="submit">Submit</button>
      </form><br />
      <p>Signed in?/Have an account?</p>
      <a href="/Signin">Sign in</a>
    </div>
  );
};

export default Signup;