import './PokeCard.css'


type DataCardProps = {
  PokeId: number;
  Nombre: string;
  Imagen: string;
};
function PokeCard({PokeId, Nombre, Imagen}: DataCardProps) {
  return (
    <div className="Container-Card" key={PokeId}>
      <div className="Container-id">
        <h4 className="poke-id">{PokeId}</h4>
      </div>
      <div className="Conatiner-imagen">
        <img src={Imagen} alt={Nombre} className="Poke-img" />
      </div>
      <div className="Container-name">
        <h3 className="text-name">{Nombre}</h3>
      </div>
      <div className="Container-tipo">
        <h4 className="Poke-tipo">Electrico</h4>
      </div>
      <div className="Container-tipo">
        <h4 className="Poke-tipo">Electrico</h4>
      </div>
      
    </div>
  );
}

export default PokeCard;
