import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const enlaces = [
    {
      id: 1,
      name: t('header.navegacion.sobremi'),
      link: "#sobremi"
    },
    {
      id: 2,
      name: t('header.navegacion.proyectos'),
      link: "#proyectos"
    },
    {
      id: 3,
      name: t('header.navegacion.certificados'),
      link: "#certificados"
    },
    {
      id: 4,
      name: t('header.navegacion.contacto'),
      link: "#contacto"
    }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black backdrop-blur-lg bg-opacity-60">
      <div className="max-w-screen-xl px-5 mg:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-4/6 py-3 md:pl-0 ">
        <LanguageSwitcher />
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <XIcon className="w-7 h-7 text-white" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-7 h-7 text-white" aria-hidden="true" />
          )}
        </button>
        <div
          className={`relative top-full left-0 px-1 pb-1 w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } transition-all duration-500 ease-in-out md:flex md:items-center md:space-x-8 md:relative md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="text-sm md:text-sm lg:text-sm 2xl:text-lg flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {enlaces.map(enlace => (
              <li key={enlace.id} className='mt-4 md:mt-0'>
                <a href={enlace.link} onClick={closeMenu} className="block py-2 pl-3 pr-4 text-white rounded transition-colors duration-300 hover:text-textdestacado md:p-1">
                  {enlace.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const enlaces = [
  {
      id:1,
      name: "Sobre mi",
      link: "#sobremi"
  },
  {
      id:2,
      name: "Proyectos",
      link: "#proyectos"
  },
  {
      id:3,
      name: "Certificados",
      link: "#certificados"
  },
  {
      id:4,
      name: "Contacto",
      link: "#contacto"
  }
]