import Encabezado from "./Encabezado";
import Cards from "./Cards";
import Parallax from "./Parallax";
import Footer from "./Footer";
import { useState } from "react";

import "./index.css";

function App() {
  const [vista, setVista] = useState("Inicio");
  const esInicio = vista === "Inicio";
  return (
    <div>
        <Encabezado cambiarVista={setVista}/>
        <Cards  vista = {vista}/>
        {esInicio && <Parallax />}
      <Footer />
    </div>
  );
}

export default App;

