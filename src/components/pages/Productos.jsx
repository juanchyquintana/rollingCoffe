import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { leerProductosAPI } from "../../helpers/queries";
import CardProducto from "../CardProducto";


const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      consultarAPI();
    }, []);
  
    const consultarAPI = async () => {
      try {
        const respuesta = await leerProductosAPI();
        setProductos(respuesta);
      } catch (error) {
        console.log(error);
      }
    };

    if (!productos) {
        return <div className="fw-bold my-5 text-center">No hay Productos</div>;
      }
      
  return (
    <Container>
      <Row className="mb-4 mt-5 ms-4">
          {productos.map(producto => (
              <CardProducto
                  key={producto.id}
                  producto={producto}
              />
          ))}
      </Row>
    </Container>
  );
};

export default Productos;
