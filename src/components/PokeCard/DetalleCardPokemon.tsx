import "./DetalleCardPokemon.css";

function DetalleCardPokemon() {
  return (
    <div className="Container-card">
      <div className="Container-Info">
        <div className="Info">
          <div className="Poke-Id">#25</div>
          <h3 className="Poke-Name">Pikachu</h3>
        </div>

        <div className="Container-Tipos">
          <div className="Poke-Tipo">
            Electric
          </div>
        </div>
      </div>
      <div className="Container-Img"></div>
    </div>
  );
}

export default DetalleCardPokemon;
