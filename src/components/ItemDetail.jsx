import React, { useState } from 'react'
import ItemCount from './ItemCount'
//importo el hook para usar el contexto
import { useContext } from 'react'

//importo el contexto que quiero utilizar
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
        {/* sigo tal cual la consigna */}
        {/* {quantityAdded !== 0 ? <button className='btn btn-dark'>Terminar compra</button> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>} */}
        {purchase ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}















        {purchase ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}

        
        
        
export default ItemDetail; 



