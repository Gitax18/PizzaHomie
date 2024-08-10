import styles from "./styles/Cart.module.css";
import CartItems from "../components/AppLayout/CartItems";

function Cart() {
  return (
    <div className={styles.container}>
      <h3>Main Cart</h3>
      <CartItems />
    </div>
  );
}

export default Cart;
