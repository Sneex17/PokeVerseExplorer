import "./PokeCard.css";
import { getEstilo } from "../../data/TiposPokemon";

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
