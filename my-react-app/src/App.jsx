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
    <div className="app">
      <AuthProvider>
        <Encabezado cambiarVista={setVista}/>
      </AuthProvider>
      <main className="content">
        <Cards  vista = {vista}/>
        {esInicio && <Parallax />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

