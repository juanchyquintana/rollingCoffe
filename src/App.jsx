import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/DetalleProducto";
import NuevoProducto from "./components/NuevoProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/administrador" element={<Administrador />} />
            <Route exact path="/detalle-producto" element={<DetalleProducto />} />
            <Route exact path="/agregar-producto" element={<NuevoProducto />} />
            {/* <Route exact path="/registrarse" element={<Administrador />} />
            <Route exact path="/login" element={<Administrador />} /> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
