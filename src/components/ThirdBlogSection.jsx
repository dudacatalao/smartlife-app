import React from 'react';
import ci from '../images/cidadeinteligente.png'

export default function ThirdBlogSection() {
    return (
        <div className="bg-green5 text-gray-50 mt-2">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{backgroundImage: `url(${ci})`, backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover"}}>
                    <div className="flex flex-col items-center p-8 py-12 text-center text-gray-100">
                        <h1 className="py-4 text-5xl font-bold">Cidades inteligentes promovem bem-estar urbano</h1>
                        <p className="pb-6">Construindo um futuro mais saudável e conectado nas cidades inteligentes</p>
                            
                        </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
                    <div className="pt-6 pb-4 space-y-2">
                        <span>12 June</span>
                        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-green4">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>12 June</span>
                        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-green4">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>12 June</span>
                        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-green4">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const dados = [
    {
        id:1,
        title: ''
    }
]