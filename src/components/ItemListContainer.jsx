import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncServices";
import ItemList from "./ItemList";
import { CartContext } from "../context/CartContext";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getProductos()
      .then((data) => {
        if (categoryId) {
          setProductos(data.filter((prod) => prod.category === categoryId));
        } else {
          setProductos(data);
        }
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
