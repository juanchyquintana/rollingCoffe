import { Container, Row } from "react-bootstrap";
import banner from "../../assets/banner.png";
import CardProducto from "../CardProducto";

const Inicio = () => {
  return (
    <section className="mainPage">
        <img
          src={banner}
          alt="Banner de Rolling Coffe"
          className="banner w-100 block"
        />

        <Container>
          <Row>
            <CardProducto />
          </Row>
        </Container>
      </section>
  );
};

export default Inicio;
