import styles from "./styles/Cart.module.css";
import CartItems from "../components/AppLayout/CartItems";
import useLocalStorageState from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", []);
  const [bill, setBill] = useState(0);

  useEffect(() => {
    setBill(
      cart.reduce(
        (amount, item) => amount + item.quantity * item.price_in_inr,
        0
      )
    );
  }, [bill, cart]);

  return (
    <div className={styles.container}>
      <h3>Main Cart</h3>
      <CartItems cart={cart} setCart={setCart} />
      <h4>Total Bill: {bill}</h4>
    </div>
  );
}

export default Cart;
