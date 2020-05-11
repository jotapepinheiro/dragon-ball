import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/img/logo.svg';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo className="fill-current h-8 w-8 mr-2" width="54" height="54" />
          <Link to="/"><span className="font-semibold text-xl tracking-tight">DragonBall</span></Link>
        </div>
        {/* Brand */}
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className={`lg:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <Link to="/"><span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</span></Link>
              <Link to="/charactes"><span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Personagens</span></Link>
              <Link to="/planets"><span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Planetas</span></Link>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
