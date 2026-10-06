import "./ButtonControl.css";

type ButtonProps = {
  text: string;
  OnClick: () => void
  Cargando?: boolean;
  Page?: number
};
function ButtonControl({ text, OnClick, Cargando, Page }: ButtonProps) {
  return (
    <div>
      <button className="Control-Btn" onClick={OnClick} disabled={Cargando || Page === 0}>{text}</button>
    </div>
  );
}

export default ButtonControl;
