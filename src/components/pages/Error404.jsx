import { Button, Container } from "react-bootstrap"
import errorImagen from '../../assets/error404.png'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center ">
          <img src={errorImagen} alt="Imagen de Error" />
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Button as={Link} to="/" variant="success" className="w-50 fw-bold text-uppercase">Volver a Inicio</Button>
        </div>
      </Container>
    </>
  )
}

export default Error404