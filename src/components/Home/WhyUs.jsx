/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function WhyUs({ styles }) {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.left} ${styles.fullHeight} ${styles.center}`}>
          <img src="pizza-slices.png" className={styles.pizzaSlices} />
        </div>
        <div className={`${styles.right} ${styles.fullHeight}`}>
          <h2>Why Us ?</h2>
          <p>
            we craft each pizza with the freshest ingredients and a passion for
            quality. Our unique flavors and dedication to excellence ensure
            every slice is an experience to remember. Choose us for a pizza
            that’s made with love and delivered with care.
          </p>
          <Link to="/login">
            <button className={`${styles.btn} ${styles.cta}`}>
              Login to order now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
