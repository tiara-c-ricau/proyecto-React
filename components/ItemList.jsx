import React from 'react';


const ItemList = ({ productos }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {productos.map((prod) => (
        <div key={prod.id} style={{ border: '1px solid #ddd', margin: '1rem', padding: '1rem' }}>
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Precio: ${prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
