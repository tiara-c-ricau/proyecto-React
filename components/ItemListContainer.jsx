import { useEffect } from "react";
import { getProductos } from "../mock/AsyncServices";


const ItemListContainer = (props)=>{

    useEffect(()=>{
        getProductos()
        .then((res)=> console.log(res,respuesta))
        .catch((error)=> console.log(error))
    },[])
    
    return(
        <div>
            <h1>{props.saludo}</h1>
        </div>
    );
}

export default ItemListContainer