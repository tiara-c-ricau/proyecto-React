import {useState, useEffect} from 'react'

const ItemCount = ({stock}) => {
const [count, setCount]= useState(1)
const [compra, setCompra]= useState(false)

const sumar = ()=>{
    if(count < stock){

        setCount(count + 1)
    }
}

const restar = ()=>{
    if(count > 0){
        setCount(count - 1)
    }
}
const ejecutarCompra = ()=>{
    setCompra(!compra)
}
console.log('ItemCount')

useEffect(()=>{
    console.log('me ejecuto siempre!')
})

//se ejecuta una sola vez
useEffect(()=>{
},[])
    
//a la escucha de un cambio
useEffect(()=>{
    if(compra !== false){ 
        console.log('se ejecuta cuando monta el componente y siempre que compra cambie', compra)
    }
},[compra])

  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra}>Comprar</button>
    </>
  )
}

export default ItemCount


/* import {useState} from "react"
import ItemListContainer from "./ItemListContainer"

function ItemCount({ productos = [], onAddToCart }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
      {productos.map(producto => (
        <div
          key={producto.id}
          style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', width: '200px', textAlign: 'center' }}
        >
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <p>Precio: ${producto.price}</p>
          <button onClick={onAddToCart}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ItemCount; */