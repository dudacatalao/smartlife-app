import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Página Inicial', href: '/' },
  { name: 'Bem Estar', href: '/bemestar' },
  { name: 'Qualidade de Vida', href: '/qualidadedevida' },
]

export default function Navbar() {
  const [ setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background ">
      <header className=" inset-x-0 top-0 z-50 bg-white shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="../logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item => (
              <NavLink key={item.nome} to={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-green1">{item.name}</NavLink>
            )))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

