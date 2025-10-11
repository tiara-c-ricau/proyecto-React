import '../components/Navbar'

const CartWidget = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#222",
      padding: "5px 10px",
      borderRadius: "8px"
    }}>
      <span style={{ fontSize: "22px", color: "white" }}>🛒</span>
      <span style={{
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "3px 6px",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        5
      </span>
    </div>
  );
};

export default CartWidget;

