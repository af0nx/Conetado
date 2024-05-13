import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoImg from "../images/logo.png";
import GoogleLoginButton from './GoogleLoginButton .jsx'; // Importe o componente GoogleLoginButton

const Logins = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
      
    } catch (error) {
      console.error('Erro:', error);
      if (error.response) {
        switch (error.response.status) {
          case 404:
            setError("Usuário não encontrado.");
            break;
          case 401:
            setError("Credenciais inválidas.");
            break;
          default:
            setError("Algo deu errado.");
        }
      } else {
        setError("Erro de rede.");
      }
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src={logoImg} alt="" />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bem-Vindo a Conetado</h3>

        <p className="mt-1 text-center text-gray-600 dark:text-gray-200">Login </p>

        <form onSubmit={handleOnSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Endereço de Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value) } required 
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <a href="/password" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Esqueces-te da Password?</a>
            

            <button
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
                    {/* Adicione o botão de login do Google */}
            <GoogleLoginButton />
            
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Não tens conta? </span>
        <a href="/registro" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Registro</a>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Logins;
