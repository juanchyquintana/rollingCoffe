import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries.js";
import { Button, Container, Table } from "react-bootstrap";
import ItemProductos from "../ItemProductos.jsx";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const respuesta = await leerProductosAPI();
        setProductos(respuesta);
      } catch (error) {
        console.log(error);
      }
    };
    consultarAPI();
  }, []);

  return (
    <>
      <Container>
        <section className="my-5">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4 ">Productos disponibles</h1>
            <Button className="btn btn-primary">
              <i className="bi bi-file-earmark-plus"></i>
            </Button>
          </div>

          <hr />

          <Table responsive>
            <thead>
              <tr>
                <th>Cod</th>
                <th>Productos</th>
                <th>Precio</th>
                <th>URL de Imagen</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((producto) => (
                <ItemProductos key={producto.id} producto={producto} />
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
};

export default Administrador;
