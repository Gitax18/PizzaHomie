import styles from "./styles/Footer.module.css";

import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      {/* Socials container */}
      <div className={styles.socials}>
        <h3>Connect with us</h3>
        <Logo color="#ffb100" padding="0 2.4rem" size="2.8rem" />
        <div className={styles.links}>
          <Link
            to="https://www.facebook.com/gitanshu.sankhala/"
            target="_blank"
          >
            <img src="./icons/facebook.png" />
          </Link>
          <Link to="https://www.instagram.com/gitanshusankhla/" target="_blank">
            <img src="./icons/instagram.png" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gitanshu-sankhla/"
            target="_blank"
          >
            <img src="./icons/linkedin.png" />
          </Link>
          <Link to="https://x.com/lusifercodes" target="_blank">
            <img src="./icons/twitter.png" />
          </Link>
        </div>
        <p>
          Do connect with us to get latest updates about our new outlets and
          your favourite Pizzas
        </p>
      </div>

      {/* In-site links container */}
      <div>
        <h3>Explore</h3>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Address container */}
      <div>
        <h3>Address</h3>
        <p>
          PizzaHomie Kitchen, 123 Pizza Lane, B road, sadarpura, Jodhpur,
          Rajasthan, India - 342001
        </p>
      </div>

      {/* Location container (Map) */}
      <div className={styles.mapContainer}>
        <img src="./images/map.png" className={styles.map} />
      </div>
    </div>
  );
}

export default Footer;
