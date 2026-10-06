import React, { useState, useEffect } from 'react';
import InpuntBuscar from '../Inputs/InpuntBuscar';
import './Home.css';
import PokeCard from '../PokeCard/PokeCard';

function Home() {

  const [ListaPokemon, setListaPokemon] = useState([]);
  return (
    <div className='Container-Main'>
      <InpuntBuscar/>
      <div className="Container-Dex">
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
      </div>
    </div>
  )
}

export default Home
