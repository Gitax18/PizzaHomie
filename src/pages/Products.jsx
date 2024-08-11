import styles from "./styles/Products.module.css";

import MenuList from "../components/AppLayout/MenuList";
import useLocalStorageState from "../hooks/useLocalStorage";

function Products() {
  const [cart, setCart] = useLocalStorageState("cart", []);

  return (
    <div className={styles.container}>
      <h3>Our Menu</h3>
      <MenuList cart={cart} setCart={setCart} />
    </div>
  );
}

export default Products;
