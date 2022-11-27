import React, { useState } from 'react';
import { Link } from 'gatsby';

type HeaderProps = {

}

const headerLinks = [
  {name: 'Home'      , current: true,  },
  {name: 'About'     , current: false, },
  {name: 'Leadership', current: false, },
  {name: 'Products'  , current: false, },
  {name: 'Contact us', current: false, },
]

export default function Header({} : HeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header id='header'>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={'/'} className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap">EBT</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prevVal => !prevVal)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
              </path>
            </svg>
          </button>
          <div
            className={`${menuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
            onClick={() => {console.log('hello!'); setMenuOpen(false)}}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white">
              {headerLinks.map(link =>
                <li
                  key={link.name}
                >
                  <Link
                    to={'/'}
                    className={`block py-2 pl-3 pr-4 rounded ${link.current ? 'text-white bg-blue-700  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'text-gray-700  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}