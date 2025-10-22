import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="px-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center align-items-center">
            <Navbar.Brand as={Link} to="/" className="brand-name me-4">
              LEVEL-UP
            </Navbar.Brand>
            
            <NavDropdown title={<span>OFERTAS 🔥</span>} id="ofertas-dropdown" className="nav-dropdown ofertas-destacado">
              <NavDropdown.Item as={Link} to="/ofertas">Ver todas las ofertas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="CATEGORÍAS" id="categorias-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/categorias">Ver todas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categorias/consolas">Consolas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias/pc-gaming">PC Gaming</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias/accesorios">Accesorios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PRODUCTOS" id="componentes-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos">Ver todos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos/teclados">Teclados</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/mouse">Mouse</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/audifonos">Audífonos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BLOGS" id="blogs-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/blogs">Ver todos los blogs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="NOSOTROS" id="nosotros-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/nosotros">Sobre nosotros</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contacto">Contacto</NavDropdown.Item>
            </NavDropdown>

            <div className="nav-icons d-flex ms-4">
              <Nav.Link as={Link} to="/buscar" className="icon-link">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/iniciar-sesion" className="icon-link">
                <i className="bi bi-person"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/comprar" className="icon-link position-relative">
                <i className="bi bi-cart"></i>
                <span className="cart-badge">0</span>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
