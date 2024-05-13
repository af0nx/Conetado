import Analise from "../images/analise.png";
import Pessoa from "../images/pessoa.jpg";


const Blog = () => {

    return (
<div className=" bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
                <img
              src={Analise}
              alt="Analise"
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            />

                <div>
                    <p className="mt-6 text-sm text-blue-500 uppercase"> Empresa de análise de dados</p>

                    <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Empresa de análise de dados utiliza IA para identificar potenciais criptomoedas promissoras
                    </h1>

                    <div className="flex items-center mt-6">
                       <img
              src={Pessoa}
              alt="Pessoa"
              className="object-cover object-center w-10 h-10 rounded-full"
            />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Ruben Dias</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 className="text-blue-500 capitalize">Aumentar Valores</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Ganhe dinheiro com a sua informação
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">Descobertas da Medicina</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    Avanço na Inteligência Artificial promete acelerar descobertas na área da medicina
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">Ajuda no Ecossistema</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    Aplicativo de IA ajuda a identificar espécies de plantas a partir de fotos
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">Depressão nas redes sociais</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    Algoritmo de IA detecta sinais precoces de depressão em redes sociais

                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"></hr>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">categoria</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    IA de Previsão
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Pesquisadores utilizam redes neurais para prever comportamento dos preços das criptomoedas com alta precisão

                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 2, 2024</p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">categoria</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Criptomoeda baseada em IA</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Criptomoeda baseada em IA lança plataforma de empréstimo descentralizado
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Arthur Melo
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 7, 2024</p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">categoria</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    Novo bot de ChatGPT
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Novo modelo de linguagem GPT alcança pontuações recordes em tarefas de compreensão de texto

                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Tom Hank
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 11, 2024</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  };
  
  export default Blog;