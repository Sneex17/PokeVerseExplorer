import "./PokeCard.css";

type ClaveValor = Record<string, string>;

const TiposPokemon: ClaveValor[] = [
  { tipo: "normal", estilo: "poken-normal" },
  { tipo: "fire", estilo: "poken-fire" },
  { tipo: "water", estilo: "poken-water" },
  { tipo: "electric", estilo: "poken-electric" },
  { tipo: "grass", estilo: "poken-grass" },
  { tipo: "ice", estilo: "poken-ice" },
  { tipo: "fighting", estilo: "poken-fighting" },
  { tipo: "poison", estilo: "poken-poison" },
  { tipo: "ground", estilo: "poken-ground" },
  { tipo: "flying", estilo: "poken-flying" },
  { tipo: "psychic", estilo: "poken-psychic" },
  { tipo: "bug", estilo: "poken-bug" },
  { tipo: "rock", estilo: "poken-rock" },
  { tipo: "ghost", estilo: "poken-ghost" },
  { tipo: "dragon", estilo: "poken-dragon" },
  { tipo: "dark", estilo: "poken-dark" },
  { tipo: "steel", estilo: "poken-steel" },
  { tipo: "fairy", estilo: "poken-fairy" },
];

const getEstilo = (tipo: string) =>
  TiposPokemon.find(t => t.tipo === tipo)?.estilo ?? "poken-normal";

type DataCardProps = {
  PokeId: number;
  Nombre: string;
  Imagen: string;
  Tipos: any[];
};
function PokeCard({ PokeId, Nombre, Imagen, Tipos }: DataCardProps) {
  return (
    <div className="Container-Card" key={PokeId}>
      <div className="Container-id">
        <h4 className="poke-id">#{PokeId}</h4>
      </div>
      <div className="Conatiner-imagen">
        <img src={Imagen} alt={Nombre} className="Poke-img" />
      </div>
      <div className="Container-name">
        <h3 className="text-name">{Nombre}</h3>
      </div>
      {Tipos.map((t) => (
        <div className={`Container-tipo ${getEstilo(t.type.name)}`}>
          <h4 className="Poke-tipo">{t.type.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default PokeCard;
