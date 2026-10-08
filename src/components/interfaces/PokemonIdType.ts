import type React from "react";

export interface PokemonIdContext {
    PokeId: number;
    setPokeId: React.Dispatch<React.SetStateAction<number>>;
}