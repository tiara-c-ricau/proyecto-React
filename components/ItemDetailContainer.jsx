const getItem = () => {
  // Esta función debe retornar la promesa que resuelve con delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto Ejemplo',
        description: 'Descripción del producto.',
        price: 100,
        imageUrl: '',
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((item) => setItem(item));
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;