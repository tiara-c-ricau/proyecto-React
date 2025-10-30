import { useEffect, useState } from "react";

// Array de productos
const productosData = [
  { id: '01', name: 'Nike', description: 'AirForce', stock: 65, price: 100000, img: '/nikeairforce.jpg', category: 'nuevos ingresos' },
  { id: '02', name: 'Nike', description: 'AirForce 2', stock: 20, price: 120000, img: '/nikeairforce2.webp', category: 'nuevos ingresos' },
  { id: '03', name: 'Nike', description: 'Air Jordan', stock: 10, price: 250000, img: '/nikeairjordan.jpg', category: 'originales' },
  { id: '04', name: 'Nike', description: 'AirMax 97', stock: 45, price: 150000, img: '/nikeairmax97.webp', category: 'mas vendidos' },
  { id: '05', name: 'Nike', description: 'Basket', stock: 30, price: 175000, img: '/nikebasket.webp', category: 'originales' },
  { id: '06', name: 'Nike', description: 'celestes', stock: 9, price: 80000, img: '/nikecelestes.jpg', category: 'ofertas' },
  { id: '07', name: 'Nike', description: 'masaje', stock: 2, price: 60000, img: '/nikemasaje.jpg', category: 'ofertas' },
  { id: '08', name: 'Nike', description: 'running', stock: 30, price: 200000, img: '/nikerunning.jpg', category: 'nuevos ingresos' },
];

// Función que simula carga de datos
export const getProductos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Ups! Algo salió mal');
      } else {
        resolve(productosData);
      }
    }, 2000);
  });
};

// Componente React con loading
function AsyncServices() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ estado para loading
  const [error, setError] = useState(null); // ✅ estado para errores

  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Lista de productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img
              src={producto.img}
              alt={producto.description}
              style={{ width: "150px", borderRadius: "10px" }}
            />
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p>Stock: {producto.stock}</p>
            <p>Precio: ${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsyncServices;
