import axios from 'axios';
import { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/auth/forgot-password',
                { email },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setMessage(response.data.message);
            
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to send password reset email');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ForgotPassword;
