import "./ButtonControl.css";

type ButtonProps = {
  OnBack?: () => void;
  OnNext?: () => void;
  Cargando?: boolean;
  Page?: number
};
function ButtonControl({OnBack, OnNext, Cargando, Page }: ButtonProps) {
  return (
    <div>
      <button className="Control-Btn" onClick={OnBack} disabled={Cargando || Page === 0}>Back</button>
      <button className="Control-Btn" onClick={OnNext} disabled={Cargando || Page === 1344}>Next</button>
    </div>
  );
}

export default ButtonControl;
