import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemDetail = ({ detalle }) => {

  const { addItem, getItemQuantity } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);

  const quantityInCart = getItemQuantity(detalle.id);

  const stockActualizado = detalle.stock - quantityInCart;

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);

    Swal.fire({
      icon: 'success',
      title: `Agregaste ${cantidad} x ${detalle.name}`,
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{detalle.name}</h2>
      <img src={detalle.img} width="250" />
      <p>{detalle.description}</p>
      <p>Precio: ${detalle.price}</p>
      <p>Stock disponible: {stockActualizado}</p>

      {
        purchase
          ? <Link to="/cart" className="btn btn-dark">Terminar compra</Link>
          : <ItemCount stock={stockActualizado} onAdd={onAdd} />
      }
    </div>
  );
};

export default ItemDetail;
/* import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ detalle }) => {

  const { addItem, getItemQuantity } = useContext(CartContext)

  const [purchase, setPurchase] = useState(false)

  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(detalle, cantidad)

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Agregaste ${cantidad} x ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500
    })
  }


  const quantityInCart = getItemQuantity(detalle.id)

  const stockActualizado = detalle.stock - quantityInCart

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

      <h1>Detalle de: {detalle.name}</h1>

      <img src={detalle.img} alt={detalle.name} width={300} />

      <p>{detalle.description}</p>
      <p>${detalle.price}</p>
      <p>STOCK DISPONIBLE: {stockActualizado}</p>

      {
        purchase
          ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link>
          : <ItemCount stock={stockActualizado} onAdd={onAdd} />
      }
    </div>
  )
}

export default ItemDetail; */




/* import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'


import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detalle}) => {

    const {cart, addItem, itemQuantity} = useContext(CartContext)


    const [purchase, setPurchase]= useState(false)
    console.log(cart)


  const onAdd = (cantidad)=> {
    console.log(`Agregaste ${cantidad} al carrito`)
    setPurchase(true)
    addItem(detalle,cantidad)
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste  ${detalle.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1500
    })
  
  }
const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}}>
        <h1>Detalle de: {detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>STOCK DISPONIBLE: {stockActualizado}</p>
        {/* sigo tal cual la consigna }/*  */
      /*   {{quantityAdded !== 0 ? <button className='btn btn-dark'>Terminar compra</button> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}} */
        /*  {purchase ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
} */

        
        
        



