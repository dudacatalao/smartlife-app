import React from 'react';
import imagem1 from '../images/qualidade1.png';
import imagem2 from '../images/qualidade2.png';


export default function FirstBlogSection() {
  return (
    <section className="bg-background">
      <div className="container max-w-xl p-6 py-24 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Qualidade de Vida e a Smart Life</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Melhorando Sua Qualidade de Vida com Tecnologia Inteligente</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">As cidades inteligentes</h3>
            <p className="mt-3 text-lg dark:text-gray-600">Utilizam tecnologia para melhorar a eficiência dos serviços urbanos e a qualidade de vida dos cidadãos</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Qualidade do Ar e Meio Ambiente</h4>
                  <p className="mt-2 dark:text-gray-600">Buscam melhorar a saúde e o bem-estar dos seus habitantes</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Acesso à Educação e Saúde</h4>
                  <p className="mt-2 dark:text-gray-600">Por meio de plataformas digitais e telemedicina, facilitam o acesso a serviços de educação e saúde</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Participação Cidadã e Transparência</h4>
                  <p className="mt-2 dark:text-gray-600">Através de aplicativos móveis, portais de transparência e sistemas de participação cidadã, promovem a interação entre os cidadãos e o governo</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img src={imagem1} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Encontrando Equilíbrio na Era Digital</h3>
              <p className="mt-3 text-lg dark:text-gray-600">Equilibrar a interação com a tecnologia é essencial para uma qualidade de vida perfeita</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Conveniência no Aprendizado</h4>
                    <p className="mt-2 dark:text-gray-600">Plataformas educacionais digitais permitem que as pessoas aprendam no seu próprio ritmo, facilitando a educação ao longo da vida</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Conectividade Social</h4>
                    <p className="mt-2 dark:text-gray-600">Redes sociais e comunidades online fornecem um espaço para conexões sociais significativas</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Acesso à Cultura e Entretenimento</h4>
                    <p className="mt-2 dark:text-gray-600">A era digital oferece uma ampla gama de opções de entretenimento, promovendo o relaxamento e a criatividade</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src={imagem2} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

