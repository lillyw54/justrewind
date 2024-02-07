import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from './graphql/mutations';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signup({
        variables: { email, password },
      });

      console.log('Signup successful', data);
      // Redirect to the desired page or perform any other actions
    } catch (error) {
      console.log('Error signing up', error);
      // Display an error message or perform any other actions
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default SignupForm;