import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries.js";
import { Button, Container } from "react-bootstrap";
import TablaAdministrador from "../TablaAdministrador";

const Administrador = () => {

  const [productos, setProductos] = useState([]) 

  useEffect(() => {
    leerProductosAPI()
  }, [])

  return (
    <>
      <Container>
        <section className="my-5">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4 ">Productos disponibles</h1>
            <Button className="btn btn-primary">
              <i className="bi bi-file-earmark-plus"></i>
            </Button>
          </div>

          <hr />

          <TablaAdministrador />
        </section>
      </Container>
    </>
  );
};

export default Administrador;
