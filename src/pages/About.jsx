import styles from "./styles/About.module.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="./images/customersEating.jpg" alt="pizza store customers" />
        </div>
        <div className={styles.right}>
          <h2>About Us</h2>
          <p>
            At PizzHomie, we believe that every pizza should be a work of art.
            Nestled in the heart of Jodhpur, Rajasthan, our cozy pizzeria is
            more than just a place to grab a slice—it&apos;s a community hub
            where friends, families, and pizza lovers unite over the love of
            delicious, handcrafted pies. <br /> At PizzaHomie, we’re committed
            to using only the freshest ingredients, sourced locally whenever
            possible. Our dough is made daily, our sauces are crafted from ripe,
            sun-kissed tomatoes, and our toppings are carefully selected to
            bring you the best flavors imaginable. Whether you’re a fan of
            classic Margherita, a lover of bold and spicy toppings, or someone
            who likes to explore new flavors, we’ve got something for everyone.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
