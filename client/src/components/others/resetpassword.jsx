import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PasswordResetForm() {
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        // Extract token from URL path
        const tokenFromUrl = window.location.pathname.split('/').pop();

        // Log the token to verify
        console.log("Token from URL:", tokenFromUrl);

        // Set token in component state
        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        }
    }, []); // Empty dependency array ensures this effect runs only once

    const handleResetPassword = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`http://localhost:3000/auth/reset-password/${token}`, { newPassword });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    
    return (
        <div>
            <h2>Redefinir Senha</h2>
            <form onSubmit={handleResetPassword}>
                <div>
                    <label htmlFor="newPassword">Nova Senha:</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Redefinir Senha</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PasswordResetForm;
