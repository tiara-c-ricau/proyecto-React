import '../components/Navbar'
import ItemListContainer from './ItemListContainer';

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

export default CartWidget;


