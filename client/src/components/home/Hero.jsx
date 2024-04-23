import React from "react";
import { ReactTyped as Typed } from "react-typed";
import "../../styles-v2.css";
import QuillBot from "../images/quill.png";
import Notion from "../images/notion.png";
import AdCreative from "../images/fsf.png";
import Crowdfire from "../images/crowdfire.png";


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
           Potencialize com Inteligência Artificial!
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Apresentamos soluções para os problemas do cotidiano para indivíduos e para empresas que querem aumentar o seu desempenho com ajuda da Inteligência Artificial.
          </p>
          <button className="bg-[#097969] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Comece já
          </button>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="w-full  max-w-[800px] mx-auto text-center flex flex-col justify-center  ">
          <p className="md:text-5xl  text-4xl font-bold md:p-16 p-7  bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
            Parceiros
          </p>
        </div>

        <div className="w-full mx-auto text-center justify-center sm:flex ">
          <div className="p-10  md:w-auto">
            <img
              src={QuillBot}
              alt="QuillBot"
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4"
            />
            <h2 className="text-xl  pb-4 text-cyan-300">QuillBot</h2>
            <p className="font-bold text-gray-500">
              Enfrentando dificuldades com a criação de conteúdo? Supere o
              bloqueio criativo, as restrições de tempo e as variações de
              estilo. Descubra esta solução - a sua resposta para uma geração de
              conteúdo eficiente e de alta qualidade.
            </p>
          </div>
          <div className="p-10  md:w-auto">
            <img
              src={Notion}
              alt="Notion"
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4"
            />
            <h2 className="text-xl  pb-4 text-cyan-300">Notion</h2>
            <p className="font-bold text-gray-500">
            Notion é um espaço de trabalho conectado onde você cria documentos, faz anotações, gerencia tarefas e organiza o trabalho da sua vida — tudo em um só lugar.
            </p>
          </div>

          <div className="p-10  md:w-auto">
            <img
              src={AdCreative}
              alt="AdCreative"
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4"
            />
            <h2 className="text-xl  pb-4 text-cyan-300">AdCreative.ai</h2>
            <p className="font-bold text-gray-500">
            Automatização criativa de anúncios/banners através de Inteligência Artificial.
             Gere banners publicitários focados em conversões para publicidade paga. A plataforma criativa de anúncios mais comentada de 2024.
            </p>
          </div>

          <div className="p-10  md:w-auto">
            <img
              src={Crowdfire}
              alt="Crowdfire"
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4"
            />
            <h2 className="text-xl  pb-4 text-cyan-300">Crowdfire</h2>
            <p className="font-bold text-gray-500">
            Crowdfire é uma poderosa ferramenta de Gestão de Redes Sociais para marcas, empresas, agências e indivíduos em todo o mundo.
            </p>
          </div>

        
        </div>
      </div>

      <div class=" md:p-20 p-7 flex flex-col md:flex-row justify-center items-center md:items-start">
        <p class=" md:text-5xl sm:text-4xl text-3xl font-bold md:p-12 p-4 text-center md:text-left">
          <span class="text-gray-500">Potencial de </span>
          <span class="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600">
            Lucros
          </span>
        </p>
      </div>

      <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
    <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
    <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Hero;
