/* import '../styles/navbar.css'
import CartWidget from './CartWidget'

function Navbar() {
    return (
        <nav className="barra-nav">
            <img src='../logo.tienda.jpg' alt='logo' className='logo' />
            <a className='nav' href="">Nuevos ingresos</a>
            <a className='nav' href="">Originales</a>
            <a className='nav' href="">Mas vendidos</a>
            <a className='nav' href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}
export default Navbar */
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className="barra-nav">
      {/* Logo o brand que redirige al Home */}
      <Link to="/" className="logo-link">
        <img src="../logo.tienda.jpg" alt="Logo de la tienda" className="logo" />
      </Link>

      {/* Navegación de categorías */}
      <div className="nav-links">
        <Link className="nav" to="/categoria/nuevos-ingresos">Nuevos ingresos</Link>
        <Link className="nav" to="/categoria/originales">Originales</Link>
        <Link className="nav" to="/categoria/mas-vendidos">Más vendidos</Link>
        <Link className="nav" to="/categoria/ofertas">Ofertas</Link>
      </div>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;
