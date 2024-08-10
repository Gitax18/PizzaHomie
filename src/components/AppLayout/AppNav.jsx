import { NavLink } from "react-router-dom";

import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <NavLink to="products">Menu</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
