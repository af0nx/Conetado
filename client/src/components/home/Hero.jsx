import React from "react";
import { ReactTyped as Typed } from "react-typed";
import '../../styles-v2.css'; 



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
            Invista, ganhe e explore o mundo!
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            A nova era da criptomoeda, transformando investimentos com segurança
            e inovação tecnológica.
          </p>
          <button className="bg-[#097969] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Comece já
          </button>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <p className="md:text-2xl text-2xl font-bold text-gray-900 pt-4 md:pt-10">
              A MadeiraCoin é usada por:
            </p>
          </div>

        </div>
      </div>
      <div className="bg-gray-900">
        <div className="w-full  max-w-[800px] mx-auto text-center flex flex-col justify-center  ">
          <p className="md:text-5xl  text-4xl font-bold md:p-16 p-7  bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
            Porque escolher-nos?
          </p>
        </div>

        <div className="w-full mx-auto text-center justify-center sm:flex ">
          <div className="p-10  md:w-auto">
            

            <h2 className="text-xl font-bold pb-4 text-green-300">Segurança</h2>
            <p className="font-bold text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              ligula id ipsum ultricies dictum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sedeget ligula id ipsum ultricies
              dictum.
            </p>
          </div>
          <div className="p-10  md:w-auto">
           
            <h2 className="text-xl font-bold pb-4 text-green-300">Rapidez</h2>
            <p className="font-bold text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              ligula id ipsum ultricies dictum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sedeget ligula id ipsum ultricies
              dictum.
            </p>
          </div>
          <div className="p-10  md:w-auto">
            
            <h2 className="text-xl font-bold pb-4 text-green-300">Inovação</h2>
            <p className="font-bold text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              ligula id ipsum ultricies dictum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sedeget ligula id ipsum ultricies
              dictum.
            </p>
          </div>
          <div className="p-10  md:w-auto">
           
            <h2 className="text-xl font-bold pb-4 text-green-300">
              Comunidade
            </h2>
            <p className="font-bold text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeget
              ligula id ipsum ultricies dictum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sedeget ligula id ipsum ultricies
              dictum.
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
      <div className="w-full  max-w-[800px] mx-auto text-center flex flex-col justify-center  ">
          <p className="md:text-5xl  text-4xl font-bold md:p-16 p-7  bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600 ">
            Como Começar
          </p>
        </div>

     <div className="bg-gray-900 flex">
  <div className="flex justify-center w-1/3">
    <div className="texto">
      <div className="md:p-20 p-7 flex flex-col justify-center">
        <h2 className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-clip-text text-transparent bg-gradient-to-br text-cyan-600">
          01. Escolha sua carteira
        </h2>
        <p className="font-bold text-gray-500 md:p-20 p-7">
          Uma carteira é necessária para quem quer usar, negociar ou manter Dogecoin. Você pode escolher uma carteira.
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center w-1/3">
    <div></div>
    <div className="texto">
      <div className="md:p-20 p-7 flex flex-col justify-center">
        <h2 className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600">
          02. Configure sua carteira
        </h2>
        <p className="font-bold text-gray-500 md:p-20 p-7">
          Após o download, você pode configurar sua carteira de acordo com nosso
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center w-1/3">
    <div className="texto">
      <div className="md:p-20 p-7 flex flex-col justify-center">
        <h2 className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-600">
          03. Obtenha algum Dogecoin
        </h2>
        <p className="font-bold text-gray-500 md:p-20 p-7">
          Existem muitas maneiras de conseguir algumas Dogecoin.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;