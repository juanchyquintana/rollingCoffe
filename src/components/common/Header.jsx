import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logoCoffe from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ usuarioLogeado, setUsuarioLogeado }) => {

  const navegacion = useNavigate()

  const cerrarSesion = () => {

    Swal.fire({
      title: "Logout Exitoso",
      text: `Hasta pronto!`,
      icon: "success",
    });

    sessionStorage.removeItem("adminKeyCoffe")
    setUsuarioLogeado("")

    navegacion('/')
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logoCoffe}
              alt="Logo Coffe"
              className="img-fluid"
              width={150}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <NavLink end className="nav-link" to="/">
                Inicio
              </NavLink>

              {usuarioLogeado !== "" ? (
                <>
                  <NavLink end className="nav-link" to="/administrador">
                    Administrador
                  </NavLink>
                  <Button className="mb-3 nav-link" variant="link" onClick={cerrarSesion}>
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <NavLink end className="nav-link" to="/registrarse">
                    Registro
                  </NavLink>
                  <NavLink end className="nav-link" to="/login">
                    Login
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
