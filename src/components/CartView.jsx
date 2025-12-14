import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const CartView = () => {
const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
const navigate = useNavigate();


if (!cart.length) return <p>Tu carrito está vacío</p>;


return (
<div>
<h1>Tu carrito 🛒</h1>
<div>
{cart.map(item => (
<div key={item.id} style={{display:'flex', gap:'1rem', alignItems:'center', padding:'1rem'}}>
<img src={item.img} alt={item.nombre} style={{width: '100px'}} />
<div style={{flex:1}}>
<h5>{item.nombre}</h5>
<p>Cantidad: {item.cantidad}</p>
<p>Precio unitario: ${item.precio}</p>
<p>Subtotal: ${item.cantidad * item.precio}</p>
</div>
<div>
<button className="btn btn-danger mb-2" onClick={() => removeItem(item.id)}>Eliminar</button>
</div>
</div>
))}
</div>


<h3>Total a pagar: ${getTotalPrice()}</h3>


<div style={{display:'flex', gap:'1rem'}}>
<button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
<button className="btn btn-danger" onClick={() => navigate('/checkout')}>Terminar compra</button>
</div>
</div>
);
};


export default CartView;