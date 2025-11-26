import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutRHF = () => {
    const [loading, setLoading]= useState(false)
    const [orderId, setOrderId]= useState(null)
    const {cart, total, clear}= useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

console.log(errors, 'errors')
    const finalizarCompra = (dataForm)=>{
       setLoading(true)
        
           console.log(dataForm,'data')
            let order ={
            comprador: {
               name:dataForm.name,
               lastname: dataForm.lastname,
               address:dataForm.address,
               email: dataForm.email
            },
            compras:cart,
            total: total(),
            fecha: serverTimestamp()
            }

         const ventas= collection(db, "orders")
        // //agregar el doc
         addDoc(ventas, order)
         .then((res)=>{
            setOrderId(res.id)
             clear()
         })
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false))
        
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
    <>
    {
        orderId 
        ? <div>
            <h2>Muchas gracias por su compra</h2>
            <h4>Su orden es: {orderId}</h4>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        :<div>
        <h1>Complete con sus datos</h1>

        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' {...register("name", {required:true, minLength:3})}/>
            {errors?.name?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>El nombre es requerido</span>}
            {errors?.name?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>El nombre debe contener minimamente 3 caracteres</span>}
            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' {...register("lastname", {required:true, minLength:2})}/>
            {errors?.lastname?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>El apellido es requerido</span>}
            {errors?.lastname?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>El apellido debe contener minimo 2 caracteres</span>}
            <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' {...register("address", {required:true, minLength:9, maxLength:30})}/>
              {errors?.address?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>La dirección  es un campo requerido</span>}
            {errors?.address?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>La dirección debe contener minimo 9 caracteres</span>}
             {errors?.address?.type === "maxLength" && <span style={{color:'red', fontWeight:'bold'}}>La dirección es demasiado larga</span>}
            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' {...register("email", {required:true})} />
             {errors?.email?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>Por favor complete el campo mail</span>}
            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2=> mail2 === getValues().email}})} />
            {errors?.secondemail?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>Por favor complete el campo</span>}
              {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red', fontWeight:'bold'}}>Los correos no coinciden</span>}
            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando compra...' : 'Completar Compra'}</button>
        </form>
    </div>
    }
    </>
  )
}

export default CheckoutRHF