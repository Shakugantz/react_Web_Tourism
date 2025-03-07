import NavBar from "./Componentes/NavBar/NavBar";
import Inicio from "./Componentes/Pantallas/Inicio/Inicio";
import Presentacion from "./Componentes/Pantallas/Presentacion/Presentacion";
import Servicios from "./Componentes/Pantallas/Servicios/Servicios";
import Contactar from "./Componentes/Pantallas/Contactar/Contactar";
import Footer from "./Componentes/Footer/Footer";
import "./Componentes/Fondos/Fondos";

function App() {
  return (
    <div className="App">
      <div className="animated-background"></div>
      <NavBar />
      <Inicio />
      <Presentacion />
      <Servicios />
      <Contactar />
      <Footer />
    </div>
  );
}

export default App;