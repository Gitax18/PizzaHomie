/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./CartItems.module.css";

function Item({ item, setCart }) {
  const [quantity, setQuantity] = useState(item.quantity);

  function increaseQuantity() {
    ReactDOM.flushSync(() => {
      setQuantity((quantity) => quantity + 1);
    });

    ReactDOM.flushSync(() => {
      setCart((cart) =>
        cart.map((it) =>
          it.id === item.id ? { ...it, quantity: quantity } : it
        )
      );
    });
  }

  function decreaseQuantity() {
    ReactDOM.flushSync(() => {
      if (quantity === 1) setQuantity(1);
      else setQuantity((quantity) => quantity - 1);
    });

    ReactDOM.flushSync(() => {
      setCart((cart) =>
        cart.map((it) =>
          it.id === item.id ? { ...it, quantity: quantity } : it
        )
      );
    });
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.detailBox}>
        <img src={item.image} alt={item.name} className={styles.cartImage} />
        <div>
          <h4>{item.name}</h4>
          <div className={styles.changeQuantity}>
            <button onClick={decreaseQuantity}>-</button>
            <span>{item.quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
      <div className={styles.priceBox}>
        <strong>Rs. {item.price_in_inr * item.quantity}</strong>
        <button
          onClick={() =>
            setCart((cart) => cart.filter((cartItem) => cartItem.id != item.id))
          }
        >
          x
        </button>
      </div>
    </li>
  );
}

function CartItems({ cart, setCart }) {
  if (cart.length === 0)
    return (
      <div className={styles.notFoundBox}>
        <img src="/pizzabox.png" />
        <h3>Your Cart is currently empty, Time to order some Pizzas </h3>
      </div>
    );

  return (
    <div className={styles.container}>
      <ul>
        {cart.map((item) => (
          <Item item={item} key={item.id} setCart={setCart} />
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
