import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/DetalleProducto";
import NuevoProducto from "./components/NuevoProducto";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/administrador" element={<Administrador />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/administrador/agregar-producto" editar={false} element={<NuevoProducto />} />
            <Route exact path="/administrador/editar-producto/:id" editar={true} element={<NuevoProducto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
