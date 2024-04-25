import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            `http://localhost:3000/auth/reset-password/${token}`,
            { newPassword },
            { headers: { 'Content-Type': 'application/json' } }
        );
        setMessage(response.data.message);
    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to reset password');
    }
};
  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
