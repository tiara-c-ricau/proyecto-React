import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncServices";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";

const normalizeCategory = (str) => str.toLowerCase().replace(/\s+/g, '-');

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductos()
      .then((res) => {
        if (categoryId) {
          const filtered = res.filter(
            (producto) => normalizeCategory(producto.category) === categoryId
          );
          setProductos(filtered);
        } else {
          setProductos(res);
        }
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <LoaderComponent />;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;


