import { Button, Card } from "react-bootstrap"
import cafeAmericano from "../assets/cafeAmericano.jpeg";

const CardProducto = () => {
  return (
    <>
      <section className="my-5">

        <div className="mb-3">
          <h2>- Nuestros Productos -</h2>
        </div>

        <div>
          <Card className="w-50">
          <Card.Img variant="top" src={cafeAmericano} />
          <Card.Body>
            <Card.Title>Café Americano</Card.Title>
            <Card.Text>
              Una taza de café suave y aromático
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Button variant="success"></Button>
          </Card.Footer>
          </Card>
        </div>
      </section>
    </>
  )
}

export default CardProducto