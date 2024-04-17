import React from 'react';
import img1 from '../images/um.jpg';
import img2 from '../images/dois.png';
import img3 from '../images/tres.png';
import img4 from '../images/quatro.jpg';


export default function Cards(){
    return(
        <section className="bg-background text-gray-100">
            <div className="container max-w-10xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img1} alt="Imagem 1" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gray-900">Tecnologia e Bem-Estar Urbano</h3>
                            <span className="text-xs text-gray-400">January 21, 2021</span>
                            <p className="text-gray-900">Descubra como as mais recentes tecnologias estão sendo utilizadas para criar ambientes urbanos mais saudáveis e sustentáveis</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img2} alt="Imagem 2" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gray-900">Inteligência Artificial nas Cidades</h3>
                            <span className="text-xs text-gray-400">January 22, 2021</span>
                            <p className="text-gray-900">Aprofunde-se no impacto da inteligência artificial na gestão de serviços públicos, desde a otimização de transporte até a melhoria da segurança</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img3} alt="Imagem 3" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gray-900">Mobilidade Urbana Inteligente</h3>
                            <span className="text-xs text-gray-400">January 23, 2021</span>
                            <p className="text-gray-900">Saiba como a tecnologia está revolucionando a forma como nos movemos dentro das cidades, impulsionando a adoção de veículos elétricos</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white hidden sm:block">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img4} alt="Imagem 4" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gray-900">Bem-Estar Digital nas Cidades</h3>
                            <span className="text-xs text-gray-400">January 24, 2021</span>
                            <p className="text-gray-900">Descubra como as ferramentas digitais e aplicativos podem ser usados para promover a saúde mental e o equilíbrio em um mundo cada vez mais digitalizado</p>
                        </div>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}
