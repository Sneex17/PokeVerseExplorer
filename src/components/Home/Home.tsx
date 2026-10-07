import { useState, useEffect } from "react";
import InpuntBuscar from "../Inputs/InpuntBuscar";
import "./Home.css";
import PokeCard from "../PokeCard/PokeCard";
import {
  ListaPokeCard,
  ListaPokemon,
  ListaFiltrarPokemon,
} from "../Api/PokeAPI";

import type PokeDex from "../interfaces/ListaPoke";
import PaginationBtn from "../Pagination/PaginationBtn";

function Home() {
  const [Cargando, setCargando] = useState(true);
  const [ListaPokeDex, setListaPokeDex] = useState<PokeDex[]>([]);
  const [Pokemon, setPokemon] = useState<any>([]);
  const [Page, setPage] = useState(0);
  const [BuscarNombre, setBuscarNombre] = useState("");
  const [SinResultados, setSinResultados] = useState(false);

  const handleFilterPokemon = async (nombre: string) => {
    try {
      const busqueda = await ListaFiltrarPokemon(nombre);
      setListaPokeDex(busqueda);
      setSinResultados(nombre !== "" && busqueda.length === 0);
    } catch (error) {
      setSinResultados(true);
    }
  };

  useEffect(() => {
    ListaPokemon(Page).then(setListaPokeDex);
  }, [Page]);

  useEffect(() => {
    try {
      if (ListaPokemon.length === 0) return;
      ListaPokeCard(ListaPokeDex).then(setPokemon);
    } catch (error) {
    } finally {
      setTimeout(() => {
        setCargando(false);
      }, 1000);
    }
  }, [ListaPokeDex]);

  console.log(Pokemon);

  return (
    <div className="Container-Main">
      <div className="Container-Controles">
        <InpuntBuscar
          placeholder="Buscar Pokémon"
          value={BuscarNombre}
          OnChangeBucar={setBuscarNombre}
          OnBuscar={() => handleFilterPokemon(BuscarNombre)}
          OnCancelar={() => {
            setBuscarNombre("");
            handleFilterPokemon("");
          }}
        />
        <PaginationBtn
          Page={Page}
          Cargando={Cargando}
          OnBack={() => setPage((on) => (on -= 21))}
          OnNext={() => setPage((on) => (on += 21))}
        />
      </div>

      <div className="Container-Dex">
        {SinResultados && <span>Busqueda sin resultados.</span>}
        {Cargando && <span>Cargando datos....</span>}
        {!Cargando &&
          Pokemon.map((p: any) => {
            return (
              <PokeCard
                PokeId={p.id}
                Nombre={p.name}
                Imagen={p.sprites.other.dream_world.front_default}
                Tipos={p.types}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
