import React, { useState } from 'react';


const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
const [cantidad, setCantidad] = useState(initial);
const [added, setAdded] = useState(false);


const sumar = () => setCantidad(c => Math.min(c + 1, stock));
const restar = () => setCantidad(c => Math.max(c - 1, 1));
const confirmar = () => {
onAdd(cantidad);
setAdded(true);
};


if (added) return <button className="btn btn-success" disabled>Agregado</button>;


return (
<div style={{marginTop:'8px'}}>
<div style={{display:'flex', gap:'8px', alignItems:'center'}}>
<button className="btn btn-outline-secondary" onClick={restar}>-</button>
<span>{cantidad}</span>
<button className="btn btn-outline-secondary" onClick={sumar}>+</button>
</div>
<button className="btn btn-primary mt-2" onClick={() => onAdd(qty)} disabled={stock === 0}>Agregar</button>
</div>
);
};


export default ItemCount;
