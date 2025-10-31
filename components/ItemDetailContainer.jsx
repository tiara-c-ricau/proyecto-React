import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; 

const productos = [
  { id: '1', title: 'Producto principal', description: 'Zapatillas que están de moda', imageUrl: '/nikeairforce.jpg' },
  { id: '2', title: 'Nike Dunk', description: 'Modelo urbano clásico', imageUrl: '/nikedunk.jpg' },
  { id: '3', title: 'Jordan 1', description: 'Icono del basketball', imageUrl: '/jordan1.jpg' },
];

function getItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = productos.find((p) => p.id === id) || productos[0];
      resolve(item);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((data) => setItem(data));
  }, [id]); 

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;

