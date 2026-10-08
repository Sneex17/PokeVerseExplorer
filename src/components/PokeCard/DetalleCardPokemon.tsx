import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faUpDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./DetalleCardPokemon.css";
import "./PokeCard.css";
import { getEstilo } from "../../data/TiposPokemon";

type PokemonProps = {
  Pokemon: any;
};
function DetalleCardPokemon({ Pokemon }: PokemonProps) {
  if (!Pokemon) return <p>Cargando...</p>;
  return (
    <div className="Container-card">
      <div className="Container-Info">
        <div className="Info">
          <div className="Container-id">
            <h4 className="poke-id">#{Pokemon.id}</h4>
          </div>
          <h3 className="Poke-Name">{Pokemon.name}</h3>
        </div>

        <div className="Container-Tipos">
          {Pokemon.types.map((t: any) => (
            <div className={`Container-tipo ${getEstilo(t.type.name)}`}>
              <h4 className="Poke-tipo">{t.type.name}</h4>
            </div>
          ))}
        </div>
        <div className="Container-Data-main">
          <div className="Container-Datos-Pokemon">
            <div className="Dato-Pokemon Radio-L">
              <FontAwesomeIcon icon={faUpDown} className="Data-Icon" />
              <div className="Data-Info">
                <h4 className="Info-Text">Altura</h4>
                <h4 className="Info-Data">{Pokemon.height / 10} m</h4>
              </div>
            </div>
            <div className="Dato-Pokemon Radio-R">
              <FontAwesomeIcon icon={faWeightHanging} className="Data-Icon" />
              <div className="Data-Info">
                <h4 className="Info-Text">Peso</h4>
                <h4 className="Info-Data">{Pokemon.weight / 10} kg</h4>
              </div>
            </div>
          </div>
          <div className="Container-Habilidades">
            <FontAwesomeIcon icon={faStar} className="Data-Icon" />
            <div className="Data-Info">
              <h4 className="Info-Text">Habilidades</h4>
              <ul>
                {Pokemon.abilities.map((h: any) => (
                  <li key={h.ability.name} className="Info-Data">
                    {h.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Container-Img">
        <img
          src={Pokemon.sprites.other.dream_world.front_default}
          alt=""
          className="Pokemon-img"
        />
      </div>
    </div>
  );
}

export default DetalleCardPokemon;
