import { NavLink } from "react-router-dom";
import styles from "./styles/Header.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";

function Header() {
  const [showMore, setShowMore] = useState(true);

  useEffect(function () {
    if (screen.width <= 630) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  }, []);

  function setMenu() {
    console.log("current showMore: " + showMore);
    setShowMore(!showMore);
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={`${showMore ? styles.showMore : styles.hideMore}`}>
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
      <button className={styles.more} onClick={setMenu}>
        <img src="./icons/more.png" alt="hamburger icon" />
      </button>
    </nav>
  );
}

export default Header;
