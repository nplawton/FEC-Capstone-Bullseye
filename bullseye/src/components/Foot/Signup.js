import React, { useState } from 'react';
import SignupCSS from './Signup.module.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to the server for processing
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // Display a success message to the user
      alert('You have successfully signed up!');
    } else {
      // Display an error message to the user
      alert('Failed to sign up. Please try again later.');
    }
  };

  return (
    <div className={SignupCSS.container}>
      <span >
        <h3 >Get top deals, latest trends, and more.</h3>
      </span>
    <form onSubmit={handleSubmit}>
      <label>
        {/* Email: */}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit" className={SignupCSS.btn}>
        Sign Up
        </button>
        <span>Privacy policy</span>
    </form>
    </div>
  );
}



export default SignUp;