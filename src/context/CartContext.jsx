import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState(carritoLS)


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])
    //todas las funciones/funcionalidades que modifiquen el carrito
    //agregu un item al carrito 
    const addItem = (item, qty) =>{
        if(isInCart(item.id)){
            
            setCart(
                cart.map((prod)=> {
                if(prod.id === item.id){
                    
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    
                    return prod
                }
            })
            )
        }else{
            
            setCart([...cart, {...item, quantity:qty}])
        }
        

    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }


    const clear = () => {
        setCart([])
    }


    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }


    
    const total = ()=>{
        return cart.reduce((acc, prod)=>(acc += prod.quantity * prod.price),0)
    }

    
    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }

    const itemQuantity = (id)=>{
        const itemInCart = cart.find((prod)=> prod.id === id)

        if(itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, total, cartQuantity, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}