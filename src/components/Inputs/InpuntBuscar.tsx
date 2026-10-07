import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./InputBuscar.css";

type InputProps = {
  placeholder: string;
  value: string;
  OnChangeBucar: (e: any) => void;
  OnBuscar: () => void;
  OnCancelar: () => void;
};

function InpuntBuscar({
  placeholder,
  value,
  OnBuscar,
  OnCancelar,
  OnChangeBucar,
}: InputProps) {
  return (
    <div className="Container-buscar">
      <button className="Btn-Buscar" onClick={OnBuscar}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="Icon-Buscar" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => OnChangeBucar(e.target.value)}
        className="Input-buscar"
      />
      <button className="Btn-Cancelar" onClick={OnCancelar}>
        <FontAwesomeIcon icon={faCircleXmark} className="Icon-Cancelar" />
      </button>
    </div>
  );
}

export default InpuntBuscar;
