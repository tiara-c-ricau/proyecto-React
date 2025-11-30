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

