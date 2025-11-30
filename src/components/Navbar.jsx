import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';


const Navbar = () => {
const { getTotalItems } = useContext(CartContext);


return (
<nav className="navbar navbar-expand bg-dark navbar-dark px-3">
<NavLink to="/" className="navbar-brand">Tienda NK</NavLink>

<div className="collapse navbar-collapse">
<ul className="navbar-nav me-auto">
<li className="nav-item"><NavLink to="/categoria/nuevos-ingresos" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Nuevos ingresos</NavLink></li>
<li className="nav-item"><NavLink to="/categoria/originales" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Originales</NavLink></li>
<li className="nav-item"><NavLink to="/categoria/mas-vendidos" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Más vendidos</NavLink></li>
<li className="nav-item"><NavLink to="/categoria/ofertas" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Ofertas</NavLink></li>
</ul>


<ul className="navbar-nav">
<li className="nav-item">
<NavLink to="/cart" className="nav-link">
<CartWidget count={getTotalItems()} />
</NavLink>
</li>
</ul>
</div>
</nav>
);
};


export default Navbar;