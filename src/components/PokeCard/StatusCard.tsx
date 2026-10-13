import { getStatusEstilo } from "../../data/TiposPokemon";
import "./StatusCard.css";

type StatusProps = {
  PokeStatus: any;
};
function Statuscard({ PokeStatus }: StatusProps) {
  return (
    <div className="Container-Status">
      <h3 className="text-status">Espadísticas</h3>

      {PokeStatus.stats.map((s: any) => (
        <div className="Poke-Status" key={s.stat.name}>
          <div className="Status-name">{s.stat.name}</div>
          <div className="Container-bar">
            <div className="Status-bar">
              <div className={`Status-percent ${getStatusEstilo(s.stat.name)}`}  style={{width: `${s.base_stat}%`}}></div>
            </div>
            <h3 className="percent">{s.base_stat}%</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Statuscard;
