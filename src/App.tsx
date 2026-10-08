import "./App.css";
import MyRouter from "./components/routes/MyRouter";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <MyRouter/>
    </PokemonProvider>
  );
}

export default App;
