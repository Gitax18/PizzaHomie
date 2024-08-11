import { Link } from "react-router-dom";
import styles from "./styles/Page404.module.css";

function Page404() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <span>4</span>
        <img src="pizza-vector.png" alt="pizza vector" className={styles.img} />
        <span>4</span>
      </div>
      <h2>Page not found</h2>
      <Link to="/">
        <button className={styles.btn}>Back to Home page</button>
      </Link>
    </div>
  );
}

export default Page404;
