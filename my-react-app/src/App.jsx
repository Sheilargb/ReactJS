import Encabezado from "./Encabezado";
import Cards from "./Cards";
import Parallax from "./Parallax";
import Footer from "./Footer";
import { useState } from "react";

import "./index.css";
import { AuthProvider } from "./AuthContext";

function App() {
  const [vista, setVista] = useState("Inicio");
  const esInicio = vista === "Inicio";
  return (
    <AuthProvider>
      <div className="app">
        <Encabezado cambiarVista={setVista}/>
        <main className="content">
          <Cards vista={vista} cambiarVista={setVista} />
          {esInicio && <Parallax />}
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

