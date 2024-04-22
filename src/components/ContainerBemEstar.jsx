import Imagem1 from '../images/bem-estar.jpg';
import '../styles/index.css';

export default function ContainerBemEstar() {
  return (
    <div className="flex flex-col lg:flex-row bg-mostarda h-auto lg:h-96">
      <div className="flex flex-col justify-center px-6 py-10 lg:px-20">
        <div className="title">Bem-Estar na Era Digital</div>
        <p className="text-white text-lg mt-4 mainfont">
          A tecnologia desempenha um papel crucial em nosso bem-estar, facilitando
          o acesso a informações, promovendo a comunicação e oferecendo soluções
          inovadoras para melhorar nossa qualidade de vida.
        </p>

        <p className="text-white text-lg mt-4 py-1 mainfont">
          A tecnologia desempenha um papel crucial em nosso bem-estar, promovendo a comunicação e oferecendo soluções.
        </p>

        <p className="text-white text-lg mt-4 mainfont">
          Clique aqui para explorar os avanços da tecnologia em prol do bem-estar:
        </p>

        <button className="bg-green1 hover:bg-green2 text-white font-bold py-2 px-4 rounded-full my-3 lg:ml-16 lg:mr-16">
          <a href="https://zenklub.com.br/blog/autoconhecimento/bem-estar-era-digital/">
            Acesse aqui
          </a>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={Imagem1} className="h-64 lg:h-96 w-auto" />
      </div>
    </div>
  );
}
