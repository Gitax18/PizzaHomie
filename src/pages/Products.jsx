import styles from "./styles/Products.module.css";

import MenuList from "../components/AppLayout/MenuList";

function Products() {
  return (
    <div className={styles.container}>
      <h3>Our Menu</h3>
      <MenuList />
    </div>
  );
}

export default Products;
