import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ detalle, onAddToCart }) => {
return (
<div className="card p-3">
<div style={{display:'flex', gap:'2rem'}}>
<img src={detalle.img} alt={detalle.name} style={{width:'300px'}} />
<div>
<h2>{detalle.name}</h2>
<p>{detalle.description}</p>
<p>Stock: {detalle.stock}</p>
<p>Precio: ${detalle.price}</p>
<ItemCount stock={detalle.stock} onAdd={(qty)=> onAddToCart(detalle, qty)} />
</div>
</div>
</div>
);
};


export default ItemDetail;
        
        



