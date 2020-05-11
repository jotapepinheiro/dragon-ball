import React, { useState, useEffect } from 'react';

import logo from '../assets/img/logo.png';
import Person from '../components/Cards/Person';
import Search from '../components/Search';
import api from '../services/api';

function Home() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get('character');

      const data = response.data.map(character => ({
        ...character
      }))

      setCharacter(data);
    }

    loadCharacters();
  }, []);

  return (
    <>
      <Search />
      <section className="w-10/12 m-auto mt-4">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">

            <div className="flex flex-col justify-center">
              <div className="max-w-5xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="flex flex-row">
                  <div className="w-full bg-yellow-400 p-5 flex justify-center items-center h-48">
                    <img src={logo} alt="DragonBall" className="max-w-full h-auto align-middle border-none" />
                  </div>
                  <div className="w-full bg-teal-500 text-white p-5 flex justify-center items-center">Encontre o personagem ou planetas da série.</div>
                </div>
              </div>
            </div>

            <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
              <div className="max-w-xs">
                <div className="flex flex-col justify-center h-48 p-3">
                  <div className="text-xl font-black text-teal-700">Pesquise por</div>
                  <div className="text-sm my-3">planeta de origem, espécie ou gênero</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row justify-between items-center">

            <Person characters={characters}/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
