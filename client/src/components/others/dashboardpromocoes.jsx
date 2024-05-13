import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPromotions = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Decodifica o token JWT manualmente para obter o ID do usuário
            const tokenParts = token.split('.');
            const payload = JSON.parse(atob(tokenParts[1]));
            const userId = payload.userId;
            console.log(userId); 
            setUserId(userId);
            setIsAuthenticated(true);
            console.log(userName); 


            // Faz uma chamada à API para obter o nome do usuário pelo ID
            axios.get(`http://localhost:3000/auth/${userId}/name`)
                .then(response => {
                    const userName = response.data.name;
                    setUserName(userName); // Define o nome do usuário no estado
                })
                .catch(error => {
                    console.error('Erro ao buscar nome do usuário:', error);
                });
        } else {
            // Se não houver token, redirecione para a página de login
            navigate('/login');
        }
    }, [navigate]);
    const handleLogout = () => {
        // Limpar dados de autenticação do usuário (por exemplo, token JWT) do armazenamento local
        localStorage.removeItem('token');
        // Redirecionar o usuário para a página de login
        navigate('/login');
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
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-50">
            Bem-vindo, {userName}!
          </h5>
          <section>
            <div className="py-16">
              <div className="mx-auto px-6 max-w-6xl text-gray-500">
                <div className="text-center">
                  <div className="w-full  max-w-[800px] mx-auto text-center flex flex-col justify-center  ">
                    <p className="md:text-5xl  text-4xl font-bold md:p-9 p-5  bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
                      Parceiros
                    </p>
                  </div>

                  <p className="mt-6 text-gray-500">
                  Conheça nossos parceiros incríveis que ajudam a impulsionar nosso sucesso. </p>

                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          className="text-[#000014] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 128 128"
                        >
                          <defs>
                            <linearGradient
                              id="deviconAstro0"
                              x1="882.997"
                              x2="638.955"
                              y1="27.113"
                              y2="866.902"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="currentColor"></stop>
                              <stop offset="1" stopColor="currentColor"></stop>
                            </linearGradient>
                            <linearGradient
                              id="deviconAstro1"
                              x1="1001.68"
                              x2="790.326"
                              y1="652.45"
                              y2="1094.91"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#ff1639"></stop>
                              <stop
                                offset="1"
                                stopColor="#ff1639"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#deviconAstro0)"
                            d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                          ></path>
                          <path
                            fill="#ff5d01"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                          <path
                            fill="url(#deviconAstro1)"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div
                    href="#"
                    className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.98em"
                          height="1em"
                          viewBox="0 0 256 263"
                        >
                          <defs>
                            <linearGradient
                              id="logosSupabaseIcon0"
                              x1="20.862%"
                              x2="63.426%"
                              y1="20.687%"
                              y2="44.071%"
                            >
                              <stop offset="0%" stopColor="#249361"></stop>
                              <stop offset="100%" stopColor="#3ecf8e"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosSupabaseIcon1"
                              x1="1.991%"
                              x2="21.403%"
                              y1="-13.158%"
                              y2="34.708%"
                            >
                              <stop offset="0%"></stop>
                              <stop offset="100%" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosSupabaseIcon0)"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="url(#logosSupabaseIcon1)"
                            fillOpacity="0.2"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="#3ecf8e"
                            d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.95em"
                          height="1em"
                          viewBox="0 0 256 271"
                        >
                          <defs>
                            <linearGradient
                              id="logosAngularIcon0"
                              x1="25.071%"
                              x2="96.132%"
                              y1="90.929%"
                              y2="55.184%"
                            >
                              <stop offset="0%" stopColor="#e40035"></stop>
                              <stop offset="24%" stopColor="#f60a48"></stop>
                              <stop offset="35.2%" stopColor="#f20755"></stop>
                              <stop offset="49.4%" stopColor="#dc087d"></stop>
                              <stop offset="74.5%" stopColor="#9717e7"></stop>
                              <stop offset="100%" stopColor="#6c00f5"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosAngularIcon1"
                              x1="21.863%"
                              x2="68.367%"
                              y1="12.058%"
                              y2="68.21%"
                            >
                              <stop offset="0%" stopColor="#ff31d9"></stop>
                              <stop
                                offset="100%"
                                stopColor="#ff5be1"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosAngularIcon0)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                          <path
                            fill="url(#logosAngularIcon1)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>
                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          className="text-[#000014] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 128 128"
                        >
                          <defs>
                            <linearGradient
                              id="deviconAstro0"
                              x1="882.997"
                              x2="638.955"
                              y1="27.113"
                              y2="866.902"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="currentColor"></stop>
                              <stop offset="1" stopColor="currentColor"></stop>
                            </linearGradient>
                            <linearGradient
                              id="deviconAstro1"
                              x1="1001.68"
                              x2="790.326"
                              y1="652.45"
                              y2="1094.91"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#ff1639"></stop>
                              <stop
                                offset="1"
                                stopColor="#ff1639"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#deviconAstro0)"
                            d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                          ></path>
                          <path
                            fill="#ff5d01"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                          <path
                            fill="url(#deviconAstro1)"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div
                    href="#"
                    className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.98em"
                          height="1em"
                          viewBox="0 0 256 263"
                        >
                          <defs>
                            <linearGradient
                              id="logosSupabaseIcon0"
                              x1="20.862%"
                              x2="63.426%"
                              y1="20.687%"
                              y2="44.071%"
                            >
                              <stop offset="0%" stopColor="#249361"></stop>
                              <stop offset="100%" stopColor="#3ecf8e"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosSupabaseIcon1"
                              x1="1.991%"
                              x2="21.403%"
                              y1="-13.158%"
                              y2="34.708%"
                            >
                              <stop offset="0%"></stop>
                              <stop offset="100%" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosSupabaseIcon0)"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="url(#logosSupabaseIcon1)"
                            fillOpacity="0.2"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="#3ecf8e"
                            d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.95em"
                          height="1em"
                          viewBox="0 0 256 271"
                        >
                          <defs>
                            <linearGradient
                              id="logosAngularIcon0"
                              x1="25.071%"
                              x2="96.132%"
                              y1="90.929%"
                              y2="55.184%"
                            >
                              <stop offset="0%" stopColor="#e40035"></stop>
                              <stop offset="24%" stopColor="#f60a48"></stop>
                              <stop offset="35.2%" stopColor="#f20755"></stop>
                              <stop offset="49.4%" stopColor="#dc087d"></stop>
                              <stop offset="74.5%" stopColor="#9717e7"></stop>
                              <stop offset="100%" stopColor="#6c00f5"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosAngularIcon1"
                              x1="21.863%"
                              x2="68.367%"
                              y1="12.058%"
                              y2="68.21%"
                            >
                              <stop offset="0%" stopColor="#ff31d9"></stop>
                              <stop
                                offset="100%"
                                stopColor="#ff5be1"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosAngularIcon0)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                          <path
                            fill="url(#logosAngularIcon1)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>
                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          className="text-[#000014] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 128 128"
                        >
                          <defs>
                            <linearGradient
                              id="deviconAstro0"
                              x1="882.997"
                              x2="638.955"
                              y1="27.113"
                              y2="866.902"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="currentColor"></stop>
                              <stop offset="1" stopColor="currentColor"></stop>
                            </linearGradient>
                            <linearGradient
                              id="deviconAstro1"
                              x1="1001.68"
                              x2="790.326"
                              y1="652.45"
                              y2="1094.91"
                              gradientTransform="scale(.1)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#ff1639"></stop>
                              <stop
                                offset="1"
                                stopColor="#ff1639"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#deviconAstro0)"
                            d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                          ></path>
                          <path
                            fill="#ff5d01"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                          <path
                            fill="url(#deviconAstro1)"
                            d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div
                    href="#"
                    className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.98em"
                          height="1em"
                          viewBox="0 0 256 263"
                        >
                          <defs>
                            <linearGradient
                              id="logosSupabaseIcon0"
                              x1="20.862%"
                              x2="63.426%"
                              y1="20.687%"
                              y2="44.071%"
                            >
                              <stop offset="0%" stopColor="#249361"></stop>
                              <stop offset="100%" stopColor="#3ecf8e"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosSupabaseIcon1"
                              x1="1.991%"
                              x2="21.403%"
                              y1="-13.158%"
                              y2="34.708%"
                            >
                              <stop offset="0%"></stop>
                              <stop offset="100%" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosSupabaseIcon0)"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="url(#logosSupabaseIcon1)"
                            fillOpacity="0.2"
                            d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                          ></path>
                          <path
                            fill="#3ecf8e"
                            d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div
                      aria-hidden="true"
                      className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                    ></div>
                    <div className="relative">
                      <div className="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.95em"
                          height="1em"
                          viewBox="0 0 256 271"
                        >
                          <defs>
                            <linearGradient
                              id="logosAngularIcon0"
                              x1="25.071%"
                              x2="96.132%"
                              y1="90.929%"
                              y2="55.184%"
                            >
                              <stop offset="0%" stopColor="#e40035"></stop>
                              <stop offset="24%" stopColor="#f60a48"></stop>
                              <stop offset="35.2%" stopColor="#f20755"></stop>
                              <stop offset="49.4%" stopColor="#dc087d"></stop>
                              <stop offset="74.5%" stopColor="#9717e7"></stop>
                              <stop offset="100%" stopColor="#6c00f5"></stop>
                            </linearGradient>
                            <linearGradient
                              id="logosAngularIcon1"
                              x1="21.863%"
                              x2="68.367%"
                              y1="12.058%"
                              y2="68.21%"
                            >
                              <stop offset="0%" stopColor="#ff31d9"></stop>
                              <stop
                                offset="100%"
                                stopColor="#ff5be1"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosAngularIcon0)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                          <path
                            fill="url(#logosAngularIcon1)"
                            d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                          ></path>
                        </svg>
                      </div>

                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700 dark:text-gray-300">
                          Amet praesentium deserunt ex commodi tempore fuga
                          voluptatem. Sit, sapiente.
                        </p>
                      </div>
                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <a
                          href="#"
                          download="/"
                          className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                        >
                          <span>Download</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
    

export default DashboardPromotions;

