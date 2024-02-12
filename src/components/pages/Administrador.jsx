import { Container } from "react-bootstrap"
import TablaAdministrador from "../TablaAdministrador"

const Administrador = () => {
  return (
    <>
      <Container>
        <section className="my-5">
          <h1>Productos Disponibles</h1>

          <TablaAdministrador />
        </section>
      </Container>
    </>
  )
}

export default Administrador