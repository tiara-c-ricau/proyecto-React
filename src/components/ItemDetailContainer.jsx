import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../service/firebase';
import ItemDetail from './ItemDetail';
import LoaderComponent from './LoaderComponent';
import { CartContext } from '../context/CartContext';


const ItemDetailContainer = () => {
const { id } = useParams();
const { addItem } = useContext(CartContext);
const [detalle, setDetalle] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
setLoading(true);
getProductById(id)
.then(res => setDetalle(res))
.catch(err => console.error(err))
.finally(() => setLoading(false));
}, [id]);


if (loading) return <LoaderComponent />;
if (!detalle) return <p>Producto no encontrado</p>;


return <ItemDetail detalle={detalle} onAddToCart={(p,qty)=> addItem(p,qty)} />;
};


export default ItemDetailContainer;