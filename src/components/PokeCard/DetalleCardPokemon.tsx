
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faUpDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./DetalleCardPokemon.css";
import "./PokeCard.css";


type PokemonProps ={
  Pokemon: any[];
}
function DetalleCardPokemon() {
  
  return (
    <div className="Container-card">
      <div className="Container-Info">
        <div className="Info">
          <div className="Container-id">
            <h4 className="poke-id">#25</h4>
          </div>
          <h3 className="Poke-Name">Pikachu</h3>
        </div>

        <div className="Container-Tipos">
          <div className="Container-tipo">
            <h4 className="Poke-tipo">Electric</h4>
          </div>
        </div>
        <div className="Container-Data-main">
          <div className="Container-Datos-Pokemon">
            <div className="Dato-Pokemon Radio-L">
              <FontAwesomeIcon icon={faUpDown} className="Data-Icon" />
              <div className="Dato-Info">
                <h4 className="Info-Text">Altura</h4>
                <h4 className="Info-Data">0.4 m</h4>
              </div>
            </div>
            <div className="Dato-Pokemon Radio-R">
              <FontAwesomeIcon icon={faWeightHanging} className="Data-Icon" />
              <div className="Dato-Info">
                <h4 className="Info-Text">Peso</h4>
                <h4 className="Info-Data">6.0 kg</h4>
              </div>
            </div>
          </div>
          <div className="Container-Habilidades">
            <FontAwesomeIcon icon={faStar} className="Data-Icon" />
            <div className="Dato-Info">
              <h4 className="Info-Text">Habilidades</h4>
              <h4 className="Info-Data">6.0 kg</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="Container-Img">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt=""
          className="Pokemon-img"
        />
      </div>
    </div>
  );
}

export default DetalleCardPokemon;
