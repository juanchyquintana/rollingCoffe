import { Container, Nav, Navbar } from "react-bootstrap";
import logoCoffe from '../../assets/Coffee_Logo.png'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logoCoffe} alt="Logo Coffe" className="img-fluid" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink end className="nav-link" to="/">Inicio</NavLink>
            <NavLink end className="nav-link" to="/administrador">Administrador</NavLink>
            <NavLink end className="nav-link" to="#link">Registro</NavLink>
            <NavLink end className="nav-link" to="#link">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
