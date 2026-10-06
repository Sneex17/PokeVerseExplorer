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
        text="Back"
        OnClick={OnBack}
        Cargando={Cargando}
        Page={Page}
      />
      <ButtonControl text="Next" OnClick={OnNext} Cargando={Cargando} />
    </div>
  );
}

export default PaginationBtn;
