import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  // Total de productos en el carrito
  const cartCount = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <nav className="barra-nav">

      {/* Logo y acceso al inicio */}
      <Link to="/" className="logo-link">
        <img 
          src="/logo.tienda.jpg" 
          alt="Logo de la tienda" 
          className="logo" 
        />
      </Link>

      {/* Secciones de navegación */}
      <div className="nav-links">
        <NavLink 
          className={({ isActive }) => isActive ? "nav active" : "nav"} 
          to="/categoria/nuevos-ingresos"
        >
          Nuevos ingresos
        </NavLink>

        <NavLink 
          className={({ isActive }) => isActive ? "nav active" : "nav"} 
          to="/categoria/originales"
        >
          Originales
        </NavLink>

        <NavLink 
          className={({ isActive }) => isActive ? "nav active" : "nav"} 
          to="/categoria/mas-vendidos"
        >
          Más vendidos
        </NavLink>

        <NavLink 
          className={({ isActive }) => isActive ? "nav active" : "nav"} 
          to="/categoria/ofertas"
        >
          Ofertas
        </NavLink>

        {/* Acceso al carrito */}
        <NavLink 
          to="/carrito" 
          className={({ isActive }) => isActive ? "nav active" : "nav"}
        >
          <CartWidget cartCount={cartCount} />
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;


/* import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartWidgetRI from './CartWidgetRI';

function NavbarBS() {

  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src='../logo.tienda.jpg' alt='logo' style={{width:'7rem'}}/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/mas vendidos">
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/ofertas">Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <CartWidgetRI cartCount={cartCount} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 */