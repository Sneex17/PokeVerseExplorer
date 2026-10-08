import { pokemonContext } from "./PokemonContext";
import { useContext, useState, type ReactNode } from "react";
import { type PokemonIdContext } from "../components/interfaces/PokemonIdType";

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [PokeId, setPokeId] = useState<number>(0);
  return (
    <pokemonContext.Provider value={{ PokeId, setPokeId }}>
      {children}
    </pokemonContext.Provider>
  );
}

export function usePokemon(): PokemonIdContext {
  const context = useContext(pokemonContext);
  if (!context) {
    throw new Error("usePokemon debe usarse dentro de un <PokemonProvider>");
  }
  return context;
}
