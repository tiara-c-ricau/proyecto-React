import { useEffect } from "react";
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

export default ItemListContainer;
