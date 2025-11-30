import React from 'react';
import { Link } from 'react-router-dom';


const EmptyCart = () => (
<div style={{textAlign:'center', padding:'2rem'}}>
<h3>Tu carrito está vacío</h3>
<Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
</div>
);


export default EmptyCart;