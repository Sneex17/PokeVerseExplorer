import "./PokeCard.css";

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

const getEstilo = (tipo: string) =>
  TiposPokemon.find(t => t.tipo === tipo)?.estilo ?? "poken-normal";

type DataCardProps = {
  PokeId: number;
  Nombre: string;
  Imagen: string;
  Tipos: any[];
  OnClick: () => void;
};
function PokeCard({ PokeId, Nombre, Imagen, Tipos,OnClick }: DataCardProps) {
  return (
    <div className="Container-Card" key={PokeId} onClick={OnClick}>
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
