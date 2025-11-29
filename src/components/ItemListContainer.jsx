 import React, { useContext } from 'react';
import { getProductos } from '../mock/AsyncServices';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'; 
import { CartContext } from "../context/CartContext";

const ItemListContainer = ({ productos }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItem(product, 1); // agrega 1 unidad
  };

  return <ItemList productos={productos} onAddToCart={handleAddToCart} />;
};

export default ItemListContainer;
