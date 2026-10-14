import axios from "axios";
import type PokeDex from "../interfaces/ListaPoke";


export async function ListaPokemon(inicio: number) {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_LISTA_POKEMON}${inicio}`);

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


export async function ListaFiltrarPokemon(texto: string) {
    try {
        if (texto === "") {

            return ListaPokemon(0);

        } else {
            const { data } = await axios.get(import.meta.env.VITE_LISTA_ALL_POKEMON);

            const nombre = texto.toLowerCase().trim();

            return data.results.filter((p: any) => p.name.toLowerCase().includes(nombre));
        }
    } catch (error) {
        console.error('Error al obtener:', error);
        return []
    }
}

export async function BuscarDetallePokemon(PokeId: number) {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_DETALLE_POKEMON}${PokeId}/`);

        return data;
    } catch (error) {
        console.error('Error al obtener:', error);
        return []
    }
}
