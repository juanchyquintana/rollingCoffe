import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardProducto = ({ producto }) => {

  const { imagen, nombreProducto, descripcionBreve, id } = producto
  return (
    <>
      <Col xs={12} md={6} lg={4}>

          <Card style={{ width: "80%" }} className="mb-5 shadow border border-black">
          <Card.Img variant="top" src={imagen} className=" img-thumbnail img-fluid" id="imagenCard" />
          <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text>
              {descripcionBreve}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Link className="btn btn-success" to={`/detalleProducto/${id}`}>Ver Más</Link>
          </Card.Footer>
          </Card>
      </Col>
    </>
  )
}

export default CardProducto