import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <section>
      <Container className="bg-white shadow p-3 rounded my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Correo</Form.Label>
            <Form.Control type="email" placeholder="Ej: correo@corre.com" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su Contraseña" />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 text-uppercase fw-bold">
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
