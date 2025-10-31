import { useEffect } from "react";
import { getProductos } from "../mock/AsyncServices";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams(); 

  useEffect(() => {
    getProductos().then((data) => {
      if (categoryId) {
        setProductos(data.filter((p) => p.category === categoryId));
      } else {
        setProductos(data);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
/* const ItemListContainer = (props)=>{

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

export default ItemListContainer */