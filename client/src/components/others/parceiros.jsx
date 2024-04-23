import QuillBot from "../images/quill.png";
import Notion from "../images/notion.png";
import AdCreative from "../images/fsf.png";
import Crowdfire from "../images/crowdfire.png";

const Parceiros = () => {
  return (
    <div>
      <div className="p-10  md:w-auto">
        <img
          src={QuillBot}
          alt="QuillBot"
          className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4"
        />
        <h2 className="text-xl  pb-4 text-cyan-300">QuillBot</h2>
        <p className="font-bold text-gray-500">
          Enfrentando dificuldades com a criação de conteúdo? Supere o bloqueio
          criativo, as restrições de tempo e as variações de estilo. Descubra
          esta solução - a sua resposta para uma geração de conteúdo eficiente e
          de alta qualidade.
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
          Notion é um espaço de trabalho conectado onde você cria documentos,
          faz anotações, gerencia tarefas e organiza o trabalho da sua vida —
          tudo em um só lugar.
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
          Automatização criativa de anúncios/banners através de Inteligência
          Artificial. Gere banners publicitários focados em conversões para
          publicidade paga. A plataforma criativa de anúncios mais comentada de
          2024.
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
          Crowdfire é uma poderosa ferramenta de Gestão de Redes Sociais para
          marcas, empresas, agências e indivíduos em todo o mundo.
        </p>
      </div>
    </div>
  );
};

export default Parceiros;
