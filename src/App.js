import NavBar from "./componentes/navbar/NavBar";
import Inicio from "./componentes/pantallas/inicio/Inicio";
import Presentacion from "./componentes/pantallas/presentacion/Presentacion";
import Servicios from "./componentes/pantallas/servicios/Servicios";
import Contactar from "./componentes/pantallas/contactar/Contactar";
import Footer from "./componentes/footer/Footer";
import "./componentes/fondos/Fondos";

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