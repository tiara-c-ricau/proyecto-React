import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
      <Link to="/" className="navbar-brand">Tienda NK</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink to="/category/nuevos-ingresos" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Nuevos ingresos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/originales" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Originales</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/mas-vendidos" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Más vendidos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/ofertas" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Ofertas</NavLink>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            {/* Elimino NavLink exterior */}
            <CartWidget count={getTotalItems()} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
