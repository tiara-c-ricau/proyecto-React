import { useParams } from 'react-router-dom';

function Categoria() {
  const { categoriaId } = useParams();

   const productos = [
  { id: '01', name: 'Nike', description: 'AirForce', stock: 65, price: 100000, img: '/nikeairforce.jpg', category: 'nuevos ingresos' },
  { id: '02', name: 'Nike', description: 'AirForce 2', stock: 20, price: 120000, img: '/nikeairforce2.webp', category: 'nuevos ingresos' },
  { id: '03', name: 'Nike', description: 'Air Jordan', stock: 10, price: 250000, img: '/nikeairjordan.jpg', category: 'originales' },
  { id: '04', name: 'Nike', description: 'AirMax 97', stock: 45, price: 150000, img: '/nikeairmax97.webp', category: 'mas vendidos' },
  { id: '05', name: 'Nike', description: 'Basket', stock: 30, price: 175000, img: '/nikebasket.webp', category: 'originales' },
  { id: '06', name: 'Nike', description: 'celestes', stock: 9, price: 80000, img: '/nikecelestes.jpg', category: 'ofertas' },
  { id: '07', name: 'Nike', description: 'masaje', stock: 2, price: 60000, img: '/nikemasaje.jpg', category: 'ofertas' },
  { id: '08', name: 'Nike', description: 'running', stock: 30, price: 200000, img: '/nikerunning.jpg', category: 'nuevos ingresos' },
   ];

   /* CATEGORIA */
  const productosFiltrados = productos.filter(
    (p) => p.categoria === categoriaId
  );

  // alert
  if (productosFiltrados.length === 0) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>No se encontraron productos en "{categoriaId.replace('-', ' ')}"</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Categoría: {categoriaId.replace('-', ' ')}</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        {productosFiltrados.map((prod) => (
          <div
            key={prod.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio.toLocaleString('es-AR')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categoria;
