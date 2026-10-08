import ButtonBack from "../../Buttons/ButtonBack";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DetallePokemon.css";
import DetalleCardPokemon from "../../PokeCard/DetalleCardPokemon";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../../context/PokemonProvider";
import { BuscarDetallePokemon } from "../../Api/PokeAPI";

function DetallePokemon() {
  const { id } = useParams();
  const { PokeId, setPokeId } = usePokemon();
  const [Pokemon, setPokemon] = useState<any>(null);
  
  setPokeId(Number(id));


  useEffect(() => {
    if (PokeId === 0) return;

    const handleBuscarDetalle = async () => {
      const data = await BuscarDetallePokemon(PokeId);
      setPokemon(data);
    };

    handleBuscarDetalle();
  }, [PokeId]);

  console.log(PokeId);
  console.log(Pokemon);
  const nagegacion = useNavigate();
  return (
    <div className="Container-Detalle">
      <div className="Container-Control">
        <ButtonBack OnVolver={() => nagegacion("/")} />
        <h3 className="Text-Detalle">Detalle del Pokémon</h3>
      </div>
      <div className="Container-CardDetalle">
        <DetalleCardPokemon />
      </div>
    </div>
  );
}

export default DetallePokemon;
