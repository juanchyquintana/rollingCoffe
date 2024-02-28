import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogeado }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate()

  const iniciarSesion = (usuario) => {
    if(login(usuario)) {
      Swal.fire({
        title: "Inicio Exitoso",
        text: `Bienvenido ${usuario.correo}`,
        icon: "success",
      });
      navegacion('/administrador')
      setUsuarioLogeado(usuario.correo)
    } else {
      Swal.fire({
        title: "Error!",
        text: `El nombre usuario o password es incorrecto`,
        icon: "error",
      });
    }
  }

  return (
    <section>
      <Container className="bg-white shadow p-3 rounded my-5">
        <Form onSubmit={handleSubmit(iniciarSesion)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Correo</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Ej: correo@corre.com"
              {...register("correo", {
                required: "El Correo es Obligatorio",
                minLength: {
                  value: 4,
                  message: "El email debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 250,
                  message:
                    "El email debe contener como máximo 250 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message:
                    "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />

          </Form.Group>

          <Form.Text className="text-danger">
            {errors.correo?.message}
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Ingrese su Contraseña"
              {...register("password", {
                minLength: {
                  value: 4,
                  message: "El password debe contener al menos 4 caracteres",
                }
              })}
            />
          </Form.Group>

          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>

          <Button variant="success" type="submit" className="w-100 text-uppercase fw-bold">
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
