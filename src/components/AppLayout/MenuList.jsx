/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import styles from "./MenuList.module.css";

function MenuCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={`${item.name} pizza`} />
      <div className={styles.content}>
        <h4>{item.name}</h4>
        <p>{item.ingredients.join(", ")}</p>
        <span>Rs. {item.price_in_inr}</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

function MenuList() {
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

        setMenu(data);
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
      {!loading && menu.map((item) => <MenuCard item={item} key={item.id} />)}
    </div>
  );
}

export default MenuList;
