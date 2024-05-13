import axios from 'axios'; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import logoImg from "../images/logo.png";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Obtenha a função de navegação

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/auth/registro', // Rota de registro agora está no diretório raiz
                { name, email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(response.data);
            alert("Data saved successfully");
            setName("");
            setEmail("");
            setPassword("");
            
            // Após o registro bem-sucedido, redirecione o usuário para a página de login
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        alert("Missing required fields");
                        break;
                    case 409:
                        alert("Email already exists");
                        break;
                    default:
                        alert("Something went wrong");
                }
            } else {
                alert("Network error");
            }
        }
    };

    return (
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src={logoImg} alt=""></img>
          </div>
  
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bem-Vindo a Conetado</h3>
  
          <p className="mt-1 text-center text-gray-600 dark:text-gray-200">Registro </p>
  
          <form onSubmit={handleOnSubmit}>
          <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="name" placeholder="Nome" aria-label="Name"  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
  
              <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email " aria-label="Email" ovalue={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
  
              <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
  
              <div className="flex items-center justify-between mt-4">
                  <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleOnSubmit}>
                    Registrar
                  </button>
              </div>
          </form>
      </div>
  
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">Tens conta? </span>
  
          <a href="/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</a>
      </div>
  </div>
    );
  };
  
  export default Register;