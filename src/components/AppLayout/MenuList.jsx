/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import styles from "./MenuList.module.css";

function itemExists(cart, item) {
  return cart.some((cartItem) => cartItem.id === item.id);
}

function MenuCard({ item, cart, setCart }) {
  const [addCart, setAddCart] = useState(itemExists(cart, item));

  function addToCart() {
    setCart((cart) => [...cart, item]);
    setAddCart(true);
  }

  function removeFromCart() {
    setCart((cart) => cart.filter((cartItem) => cartItem.id != item.id));
    setAddCart(false);
  }

  return (
    <div className={styles.card}>
      <img src={item.image} alt={`${item.name} pizza`} />
      <div className={styles.content}>
        <h4>{item.name}</h4>
        <p>{item.ingredients.join(", ")}</p>
        <span>Rs. {item.price_in_inr}</span>
      </div>
      {!addCart && <button onClick={addToCart}>Add to Cart</button>}
      {addCart && <button onClick={removeFromCart}>Remove from Cart</button>}
    </div>
  );
}

function MenuList({ cart, setCart }) {
  const [menu, setMenu] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        isLoading(true);
        const res = await fetch(
          `https://api.jsonsilo.com/public/72ae1f0b-3377-49a1-bba9-c2907495b62d`
        );
        const data = await res.json();
        const newdata = data.map((item) => {
          return { ...item, quantity: 1 };
        });
        setMenu(newdata);
        if (!res.ok) throw new Error("Error Occured while fetching data");
      } catch (err) {
        console.error(err);
      } finally {
        isLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <h3>Please wait while we&apos;re Loading your menu </h3>}
      {!loading &&
        menu.map((item) => (
          <MenuCard item={item} key={item.id} cart={cart} setCart={setCart} />
        ))}
    </div>
  );
}

export default MenuList;
