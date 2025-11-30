const productosData = [
  { id: '01', name: 'Nike', description: 'AirForce', stock: 65, price: 100000, img: '/nikeairforce.jpg', category: 'nuevos ingresos' },
  { id: '02', name: 'Nike', description: 'AirForce 2', stock: 20, price: 120000, img: '/nikeairforce2.webp', category: 'nuevos ingresos' },
  { id: '03', name: 'Nike', description: 'Air Jordan', stock: 10, price: 250000, img: '/nikeairjordan.jpg', category: 'originales' },
  { id: '04', name: 'Nike', description: 'AirMax 97', stock: 45, price: 150000, img: '/nikeairmax97.webp', category: 'mas vendidos' },
  { id: '05', name: 'Nike', description: 'Basket', stock: 30, price: 175000, img: '/nikebasket.webp', category: 'originales' },
  { id: '06', name: 'Nike', description: 'Celestes', stock: 9, price: 80000, img: '/nikecelestes.jpg', category: 'ofertas' },
  { id: '07', name: 'Nike', description: 'Masaje', stock: 2, price: 60000, img: '/nikemasaje.jpg', category: 'ofertas' },
  { id: '08', name: 'Nike', description: 'Running', stock: 30, price: 200000, img: '/nikerunning.jpg', category: 'nuevos ingresos' },
];

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

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            //harcodeado
            // resolve(productos[0])
            let prod= productosData.find((producto)=> producto.id === id)
            resolve(prod)
        },2000)
    })
}