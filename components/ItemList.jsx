const ItemList = ({ productos }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {productos.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: '5px solid #333',
            margin: '1rem',
            padding: '1rem',
            width: '300px',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          <img
            src={prod.img}
            alt={prod.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Precio: ${prod.price}</p>
          <button 
          onClick={() => onAddToCart(prod)}
          style={{
              backgroundColor: 'greenyellow',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '8px',
            }}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
 
