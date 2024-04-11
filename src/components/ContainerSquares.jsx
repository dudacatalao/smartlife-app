import Image1 from '../images/img1.jpg'
import Image2 from '../images/img2.jpg'
import Image3 from '../images/img3.jpg'
import '../styles/index.css'

export default function ContainerSquares() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col relative ">
                    <a href='../pages'>
                        <div className="w-auto h-auto bg-green2 ml-36 mt-16 rounded-md relative cursor-pointer">
                            <img src={Image1} className='rounded-md z-0 hover:opacity-25 h-96 transition-opacity ' alt="imagem 1"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Qualidade de Vida</p>
                            
                        </div>
                    </a>
                </div>
                <div className="flex flex-col">
                    <a href="">
                        <div className="w-4/5 h-48 bg-green2 mt-16 ml-auto mr-36 rounded-md relative cursor-pointer">
                            <img src={Image2} className='w-full h-48 rounded-md hover:opacity-25 transition-opacity' alt="imagem 2"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Cidades Inteligentes</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="w-4/5 h-48 bg-green2 mt-6 ml-auto mr-36 rounded-md relative cursor-pointer">
                            <img src={Image3} className='w-full h-full rounded-md hover:opacity-25 transition-opacity' alt="imagem 3"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Bem-Estar</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
