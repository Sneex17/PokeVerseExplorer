import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PokeAlerta = withReactContent(Swal);

type AlertProps = {
    titulo: string;
    texto: string;
    icono: any;
    confirmacion: string;
}

export const Mensajes = ({titulo, texto, icono, confirmacion}: AlertProps) => {
  PokeAlerta.fire({
    title: titulo,
    text: texto,
    icon: icono,
    confirmButtonText: confirmacion,
  });
};
