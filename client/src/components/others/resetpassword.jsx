import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordElement = ({ token }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        try {
            // Verifique se as senhas coincidem
            if (newPassword !== confirmPassword) {
                setMessage('As senhas não coincidem');
                return;
            }

            // Envie uma solicitação POST com a nova senha e o token
            const response = await axios.post(`http://localhost:3000/auth/reset-password/${token}`, { newPassword });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Redefinir Senha</h2>
            <div>
                <label htmlFor="new-password">Nova Senha:</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirm-password">Confirmar Nova Senha:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handleResetPassword}>Redefinir Senha</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPasswordElement;
