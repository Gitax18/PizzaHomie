import styles from "./styles/Cart.module.css";
import CartItems from "../components/AppLayout/CartItems";
import useLocalStorageState from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import Checkout from "../components/AppLayout/Checkout";

function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", []);
  const [bill, setBill] = useState(0);

  const quantity = cart.reduce((quan, item) => (quan += item.quantity), 0);

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
      {cart.length !== 0 && <Checkout bill={bill} quantity={quantity} />}
    </div>
  );
}

export default Cart;
