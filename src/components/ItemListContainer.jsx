import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../service/firebase"; 
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";


const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getItems(categoryId) 
      .then((res) => setProductos(res))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <LoaderComponent />;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;


