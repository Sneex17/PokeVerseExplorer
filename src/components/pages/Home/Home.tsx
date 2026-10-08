import { useState, useEffect } from "react";
import InpuntBuscar from "../../Inputs/InpuntBuscar";
import "./Home.css";
import PokeCard from "../../PokeCard/PokeCard";
import {
  ListaPokeCard,
  ListaPokemon,
  ListaFiltrarPokemon,
} from "../../Api/PokeAPI";

import type PokeDex from "../../interfaces/ListaPoke";
import PaginationBtn from "../../Pagination/PaginationBtn";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../../../context/PokemonProvider";

function Home() {
  const navegacion = useNavigate();
  const {setPokeId}  = usePokemon();
  const [Cargando, setCargando] = useState(true);
  const [ListaPokeDex, setListaPokeDex] = useState<PokeDex[]>([]);
  const [Pokemon, setPokemon] = useState<any>([]);
  const [Page, setPage] = useState(0);
  const [BuscarNombre, setBuscarNombre] = useState("");
  const [SinResultados, setSinResultados] = useState(false);

  const PokeAlerta = withReactContent(Swal);

  const handleFilterPokemon = async (nombre: string) => {
    try {
      if (nombre === "") {
        PokeAlerta.fire({
          title: "Acción de buscar sin nombre",
          text: "Debe de ingresar el nombre de un Pokémon a buscar. Ej: Pikachu",
          icon: "info",
          confirmButtonText: "Ok",
        });
      } else {
        const busqueda = await ListaFiltrarPokemon(nombre);
        setListaPokeDex(busqueda);
        setSinResultados(nombre !== "" && busqueda.length === 0);
      }
    } catch (error) {
      setSinResultados(true);
    }
  };

  const handleCancelar = async () => {
    try {
      const data = await ListaPokemon(0);
      setListaPokeDex(data);
      setSinResultados(false);
    } catch (error) {}
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
            handleCancelar();
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
                OnClick={() => {
                  setPokeId(p.id)
                  navegacion(`/PokeDetalle/${p.id}`)
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
