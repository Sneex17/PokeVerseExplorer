import { Route, Routes } from "react-router-dom";
import MenuPincipal from "../pages/MenuPrincipal/MenuPincipal";
import DetallePokemon from "../pages/DetallePokemon/DetallePokemon";
import Home from "../pages/Home/Home";
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<MenuPincipal />}>
        <Route index element={<Home/>} />
        <Route path="PokeDetalle/:id" element={<DetallePokemon />} />
      </Route>
    </Routes>
  );
}

export default MyRouter;
