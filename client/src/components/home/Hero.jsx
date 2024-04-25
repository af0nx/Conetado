import React from "react";
import { ReactTyped as Typed } from "react-typed";
import "../../styles-v2.css";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center">
        <div className="text-white mt-96px h-screen flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600"
              strings={[
                "Welcome!",
                "Bem-vindo!",
                "Willkommen!",
                "Bienvenido!",
                "歡迎",
                "Bienvenue!",
                "Benvenuto!",
              ]}
              typeSpeed={160}
              backSpeed={140}
              loop
            />
          </div>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
            Ao Presente e ao Futuro
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Explorando o Presente e Moldando o Futuro da Tecnologia Juntos.
          </p>
          <button
            className="bg-[#097969] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
            onClick={() => (window.location.href = "/blog")}
          >
            Comece já
          </button>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              Add some nice touches to your interface with our latest designs,
              components, and templates. We've crafted a beautiful user
              experience that your visitors will love.{" "}
            </p>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-011.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Drag-n-drop design
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Design Made Easy
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Crafting your user experience has never been easier, with our
                intuitive drag'n drop interface you will be creating beatiful
                designs in no time.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                className="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-04.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                know your data
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Optimized For Conversions
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Backed by data, these templates have been crafted for ultimate
                optimization. Now, converting your visitors into customers is
                easier than ever before.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Easy to customize
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Make It Your Own
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                All templates and components are fully customizable. You can use
                these templates to tell your personal story and convey your
                message.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <div className=" md:p-20 p-7 flex flex-col md:flex-row justify-center items-center md:items-start">
          <p className=" md:text-5xl sm:text-4xl text-3xl font-bold md:p-12 p-4 text-center md:text-left">
            <span className="text-gray-500">Vantagens de </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600">
              Leitura
            </span>
          </p>
        </div>
        <div className="w-full ">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-gray-900 border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-50">
                      Visão geral da indústria
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-500">
                    Blogs de IA muitas vezes cobrem notícias e eventos
                    importantes na indústria de tecnologia e IA. Isto pode
                    ajudar-te a entender o panorama geral e as tendências de
                    mercado.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-gray-900 border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-50">
                      Atualizações sobre as últimas tendências
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-500">
                    Os blogs de IA geralmente cobrem as últimas pesquisas,
                    desenvolvimentos e tendências no campo. Isso permite que
                    fiques atualizado com as mais recentes inovações e avanços.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-gray-900 border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-50">
                      Aprendizagem contínua
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-500">
                    Estes blogs muitas vezes oferecem insights detalhados sobre
                    algoritmos, técnicas de aprendizagem de máquina, redes
                    neurais e outras áreas relacionadas com IA. Ao leres
                    regularmente estes blogs, podes expandir os teus
                    conhecimentos e habilidades na área.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-gray-900 border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-50">
                      Partilha de melhores práticas
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-500">
                    Profissionais experientes muitas vezes partilham as suas
                    melhores práticas, dicas e truques em blogs de IA. Isto pode
                    ajudar-te a evitar armadilhas comuns e aprimorar as tuas
                    habilidades de desenvolvimento de IA.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-gray-900 border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-50">
                      Inspiração
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-500">
                    Ler sobre os avanços emocionantes e os projetos inovadores
                    em IA pode inspirar novas ideias e abordagens para os teus
                    próprios projetos e pesquisas.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
    Alguns dos nossos parceiros podem ser encontrados <a href="/parceiros" className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600">aqui</a></p>

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
    </div>
  );
};

export default Hero;
