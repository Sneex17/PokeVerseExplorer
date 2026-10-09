import "./NotFound.css";
import ButtonBack from "../../Buttons/ButtonBack";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navegacion = useNavigate();
  return (
    <div className="Container-notfoud">
      <div className="Container-Control">
        <ButtonBack OnVolver={() => navegacion("/")} />
        <h3 className="Text-Detalle">Not Found</h3>
      </div>
    </div>
  );
}

export default NotFound;
