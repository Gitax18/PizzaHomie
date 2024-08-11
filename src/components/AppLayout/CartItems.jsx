/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./CartItems.module.css";

function Item({ item, setCart, setBill }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(
    function () {
      setBill((bill) => bill + item.price_in_inr * item.quantity);
    },
    [item.price_in_inr, item.quantity, setBill]
  );

  function increaseQuantity() {
    setCart((cart) =>
      cart.map((it) => (it.id === item.id ? { ...it, quantity: quantity } : it))
    );
    setQuantity((quantity) => quantity + 1);
  }

  function decreaseQuantity() {
    setCart((cart) =>
      cart.map((it) => (it.id === item.id ? { ...it, quantity: quantity } : it))
    );
    if (quantity === 1) setQuantity(1);
    else setQuantity((quantity) => quantity - 1);
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.detailBox}>
        <img src={item.image} alt={item.name} className={styles.cartImage} />
        <div>
          <h4>{item.name}</h4>
          <div className={styles.changeQuantity}>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
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

function CartItems({ cart, setCart, setBill }) {
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
          <Item item={item} key={item.id} setCart={setCart} setBill={setBill} />
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
