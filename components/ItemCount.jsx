import {useState} from "react"

const ItemCount = () =>{

const [count, setCount]= useState(1)
}

const sumar = ()=> {
    setCount(count + 1)
}

const restar = ()=> {
    setCount(count - 1)
}  


/* {
    return (
        <div>
            <button className=''>-</button>
            <span className='btn'>{count}</span>
            <button className=''>+</button>
        </div>
    )
} */

export default ItemCount