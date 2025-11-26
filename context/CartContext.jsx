import { createContext, useState } from "react";

//creamos el contexto y lo exportamos para su uso en los componentes
export const CartContext = createContext()


export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])
    // const valorDelContexto={
        // cart
    // }

    //todas las funciones/funcionalidades que modifiquen el carrito
    //agregu un item al carrito 
    const addItem = (item, qty) =>{
        if(isInCart(item.id)){
            //ya existe, sumo cantidades
            // console.log('ya esta en el carrito')
            //forma larga
            // const carritoActualizado = cart.map((prod)=> {
            //     if(prod.id === item.id){
            //         //actualizar
            //         return {...prod, quantity: prod.quantity + qty}
            //     }else{
            //         //todos los que restan, siun modificar
            //         return prod
            //     }
            // })
            // //actualizo el estado con ese nuevo array
            // setCart(carritoActualizado)
            setCart(
                cart.map((prod)=> {
                if(prod.id === item.id){
                    //actualizar
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //todos los que restan, siun modificar
                    return prod
                }
            })
            )
        }else{
            //no existe en el carrito, lo agrego
            setCart([...cart, {...item, quantity:qty}])
        }
        // console.log({...item, quantity:qty})

    }

    //elimine un item del carrito

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //borre todo el carrito
    const clear = () => {
        setCart([])
    }

    //devuelva un bool si ese item existe o no en el carrito

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}