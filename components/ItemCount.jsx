import {useState} from "react"
import ItemListContainer from "./ItemListContainer"

function ItemCount({ productos = [], onAddToCart }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
      {productos.map(producto => (
        <div
          key={producto.id}
          style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', width: '200px', textAlign: 'center' }}
        >
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <p>Precio: ${producto.price}</p>
          <button onClick={onAddToCart}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ItemCount;