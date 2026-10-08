import {createContext} from "react";

import { type PokemonIdContext } from "../components/interfaces/PokemonIdType";

export const pokemonContext = createContext<PokemonIdContext | undefined>(undefined);
