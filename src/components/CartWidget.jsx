import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      🛒 <span>{totalItems}</span>
    </Link>
  );
}

export default CartWidget;
/* import './Navbar'

const CartWidget = ({ cartCount }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#222",
      padding: "5px 10px",
      borderRadius: "8px",
      cursor: "pointer"
    }}>
      <span style={{ fontSize: "22px", color: "white" }}>🛒</span>
      {cartCount > 0 && (
        <span style={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "3px 6px",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget; */


