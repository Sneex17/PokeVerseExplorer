import "./PaginationBtn.css";
import ButtonControl from "../Buttons/ButtonControl";

type PaginationProp = {
  Page: number;
  Cargando: boolean;
  OnBack: () => void;
  OnNext: () => void;
};
function PaginationBtn({ OnBack, OnNext, Cargando, Page }: PaginationProp) {
  return (
    <div className="Container-Pagination">
      <ButtonControl
        OnBack={OnBack}
        OnNext={OnNext}
        Cargando={Cargando}
        Page={Page}
      />
    </div>
  );
}

export default PaginationBtn;
