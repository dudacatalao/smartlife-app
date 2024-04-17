
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
                        <span>17 Abril</span>
                        <h1 className="text-3xl font-bold">Sistemas De Segurança Inteligentes</h1>
                        <p className='pb-6'>Empregam tecnologias avançadas, como câmeras de vigilância com análise de vídeo</p>
                        
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>20 Abril</span>
                        <h1 className="text-3xl font-bold">Promoção Da Inovação</h1>
                        <p className='pb-6'>Uma cidade inteligente busca inovação, criando um ambiente propício para o desenvolvimento de soluções tecnológicas</p>
                        
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>27 Março</span>
                        <h1 className="text-3xl font-bold">Desenvolvimento De Áreas Verdes</h1>
                        <p>É uma das estratégias para criar ambientes urbanos mais agradáveis, saudáveis e sustentáveis</p>
                        
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