import React from 'react';
import imagem1 from '../images/qualidade3.png'
import imagem2 from '../images/2.jpg'
import imagem3 from '../images/qualidade4.png'
import imagem4 from '../images/qualidade5.png'


export default function QualidadeContainer() {
  return (
    <section className="py-6 sm:py-12 bg-background">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col bg-white">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={imagem1} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green1">smart life</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Como as Cidades Inteligentes Promovem uma Vida Mais Saudável e Sustentável</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>Fevereiro 27, 2024</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-white">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 bg-white0" src={imagem2} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green1">smart life</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Tecnologia melhorando a qualidade de vida de todos</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>Março 5, 2024</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-white">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 bg-white0" src={imagem3} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green1">Smart Life</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Desvendando os Segredos para ter qualidade de vida</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>Abril 16, 2024</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-white">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={imagem4} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green1">smart life</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A Revolução das Cidades Inteligentes: O Futuro da Qualidade de Vida Urbana</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>Abril 19, 2024</span>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
}

