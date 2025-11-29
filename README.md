# 🛒 E-Commerce React – Proyecto Final

Este es un e-commerce desarrollado como **proyecto final** del curso de React.  
La aplicación permite navegar productos, ver detalles, añadirlos al carrito y completar una compra mediante un formulario validado.

Toda la información del catálogo se obtiene desde **Firebase Firestore**, y las órdenes de compra quedan registradas en la base de datos.


## 📌 Características principales

### ✔ Navegación (SPA con React Router)
- Rutas dinámicas para categorías (`/category/:id`) y productos (`/item/:id`).
- Navegación sin recarga (SPA real).
- Uso de `NavLink` para indicar la ruta activa.
- Manejo de rutas inexistentes con feedback.

### ✔ Catálogo y Detalle de Productos
- Importación de datos desde **Firebase Firestore**.
- Lectura mediante `getDocs`, `getDoc`, `collection`, `query`, `where`.
- Renderizado condicionado y loaders.
- Ocultamiento automático del `ItemCount` luego de agregar al carrito.

### ✔ Carrito de Compras (Context API)
- Manejo global del estado con `CartContext`.
- Funciones:
  - `addItem`
  - `removeItem`
  - `clearCart`
  - `getTotal`
  - `getQuantity`
- Ícono en el `CartWidget` con cantidad total de productos.
- Persistencia del estado durante la sesión.

### Checkout
- Formulario validado con **React Hook Form**.
- Validación de campos, email duplicado, mensajes de error personalizados.
- Generación de orden en Firestore.
- Feedback visual y número de pedido.
- Limpieza automática del carrito.

---

## Tecnologías utilizadas

### **Frontend**
- React JS
- React Router DOM
- Context API
- React Hook Form
- Bootstrap 5

### **Backend / Base de datos**
- Firebase Firestore

### **Herramientas de compilación**
- Vite


## Nombre: <TIARA>
Curso: React – Proyecto Final

