import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <section className="bg-teal-400 h-50 pt-4 shadow-lg">
      <div className="container mx-auto py-4">
        <input className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Pesquisar..." />
        <nav className="flex flex-wrap justify-center">
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mr-3 bg-teal-500 hover:bg-teal-600">Cardamom</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-600 hover:bg-teal-500">Cinnamon</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-500 hover:bg-teal-600">Chamomille</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-600 hover:bg-teal-500">Apple</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-500 hover:bg-teal-600">Mint</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-600 hover:bg-teal-500">Curry</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-500 hover:bg-teal-600">Fragrance</span></Link>
          </div>
          <div className="w-1/8 h-12">
            <Link to="/#"><span className="no-underline text-white py-3 px-4 font-medium mx-3 bg-teal-600 hover:bg-teal-500">Amchoor</span></Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Search;
