import { NavLink } from "react-router-dom";
import styles from "./styles/Header.module.css";
import Logo from "./Logo";

function Header() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <button className={styles["btn-login"]}>Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
