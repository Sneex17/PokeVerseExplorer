import { Outlet } from "react-router-dom";
import HeaderMain from "../../Header/HeaderMain";

function MenuPincipal() {
  return (
    <div>
      <HeaderMain />
      <main className="Container-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MenuPincipal;
