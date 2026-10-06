import React, { useState, useEffect } from "react";
import InpuntBuscar from "../Inputs/InpuntBuscar";
import "./Home.css";
import PokeCard from "../PokeCard/PokeCard";
import { ListaPokeCard, ListaPokemon } from "../Api/PokeAPI";

import type PokeDex from "../interfaces/ListaPoke";

function Home() {
  const [Cargando, setCargando] = useState(true);
  const [ListaPokeDex, setListaPokeDex] = useState<PokeDex[]>([]);
  const [Pokemon, setPokemon] = useState<any>([]);
const [Page, setPage] = useState(0);


  useEffect(() => {
    ListaPokemon(Page).then(setListaPokeDex);
  }, [setPage]);

  useEffect(() => {
    try {
      if (ListaPokemon.length === 0) return;
      ListaPokeCard(ListaPokeDex).then(setPokemon);
    } catch (error) {
    } finally {
      setCargando(false);
    }
  }, [ListaPokeDex]);

  console.log(Pokemon);

  return (
    <div className="Container-Main">
      <InpuntBuscar placeholder="Buscar Pokémon"/>

      <div className="Container-Dex">
        {Cargando && <span>Cargando datos</span>}
        {!Cargando &&
          Pokemon.map((p: any) => {
            return(<PokeCard
              PokeId={p.id}
              Nombre={p.name}
              Imagen={p.sprites.front_default}
            />);
          })}
      </div>
    </div>
  );
}

export default Home;
