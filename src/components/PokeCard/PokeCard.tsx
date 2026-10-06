import './PokeCard.css'

function PokeCard() {
  return (
    <div className="Container-Card">
      <div className="Container-id">
        <h4 className="poke-id">#05</h4>
      </div>
      <div className="Conatiner-imagen">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" className="Poke-img" />
      </div>
      <div className="Container-name">
        <h3 className="text-name">Pikachu</h3>
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
