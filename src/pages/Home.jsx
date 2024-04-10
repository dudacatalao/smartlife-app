import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Card1 from '../images/1.jpg'
import Card2 from '../images/2.jpg'
import Card3 from '../images/3.webp'
import Card4 from '../images/4.webp'
import Logo from '../images/logo.png'
import ContainerBemEstar from '../components/ContainerBemEstar'
import ScrollReveal from 'scrollreveal';

const navigation = [
  { name: 'Página Inicial', href: '#' },
  { name: 'Bem Estar', href: '#' },
  { name: 'Qualidade de Vida', href: '#' },
]

export default function Home() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar/>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d1f0b1] to-[#aafcb8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              O Blog da Smart Life
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              O nosso blog para cuidar de você, e te mostrar como a tecnologia favorece a Qualidade de Vida!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ver mais
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#86e7b8] to-[#d0ffb7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <main>
        <h1 className='text-3xl tracking-tight text-center'>
          ULTÍMOS POSTS
        </h1>
        <div className='flex items-center justify-around py-20'>
          <Card titulo={"As relações entre meio ambiente e cidades inteligentes"} descricao={"Aplicação da tecnologia pura e simples em um espaço urbano, o aproveitamento eficiente de recursos naturais é o que ajuda a transformar uma cidade em uma smart city."} 
          image={Card1}/>
          <Card titulo={"Tecnologia melhorando a qualidade de vida de todos"} descricao={"A modernização urbana por meio da tecnologia contribui para elevar o bem-estar coletivo. Ao otimizar o uso de recursos naturais e implementar soluções inovadoras."} image={Card2}/>
          <Card titulo={"Saúde conectada"} descricao={"Como a tecnologia impacta a qualidade de vida dos curitibanos. Com a aplicação da tecnologia à saúde, instituições curitibanas salvam vidas, promovem bem-estar e fortalecem os laços comunitários."} image={Card3}/>
          <Card titulo={"Veja como melhorar sua relação com a tecnologia"} descricao={"O Dia do Bem-Estar Digital é celebrado nesta sexta-feira (5) como um movimento global que dissemina boas práticas para uma relação saudável com a tecnologia, incentivando o equilíbrio da tecnologia."} image={Card4}/>
        </div>
        <ContainerBemEstar/>
        
      </main>
    </div>
  )
}
