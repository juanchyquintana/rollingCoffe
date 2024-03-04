import { Container, Row } from "react-bootstrap";
import banner from "../../assets/banner.png";
import CardProducto from "../CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import { Link, useNavigate } from "react-router-dom";

const Inicio = () => {
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
    <section className="mainPage">
      <img
        src={banner}
        alt="Banner de Rolling Coffe"
        className="banner w-100 block"
      />

      <Container>
        <div className="d-flex justify-content-between align-items-center categoria">
          <h3 className="my-4 mt-5 titulosFuente">PRODUCTOS POPULARES</h3>
          <Link
            to={"/productos"}
            className="link-secondary link-informacion mt-5 fw-bold h5"
          >
            Otros productos
          </Link>
        </div>
        <Row className="mb-4 mt-5 ms-4">
          {productos && productos.length > 0 ? (
            productos
              .slice(0, 3)
              .map((producto) => (
                <CardProducto key={producto.id} producto={producto} />
              ))
          ) : (
            <p className="text-center fw-bold">No hay recetas disponibles</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
