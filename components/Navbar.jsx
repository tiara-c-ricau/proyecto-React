import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import CartWidget from './CartWidget';

function Navbar({ cartCount}) {
  return (
    <nav className="barra-nav">
      <CartWidget cartCount={cartCount} />
      <Link to="/" className="logo-link">
        <img src="../logo.tienda.jpg" alt="Logo de la tienda" className="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav" to="/categoria/nuevos-ingresos">Nuevos ingresos</Link>
        <Link className="nav" to="/categoria/originales">Originales</Link>
        <Link className="nav" to="/categoria/mas-vendidos">Más vendidos</Link>
        <Link className="nav" to="/categoria/ofertas">Ofertas</Link>
      </div>

      {}
      <CartWidget cartCount={5} />
    </nav>
  );
}

export default Navbar;
