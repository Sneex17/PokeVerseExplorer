import ButtonBack from "../../Buttons/ButtonBack";
import { useNavigate } from "react-router-dom";
import './DetallePokemon.css'
import DetalleCardPokemon from "../../PokeCard/DetalleCardPokemon";

function DetallePokemon() {
  const nagegacion = useNavigate();
  return (
    <div className="Container-Detalle">
      <div className="Container-Control">
        <ButtonBack OnVolver={() => nagegacion("/Home")} />
        <h3 className="Text-Detalle">Detalle del Pokémon</h3>
      </div>
      <div className="Container-CardDetalle">
        <DetalleCardPokemon/>
      </div>
    </div>
  );
}

export default DetallePokemon;
