import axios from "axios";
import type PokeDex from "../interfaces/ListaPoke";


export async function ListaPokemon(inicio: number) {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${inicio}`);

        return data.results;
    } catch (error) {
        console.error('Error al obtener:', error);
        return []
    }
}

export async function ListaPokeCard(Pokemon: PokeDex[]) {
    try {
        const data = await Promise.all(Pokemon.map((p) => axios.get(p.url)));
        const pokeData = data.map((poke) => poke.data)

        return pokeData
    } catch (error) {
        console.log('Error al obtener:', error);
        return []
    }
}