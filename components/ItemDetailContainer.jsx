import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'; 

function getItem() {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto principal',
        description: 'Zapatillas que estan de moda',
        imageUrl: '/nikeairforce.jpg', 
      });
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((item) => setItem(item));
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
