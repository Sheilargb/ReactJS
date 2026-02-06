import Encabezado from "./Encabezado";
import Cards from "./Cards";
import Parallax from "./Parallax";
import Footer from "./Footer";

import "./index.css";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Encabezado />
        <Cards />
        <Parallax />
      </main>
      <Footer />
    </div>
  );
}

export default App;

