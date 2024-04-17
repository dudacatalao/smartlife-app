import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import SideBar from '../components/SideBar';

const navigation = [
  { name: 'Página Inicial', href: '/' },
  { name: 'Bem Estar', href: '/bemestar' },
  { name: 'Qualidade de Vida', href: '/qualidadedevida' },
];

export default function NavbarHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-background">
      <header className="inset-x-0 top-0 z-50 absolute">
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
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md  text-gray-700"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-green1">{item.name}</NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && <SideBar />}
    </div>
  );
}
