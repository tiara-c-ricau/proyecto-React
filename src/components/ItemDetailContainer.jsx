import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/firebase";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 
  
  const handleAddToCart = (item, qty) => {
    addItem(item, qty);
  };

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  if (!item) return <p>Producto no encontrado</p>;

  return <ItemDetail detalle={item} />;
}

export default ItemDetailContainer;
