import { Button, Card } from "react-bootstrap"
import cafeAmericano from "../assets/cafeAmericano.jpeg";

const CardProducto = ({ producto }) => {

  const { imagen, nombreProducto, descripcionBreve } = producto
  return (
    <>
      <section className="my-5">

        <div className="mb-3">
          <h2>- Nuestros Productos -</h2>
        </div>

        <div>
          <Card className="w-50">
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text>
              {descripcionBreve}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Button variant="success">Ver Más</Button>
          </Card.Footer>
          </Card>
        </div>
      </section>
    </>
  )
}

export default CardProducto