import {useState} from "react"
import ItemListContainer from "./ItemListContainer"

function ItemCount({ productos }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}> {productos.map((producto)=> (
            <Count key={producto.id} item={producto} />
        ))}


        </div>
    );
}
export default ItemCount;
/* const ItemCount = () =>{

const [count, setCount]= useState(1)
}

const sumar = ()=> {
    setCount(count + 1)
}

const restar = ()=> {
    setCount(count - 1)
}  

 */
/* {
    return (
        <div>
            <button className=''>-</button>
            <span className='btn'>{count}</span>
            <button className=''>+</button>
        </div>
    )
} */

/* export default ItemCount */