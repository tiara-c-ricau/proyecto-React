import React, { useState, useEffect } from 'react';
import { getProductos } from '../mock/AsyncServices';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
   const { categoryId } = useParams();

  useEffect(() => { getProductos().then((data) => {
      // Si hay categoryId, filtramos; si no, mostramos todo
      if (categoryId) {
        const productosFiltrados = data.filter(
          (prod) => prod.category.toLowerCase() === categoryId.toLowerCase()
        );
        setProductos(productosFiltrados);
      } else {
        setProductos(data);
      }
    });
  }, [categoryId]);

    /* getProductos().then((data) => setProductos(data));
  }, []);
 */
  const handleAddToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
    console.log('Producto agregado:', producto);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Catálogo</h2>
      <ItemList productos={productos} onAddToCart={handleAddToCart} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>🛒 Carrito: {cart.length} productos</h3>
      </div>
    </div>
  );
}

export default ItemListContainer;




/* import { useEffect } from "react";
import { getProductos } from "../mock/AsyncServices";
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams(); 

  useEffect(() => {
    getProductos().then((data) => {
      if (categoryId) {
        setProductos(data.filter((p) => p.category === categoryId));
      } else {
        setProductos(data);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer; */
