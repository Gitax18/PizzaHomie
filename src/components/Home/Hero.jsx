/* eslint-disable react/prop-types */
function Hero({ styles }) {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h1>
          <em>Pizzeria</em>
          <br /> Perfection
        </h1>
        <hr />
        <div>
          <span>Fresh</span>
          <span>Hot</span>
          <span>Delicious</span>
        </div>
      </div>
      <div className={`${styles.left} ${styles.center}`}>
        <img src="pizza-full.png" className={styles.pizza} />
      </div>
    </div>
  );
}

export default Hero;
