import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import DetalleProducto from './components/DetalleProducto'
import Productos from "./components/pages/Productos";

function App() {
  const usuario = sessionStorage.getItem("adminKeyCoffe") || "";
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Header
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdministrador />
              </RutasProtegidas>
            }
          />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado} />}
          />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/detalleProducto" element={<DetalleProducto />} />
          <Route exact path="/detalleProducto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
