import { Container, Row } from "react-bootstrap";
import banner from "../../assets/banner.png";
import CardProducto from "../CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

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
          <Row>
            {productos.slice(0, 3).map( producto => (
              <CardProducto 
                key={producto.id}
                producto={producto}
              />
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default Inicio;
