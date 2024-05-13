import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboards = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decodifica o token JWT manualmente 
      const tokenParts = token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));
      const userId = payload.userId;
      console.log(userId);
      setUserId(userId);
      setIsAuthenticated(true);
      console.log(userName);

      // Faz uma chamada à API para obter o nome do usuário pelo ID
      axios
        .get(`http://localhost:3000/auth/${userId}/name`)
        .then((response) => {
          const userName = response.data.name;
          setUserName(userName); // Define o nome do usuário no estado
        })
        .catch((error) => {
          console.error("Erro ao buscar nome do usuário:", error);
        });
    } else {
      // Se não houver token, redirecione para a página de login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpar dados de autenticação do usuário (por exemplo, token JWT) do armazenamento local
    localStorage.removeItem("token");
    // Redirecionar o usuário para a página de login
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 ">
      <nav className=" bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Conetado
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Abir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/servicosai"
                  className="block py-2 px-3 text-gray-50  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Serviços AI
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/promocoes"
                  className="block py-2 px-3 text-gray-50  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Promoções
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/perfil"
                  className="block py-2 px-3 text-gray-50  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Perfil
                </a>
              </li>

              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center">

        <br /> <br />
        <div className="max-w-2xl mx-auto text-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo ao Dashboard da AI Conetado, {userName}!</h1> <br /> <br />
      <p className="text-lg mb-4">Navegue pela inteligência artificial de última geração com o Dashboard da AI Conetado. Aqui você terá acesso a uma variedade de recursos e ferramentas para potencializar sua jornada na área da inteligência artificial.</p>
      <br /> <br /> <br />
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Principais Recursos:</h2>
        <br /> 
        <ul className="list-disc pl-6">
          <li>Explore uma vasta coleção de modelos pré-treinados para diferentes tarefas de aprendizado de máquina, desde classificação até geração de texto.</li>
          <li>Experimente diferentes algoritmos e hiperparâmetros de forma ágil e eficiente, com nossa interface intuitiva de experimentação.</li>
          <li>Acompanhe o desempenho dos seus modelos em tempo real, com métricas e visualizações claras e detalhadas.</li>
          <li>Compartilhe projetos, resultados e insights com colegas de equipe de forma rápida e segura, facilitando a colaboração em projetos de inteligência artificial.</li>
          <li>Conte com o suporte especializado da equipe da AI Conetado sempre que precisar, para orientações, resolução de problemas e muito mais.</li>
        </ul>
      </div>
      <br /> <br />
      <p className="text-lg mb-6">Comece já a explorar o futuro da inteligência artificial com o Dashboard da AI Conetado!</p>
    </div>
      </div>
    </div>
  );
};

export default Dashboards;

//https://tailwindcomponents.com/component/sidebar-by-material-tailwind
