import styles from "./styles/Cart.module.css";
import CartItems from "../components/AppLayout/CartItems";
import useLocalStorageState from "../hooks/useLocalStorage";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", []);
  const [bill, setBill] = useState(0);

  return (
    <div className={styles.container}>
      <h3>Main Cart</h3>
      <CartItems cart={cart} setCart={setCart} setBill={setBill} />
      <h4>Total Bill: {bill}</h4>
    </div>
  );
}

export default Cart;
