import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { useForm } from "react-hook-form";

const CheckoutRHF = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { cart, total, clear } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const finalizarCompra = async (dataForm) => {
    setLoading(true);

    try {
      const order = {
        comprador: {
          name: dataForm.name,
          lastname: dataForm.lastname,
          address: dataForm.address,
          email: dataForm.email,
        },
        compras: cart,
        total: total(),
        fecha: serverTimestamp(),
      };

      const ventas = collection(db, "orders");
      const res = await addDoc(ventas, order);

      setOrderId(res.id);
      clear();
    } catch (error) {
      console.log("Error generando orden:", error);
    } finally {
      setLoading(false);
    }
  };

  // Si el carrito está vacío y aún no se generó una orden
  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        // Mensaje de compra exitosa
        <div className="container text-center mt-5">
          <div className="card p-4 shadow-sm">
            <h2 className="mb-3">¡Muchas gracias por tu compra! 🎉</h2>
            <h4 className="mb-4">Tu número de orden es:</h4>
            <h3
              className="p-2 mb-4"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              {orderId}
            </h3>

            <br />

            <Link className="btn btn-dark btn-lg" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      ) : (
        // Formulario de compra
        <div className="container mt-5">
          <h1 className="mb-4">Complete sus datos</h1>

          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={handleSubmit(finalizarCompra)}
          >
            {/* Nombre */}
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name && (
                <span className="text-danger fw-bold">
                  El nombre es requerido
                </span>
              )}
            </div>

            {/* Apellido */}
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu apellido"
                {...register("lastname", { required: true, minLength: 2 })}
              />
              {errors.lastname && (
                <span className="text-danger fw-bold">
                  El apellido es requerido
                </span>
              )}
            </div>

            {/* Dirección */}
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu dirección"
                {...register("address", {
                  required: true,
                  minLength: 9,
                  maxLength: 30,
                })}
              />
              {errors.address && (
                <span className="text-danger fw-bold">
                  La dirección es requerida
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Ingresa tu correo"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger fw-bold">
                  El correo es obligatorio
                </span>
              )}
            </div>

            {/* Repetición del email */}
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Repetí tu correo"
                {...register("secondemail", {
                  required: true,
                  validate: {
                    equalsMails: (mail2) => mail2 === getValues().email,
                  },
                })}
              />
              {errors.secondemail?.type === "required" && (
                <span className="text-danger fw-bold">
                  Por favor repetí el correo
                </span>
              )}
              {errors.secondemail?.type === "equalsMails" && (
                <span className="text-danger fw-bold">
                  Los correos no coinciden
                </span>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Procesando compra..." : "Completar Compra"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutRHF;
