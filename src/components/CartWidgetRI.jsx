import { FaShoppingCart } from "react-icons/fa";
import {Badge} from 'react-bootstrap'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = ()=>{
    const {cart}= useContext(CartContext)
    console.log(cart)
    return(
        <>
        <FaShoppingCart fontSize={'1.3rem'} />
        <Badge pill bg="danger">5</Badge>
        </>
    )
}

export default CartWidgetRI