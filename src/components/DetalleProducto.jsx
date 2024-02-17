import { Card, Container, Row } from "react-bootstrap";
import cafeAmericano from "../assets/cafeAmericano.jpeg";

const DetalleProducto = () => {
  return (
    <section className="my-5">
      <Container>
        <Card className="mb-3 w-100 ">
          <Row className="g-0">
            <div className="col-md-6">
              <img
                src={cafeAmericano}
                className="img-fluid rounded-start block w-100"
                alt="Cafe Americano"
              />
            </div>

            <div className="col-md-6">
              <Card.Body>
                <Card.Title className="my-3">Cafe Americano</Card.Title>

                <Card.Text className="my-5">
                  El Café americano es una bebida caliente que consiste en un
                  espresso diluido con agua caliente, lo que resulta en una taza
                  de café suave y aromático. Es una opción popular para aquellos
                  que prefieren un café menos intenso que el espresso
                  tradicional. Perfecto para disfrutar en cualquier momento del
                  día.
                </Card.Text>

                <Card.Text className="d-flex justify-content-around">
                    <p>
                        <span className="fw-bolder">Categoría: </span> Infusiones
                    </p>

                    <p>
                        <span className="fw-bolder">Precio: </span> $1000
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
