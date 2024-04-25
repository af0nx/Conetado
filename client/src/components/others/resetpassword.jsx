import React, { useState } from 'react';
import axios from 'axios';

function PasswordResetForm() {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

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
                    <label htmlFor="token">Token:</label>
                    <input
                        type="text"
                        id="token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </div>
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
