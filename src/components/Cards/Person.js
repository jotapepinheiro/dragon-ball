import React from 'react';

import boom from '../../assets/img/boom.png';

const handleImageError = e => {
  //console.log(e.target.src.startsWith("..."));
  e.target.src = boom;
}

const Person = ({ characters }) => (
  <>
    {characters.map((character) => (
      <div className="transition-all ease-in-out duration-1000" key={character._id}>
        <div className="max-w-xs">
          <div className="p-5 shadow-md m-2 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img className="object-scale-down h-30" src={character.image} onError={handleImageError} alt="Boom" />
            <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{character.planet}</div>
            <div className="text-xl font-bold mb-2">{character.name}</div>
            <div className="truncate">{character.status}</div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Person;
