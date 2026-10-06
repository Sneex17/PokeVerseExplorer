import { useState } from "react";
import Home from "../src/components/Home/Home";
import "./App.css";
import HeaderMain from "./components/Header/HeaderMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderMain />
      <Home />
    </>
  );
}

export default App;
