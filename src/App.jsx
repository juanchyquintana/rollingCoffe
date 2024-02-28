import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import NuevoProducto from "./components/NuevoProducto";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const usuario = sessionStorage.getItem('adminKeyCoffe') || ""
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario)

  return (
    <>
      <BrowserRouter>
        <Header usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado} />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/administrador" element={<Administrador />} />
            <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado} />} />
            <Route exact path="/administrador/agregar-producto" element={<NuevoProducto editar={false} titulo='Nuevo Producto' />} />
            <Route exact path="/administrador/editar-producto/:id" element={<NuevoProducto editar={true} titulo='Editar Producto' />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
