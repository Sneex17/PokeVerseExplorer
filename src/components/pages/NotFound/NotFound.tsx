import "./NotFound.css";
import Text404 from '../../../assets/Text404.png';
import Personajes from '../../../assets/Personajes.png'
import ButtonBack from "../../Buttons/ButtonBack";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navegacion = useNavigate();

  return (
    <div className="Container-notfoud">
      <div className="Container-img">
        <img src={Personajes} alt="Personajes" className="Personajes-img" />
      </div>
      <div className="Container-info">
        <div className="img-404">
          <img src={Text404} alt="404" />
        </div>
        <h2 className="Mensaje">¡Página no encontrada!</h2>
        <p className="Sub-Mensaje">
          Parece que este Pokémon se perdió en el camino...
          <br />
          La página que buscas no existe o fue movida.
        </p>
        <div className="Container-Control">
        <ButtonBack OnVolver={() => navegacion("/")} />
      </div>
      </div>
    </div>
  );
}

export default NotFound;
