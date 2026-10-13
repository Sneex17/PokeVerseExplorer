type ClaveValor = Record<string, string>;

const TiposPokemon: ClaveValor[] = [
  { tipo: "normal", estilo: "poke-normal" },
  { tipo: "fire", estilo: "poke-fire" },
  { tipo: "water", estilo: "poke-water" },
  { tipo: "electric", estilo: "poke-electric" },
  { tipo: "grass", estilo: "poke-grass" },
  { tipo: "ice", estilo: "poke-ice" },
  { tipo: "fighting", estilo: "poke-fighting" },
  { tipo: "poison", estilo: "poke-poison" },
  { tipo: "ground", estilo: "poke-ground" },
  { tipo: "flying", estilo: "poke-flying" },
  { tipo: "psychic", estilo: "poke-psychic" },
  { tipo: "bug", estilo: "poke-bug" },
  { tipo: "rock", estilo: "poke-rock" },
  { tipo: "ghost", estilo: "poke-ghost" },
  { tipo: "dragon", estilo: "poke-dragon" },
  { tipo: "dark", estilo: "poke-dark" },
  { tipo: "steel", estilo: "poke-steel" },
  { tipo: "fairy", estilo: "poke-fairy" },
];


const TipoStatus: ClaveValor[] = [
  { tipo: "hp", estilo: "Status-hp" },
  { tipo: "attack", estilo: "Status-attack" },
  { tipo: "defense", estilo: "Status-defense" },
  { tipo: "special-attack", estilo: "Status-special-attack" },
  { tipo: "special-defense", estilo: "Status-special-defense" },
  { tipo: "speed", estilo: "Status-speed" },
]


export const getEstilo = (tipo: string) =>
  TiposPokemon.find(t => t.tipo === tipo)?.estilo ?? "poken-normal";

export const getStatusEstilo = (status: string) =>
  TipoStatus.find(s => s.tipo === status)?.estilo ?? "Status-hp";