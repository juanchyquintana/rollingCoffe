import { Card, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { leerProductosAPI } from "../helpers/queries";

const DetalleProducto = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      const productoEncontrado = respuesta.find((producto) => producto._id === id);
      setProductos(productoEncontrado);
    } catch (error) {
      console.log(error);
    }
  };

  if (!productos) {
    return <div className="fw-bold my-5 text-center">No hay Productos</div>;
  }

  const {
    nombreProducto,
    descripcionBreve,
    categoria,
    descripcionAmplia,
    imagen,
    precio
  } = productos;
  return (
    <section className="my-5">
      <Container>
        <Card className="mb-3 w-100 ">
          <Row className="g-0">
            <div className="col-md-6">
              <img
                src={imagen}
                className="img-fluid rounded-start block w-100"
                alt="Cafe Americano"
              />
            </div>

            <div className="col-md-6">
              <Card.Body>
                <Card.Title className="my-3">{nombreProducto}</Card.Title>

                <Card.Text className="my-5">
                  {descripcionAmplia}
                </Card.Text>

                <Card.Text className="d-flex justify-content-around">
                    <p>
                        <span className="fw-bolder">Categoría: </span> {categoria}
                    </p>

                    <p>
                        <span className="fw-bolder">Precio: </span> {precio}
                    </p>
                </Card.Text>
              </Card.Body>
            </div>
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default DetalleProducto;
